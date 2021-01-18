---
title: Diagrammar features
date: 2021-01-11T14:00:00.000Z
slug: Diagramma features
author: DiaGrammar Team
hero_type: image
hero_src: >-
  https://images.pexels.com/photos/993019/pexels-photo-993019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
category: news
tags:
  - DiaGrammar
---
## Introduction

DiaGrammar packs a lot of features to ease parser development and improve communication.
In this section we'll list most of then, and you'll find gems like:
- multiple grammar support 
- live rendering
- jumping between rules in sync between grammar and canvas area.
- and many more...

We'll approach this as follows: First we have a section about what everything in the menu bar does.
Then we'll have sections for each of the three areas: grammar, canvas and input.

Let's get started!

## The menu bar
First we have the file menu. This is where you can load or save gramars and inputs for testing.
The first few `New`, `Open` ,`"Save`and  `Save as` do as they say on the **Grammar area**.

Next is `input` which has 5 submenus:
- New: this will place the cursor in a blank input area.
- Open: use this if you want to read the input from file.
- Open dir: if you have a collection of inputs, you can put them in a directory and just open it.
- Save: saves your input.
- Save As: saves your input under a different name. 

The next submenu is `canvas`, which allows you to export three rules in PNG, either zipped or not:
- All rules
- Each rule as separate rule
- the main rule

Then we get to `Pack`: pack makes a bundle from you inputs, grammar and metagrammar, so you can "Pack and go".

And finally we have `Quit`. Seems self-explanatory.

Then comes the main entry `Edit`: it has only one submenu to find strings in either the grammar or the input area.

The next main entry is `Preferences`, to make DiaGrammar work the way you like. One item is worth mentioning: DiaGrammar ships with a lot of "grammar types", e.g. ABNF. When you select `metagrammar` , and navigate to your `<INSTALL DIR>\rule\meta` , you'll see them. By choosing one, you can write your grammar in e.g. ABNF in stead of red. If you
open a file that would have a recognized meta-extension, such as `grammar.abnf`, DiaGrammar will automagically set
the metagrammar to ABNF for you.

The next main menu entry is `Style` - how things look. It's best just to experiment with that. You can do some pretty cool stuff, for example change the color scheme to a corporate scheme. And you can save color schemes... 

And finally there is a built-in help under `Help`. Have a look and read.It's maybe a 20 minute read, but time well spent.


## The Parse area

This is where you'll type the grammar. There's a few things to know:

- `parse` renders "live on the canvas"

- if your grammar has an error, it won't render

- if you click on a rule in the parse area, the canvas will slide to that rule. And vice versa.

- when developing a grammar it's best to do it line by line, or a few lines at a time. That way you
prevent yourself from looking through when you make a typo. Early error detection.

- DiaGrammar uses Red which belongs to the class of PEG grammars. PEG grammars are greedy, so the first
match is a success. This is why you should put your longest rule first in case of alternatives.


## The Canvas area

The canvas area is the visual representation of your grammar. With a righ-click (context menu)
you get the same functionality as in the menu under `File\Canvas`.

THe canvas won't render if your grammar has a bug - so I usually check every 1-2 lines if things
are still rendering at my latest rule.

The grammar is also where you can put the `Styles` menu to use. It's best to play around a bit (and
use the preview for every style item you change). This way, you can match the color scheme with your
site, company theme, or just to your liking. Once you're done, you can save the changes and next time
the style will be there for you.

## The input area

`Inputs` are tests against a rule in your grammar. When the grammar is done, I typically select the main rule.
To the left of the input area you see a dropdown with parse rules to test against, you can also pick one of those. To 
the right there are a few tick marks, with `string` and `case` breing the most important. Red has a mode
called block-mode parsing, where the string is loaded into a block and all word or expressions get a type.
You can then parse like you would with strings, but say you want a date, description and some binary data.
The rule for that in block parsing becomes `[ date! string! binary!]` - quite handy. We'll revisit block
parsing later, more in depth.

`case` is is a simple switch to indicate whether you string should be parsed case-sensitive.
`header` indicates whether to include an input header.
`live` parses input as you type.
On the next line, `form` checks to see the block parsing results formed. We'll come back to that 
when we dive into block parsing.

And now for my favourite feature: the button "Generate".  Generate generates inputs that match the selected rule.
This is like a reverse test: does my input match exactly what I think it does, or less, or more. Also
handy for a quick demo!

And that's it. I hope you've enjoyed the blog post and feel freet to give comments!


