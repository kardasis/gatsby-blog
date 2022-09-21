---
templateKey: 'blog-post'
title: 'Tricking your markdown into styling'
date: 2022-09-21T10:00:00.000Z
featuredpost: true
featuredimage: /img/markdown_styling.png
description: >
    Do you need to get some extra style into your Gatsby markdown? Try this!
tags:
  - Gatsby
  - quickies
  - markdown
  - remarkjs
---
As I'm writing my upcoming blog post about ActiveRecord and class inheritance, I came across an issue where I'm trying to style an individual cell in a table. The table contents come from markdown:

```markdown
| id  | count | start_time  |
| --- | ----- | ----------- |
| 1   | NULL  | Friday, 1PM |
| 2   | 12    | NULL        |
```

And I would like to show the cells containing `NULL` with a red background (because they're bad).

### Well here's one quick tip to style your markdown:  

Find a good proxy for the meaning you're trying to convey, in my case, I'm using strikethrough (because of bad), so my markdown table is going to look like this:

```markdown
| id  | count    | start_time  |
| --- | -------- | ----------- |
| 1   | ~~NULL~~ | Friday, 1PM |
| 2   | 12       | ~~NULL~~    |
```

You could use italic or strong if you want. Whatever makes your markup look right.

[Remark](https://github.com/remarkjs/remark) handles this by wrapping my the `NULL`s in `<del>` tags, and with the [(not totally, but pretty much ready)](https://caniuse.com/css-has) `:has` parent selector in css, you can remove the strikethrough and replace it with a red background on the `<td>`
```css
td del {
    text-decoration: none;
}
td:has(del) {
    background-color: red;
}
```

And, voilà!, we have our table as we hoped:

| id  | count    | start_time  |
| --- | -------- | ----------- |
| 1   | ~~NULL~~ | Friday, 1PM |
| 2   | 12       | ~~NULL~~    |

## Afterward
There is another way to do this.
I'm a little conflicted on the relative merits, but here goes.
Instead of using strikethrough, you can apply a class directly with HTML tags in the markdown 

```markdown
| id  | count                          | start_time                     |
| --- | ------------------------------ | ------------------------------ |
| 1   | <td class="red-null">NULL</td> | Friday, 1PM                    |
| 2   | 12                             | <td class="red-null">NULL</td> |
```

and style the `td`s directly with 

```css
td.red-null {
    background-color: red;
}
```

This is obviously better since it doesn't use `has:`, which is not fully supported yet ... but, I much prefer using markdown to convey content and semantic intent rather than adding HTML and classes, which is clearly wrong. 
For now, I'm going with the bleeding edge `has:` because I like it and because it won't severely break anything if it's not supported.