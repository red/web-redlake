---
title: An intro to DiaGrammar
date: 2021-01-15T12:00:00.000Z
slug: An intro to DiaGrammar
author: DiaGrammar Team
hero_type: image
hero_src: >-
  https://images.pexels.com/photos/993019/pexels-photo-993019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
category: news
tags:
  - DiaGrammar
---
## What is a grammar?

A grammar is a set of rules that describe what a piece of text should look like, often
in an (abstract) syntax tree form. There are various classes of grammars, such as 
recursive-descent (LL(k)) - a top down form, LALR - also top-down, so we have a top-down family.
Then we have PEG parsers, and packrat parsers, who typically execute PEG parsers via memoization
(memoization is the fact that you compute an expression once, so it speeds up parsing. The downside
is memory consumption).

Grammars have a notation, and use that specific notation for a specific parser generator 
to generate a parser.

## Grammars vs metagrammars

DiaGrammar has an extra treat - it can't just parse using it's extremely powerful Red dialect,
but also using a thing called metagrammars. So what is metagrammar?

A metagrammar is written in Red and translates the "foreign" grammar into something DiaGrammar 
can understand. And then you can do all the same stuff with inputs, styling, etc. Metagrammars 
are written in Red, but they typically operate behind the scenes.

So how to use them for e.g. ABNF? There's more than one way to do it...

- if you open a rule and the extension is `abnf` DiaGrammar will load the metagrammar for you.
- if you go to the the menu, preferences, then select metagrammar. Now enter the rules directory and 
  select one of the meta files. This is you new grammar type.

 In stead of giving an example I encourage you to try this feature first. Or you could browse into the
 `abnf` subdirectory, in the file dialog select "all files", and choose `json.abnf`. Now one little 
 extra that popped up is the translate button - say you wanted to see the Red version. 
 Click "Translate" and the pop-up shows the Red version. That's what metagrammars can do for you. 
 Pretty cool if you ask me.

