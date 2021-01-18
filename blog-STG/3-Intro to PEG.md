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
recursive-descent (LL(k)) - a top down form, LALR - also top-down - so we have a top-down family.
Then we have PEG parsers, and packrat parsers, that typically execute PEG parsers via memoization
(memoization is the fact that you compute an expression once, so it speeds up parsing. The downside
is memory consumption).

## PEG parser operation

So how does a PEG parser operate? Typically, it sees an endless list of strings and it has a set 
of rules. PEG parsers are said to be "greedy", meaning they'll match the first rule they can.
This may lead to unintended side-effects, if a sub-rule and a rule are in the grammar, the sub-rule
comes first, and matches the input. The more complex rule never gets parsed and you may very 
well a parse error! 

That's why:
**In PEG Grammars the most complex rule always comes first"**

Another thing you can't do is create a left-recursive grammar. i.e., rules that allow a nonterminal to expand to an expression in which the same nonterminal occurs as the leftmost symbol. For a left-to-right top-down parser, such rules cause infinite regress: parsing will continually expand the same nonterminal without moving forward in the string.

Therefore, to allow packrat parsing, left recursion must be eliminated. For example, in the arithmetic grammar above, it would be tempting to move some rules around so that the precedence order of products and sums could be expressed in one line:

```
Value   ← [0-9.]+ / '(' Expr ')'
Product ← Expr (('*' / '/') Expr)*
Sum     ← Expr (('+' / '-') Expr)*
Expr    ← Product / Sum / Value
```
`Source Wikipedia`

The process of rewriting this (for eventually) packrat parsers to not be left-recursive can be very difficult. It is therefor best to be aware and be vigilant in parser design that left recursiveness doesn't (sometimes indirectly) 
creep in.

## Block parsing

Red's PEG parser can operate in one of two modes:
- string parsing
- block parsing

The latter allows you to parse Red code that is contained in `[ ]` - a block. Now you can match against more than 40 datatypes, PLUS all the string rules. E.g. parsing a date isn't a set of (string rules) but just match against date! 
(an exclamation mark indicates a datatype).

A simple example:
`parse [ 10] [copy n number!]`
will copy the number 10 to the word n.

This is just a teaser, we'll dive into (block) parse/parsing and PEG much deeper in coming articles. But I hope you
appreciate the depth that can be achieved using the Red grammar, and the ease with which you could e.g. write a DSL.



