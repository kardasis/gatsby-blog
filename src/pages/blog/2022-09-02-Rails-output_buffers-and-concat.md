---
templateKey: 'blog-post'
title: 'Rails output_buffers and concat'
date: 2022-09-02T15:04:10.000Z
featuredpost: true
featuredimage: /img/concat.jpg
description: Rails templating has some hidden secrets that we'll look into in this post
tags:
  - rails
  - quickies
---
Recently, I was building out a form in a rails ViewComponent and I came across an issue where only the last child in the form was being displayed: 

```ruby
# app/components/add_exercise_component.rb
def exercise_form
  form_with model: [@workout, RepsSet.new], method: :post do |f|
    f.select :name, %w[pushups situps]
    f.number_field :amount
  end
end
```

```erb
# app/components/add_exercise_component.html.erb
<%= exercise_form %>
```


I naively assumed that the form builder, `f` in the block would translate into `form_with` returning a single string with the accumulated form elements.  But, in reality, each line in the `form_with` block is returning a string and the only reason this works the way I expect in erb files is because we're wrapping each one in `<%= ... %>`, which renders the form element into an `output_buffer` that's scoped with the block. 

NB: `<%= ... %>` is called an <em>expression tag.</em>

## `concat` to the rescue

So, how do we manage?  Just wrap each line in a call to `concat`, which does exactly what the `<%= expression %>` tags do in ERB templates: append the argument to the `output_buffer`.  The result looks like this: 

```ruby
# app/components/add_exercise_component.rb
def exercise_form
  form_with model: [@workout, RepsSet.new], method: :post do |f|
    concat f.select :name, %w[pushups situps]
    concat f.number_field :amount
  end
end
```

You can even look at the contents of the `output_buffer` whenever you want with a `pp` or whatever:

```
"<select name=\"reps_set[name]\" id=\"reps_set_name\"><option value=\"pushups\">pushups</option>\n<option value=\"situps\">situps</option></select><input type=\"number\" name=\"reps_set[amount]\" id=\"reps_set_amount\" >;
```

## The other thing: `capture`

The other thing to note here is that if you plan on doing this sort of thing when you're not in a `form_with` block (or `content_tag` or `link_to` etc), things are going to get freaky.  Assuming you want your helper method to output something, you'd rightly put it in an expression tag like `<%= cool_helper %>`, but the problem with this is that if you define 

```
def cool_helper
  concat 'hi '
  concat 12 + 5
end
```

Then you'll get some weirdness.  `concat` will be adding things to the <em>page's</em> `output_buffer` because there is no internal `output_buffer` defined in the scope, like there is in `form_with`, etc.  That is kind of fine, except that cool_helper will also return that `output_buffer` to the expression tag, which will render the whole thing again.  So if you put the two expression tags next to each other on the page:

```
<%= exercise_form %>
<%= cool_helper %>
```

you'll not only get `hi 17` appearing twice, you will also see the form appearing twice.  The fix here is to wrap the contents of your `cool_helper` with a `capture` block, which just provides the inner `output_buffer` so `hi 17` isn't rendered onto the page and `cool_helper` only returns its own stuff, not the whole page:
```
def cool_helper
  capture do
    concat 'hi '
    concat 12 + 5
  end 
end
```
## So, 
The inner workings of ERB and the `output_buffers` are super interesting.  I recommend taking a look at the code for a few of these items: 
 - [form_with](https://github.com/rails/rails/blob/main/actionview/lib/action_view/helpers/form_helper.rb#L754)
 - [capture](https://github.com/rails/rails/blob/01d345c4d6b9639a21b92482046e075ef195da92/actionview/lib/action_view/helpers/capture_helper.rb#L43)
 - [concat](https://github.com/rails/rails/blob/23c3202de1c73b2b1fb43e917032f2471e8e5633/actionview/lib/action_view/helpers/text_helper.rb#L58)