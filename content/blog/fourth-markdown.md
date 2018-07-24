---
date: 2018-05-28T13:52:27-05:00
title: Markdown test
author: Nenad Rakocevic
category: update
tags:
  - gui
  - macos
  - blockchain
hero_type: image
hero_src: https://images.pexels.com/photos/993019/pexels-photo-993019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices magna in vehicula imperdiet. Nunc pellentesque ligula et vehicula elementum. Suspendisse faucibus fringilla neque, ut lacinia erat pulvinar sit amet. Aliquam vel ex erat. Nulla ultrices tellus enim. Proin at tristique tortor. Nullam ut tellus eu ipsum tristique pretium dictum vitae ex. Suspendisse euismod finibus odio, vel aliquet lorem. Proin condimentum id tortor in eleifend. Suspendisse varius euismod viverra. Phasellus sit amet nisi eget nulla tincidunt euismod nec eget leo. Curabitur ornare quam mattis magna pharetra dapibus. Aliquam placerat diam eu erat lobortis laoreet. Nunc eleifend convallis neque non mollis. Curabitur condimentum diam ante, sed laoreet quam rutrum in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices magna in vehicula imperdiet. Nunc pellentesque ligula et vehicula elementum. Suspendisse faucibus fringilla neque, ut lacinia erat pulvinar sit amet. Aliquam vel ex erat. Nulla ultrices tellus enim. Proin at tristique tortor. Nullam ut tellus eu ipsum tristique pretium dictum vitae ex. Suspendisse euismod finibus odio, vel aliquet lorem. Proin condimentum id tortor in eleifend. Suspendisse varius euismod viverra. Phasellus sit amet nisi eget nulla tincidunt euismod nec eget leo. Curabitur ornare quam mattis magna pharetra dapibus. Aliquam placerat diam eu erat lobortis laoreet. Nunc eleifend convallis neque non mollis. Curabitur condimentum diam ante, sed laoreet quam rutrum in.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices magna in vehicula imperdiet. Nunc pellentesque ligula et vehicula elementum. Suspendisse faucibus fringilla neque, ut lacinia erat pulvinar sit amet. Aliquam vel ex erat. Nulla ultrices tellus enim. Proin at tristique tortor. Nullam ut tellus eu ipsum tristique pretium dictum vitae ex. Suspendisse euismod finibus odio, vel aliquet lorem. Proin condimentum id tortor in eleifend. Suspendisse varius euismod viverra. Phasellus sit amet nisi eget nulla tincidunt euismod nec eget leo. Curabitur ornare quam mattis magna pharetra dapibus. Aliquam placerat diam eu erat lobortis laoreet. Nunc eleifend convallis neque non mollis. Curabitur condimentum diam ante, sed laoreet quam rutrum in.


## Horizontal Rules

___

---

***


## Typographic replacements

(c) (C) (r) (R) (tm) (TM)

ellipsis test.. test... test..... test?..... test!....


"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquote lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultrices magna in vehicula imperdiet. Nunc pellentesque ligula et vehicula elementum. Suspendisse faucibus fringilla neque, ut lacinia erat pulvinar sit amet. Aliquam vel ex erat. Nulla ultrices tellus enim. Proin at tristique tortor. Nullam ut tellus eu ipsum tristique pretium dictum vitae ex. Suspendisse euismod finibus odio, vel aliquet lorem. Proin condimentum id tortor in eleifend. Suspendisse varius euismod viverra. Phasellus sit amet nisi eget nulla tincidunt euismod nec eget leo. Curabitur ornare quam mattis magna pharetra dapibus. Aliquam placerat diam eu erat lobortis laoreet. Nunc eleifend convallis neque non mollis. Curabitur condimentum diam ante, sed laoreet quam rutrum in.

## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`


## Code

Inline code: `foreach el thing [print rejoin [el "!"]]` and more text after, wrapping onto the next line.

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting (TODO)

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
| thing  | $0.00 |


### Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
| thing  | $0.00 |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
