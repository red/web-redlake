title: DiaGrammar parsing: the Prequel
date: 2021-01-17T12:00:00.000Z
slug: An intro to DiaGrammar
author: DiaGrammar Team
hero_type: image
hero_src: >-
  https://images.pexels.com/photos/993019/pexels-photo-993019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
category: news
tags:
  - DiaGrammar
---
## The prequel

If you are going to use DiaGrammar with the Red dialect, there might be some things that are handy from Red.

There are command line options. You can find them under the `Help` menu.
As mentioned before, Red has two modes of parsing:
1. String parsing.
2. Block parsing.

In both cases the rules are contained in square brackets `[   ]` and called blocks.
But where as in string parsing you think in terms of the string you want to parse,
such as "The quick brown fox ate the hen." when block parsing your data has Red types.
Which means that you can match on a type (typically ending in an exclamation mark, like `date!`)

An example: parse [ sell all MSFT shares after 05/09/2021] ['sell 'all 'MSFT 'shares 'after date! (sell-shares 'MFSFT')]

The quotes allow you to use literal words, and the date is matched not as string, but as the date! type. If there is a match we use an action (the paren) to call a fictitious function that will sell the microsoft function.

We can do this, because in Red data is code is data, so anything in a block has a type and blocks can be manipulated, parsed and executed. These are both valid Red:

`do load [ 1 + 2]`
>>3

parse [ 1 + 2][number! '+  number!]
>>true

The implication for parsing is that the Red dialect can rather easily remove or add to the block currently being parsed, or set positional marker and jump between them. But most of all, you can match against over 40 datatypes which will reduced the amount of errors compared to defining everything as a string.

Once you start using your Red parsers there are a few handy things to know in Red - just to get you started.

- as you get more rules, use an `object!` to group them, and keep intermediate state
- files start with a % sign, so you'd get %/C/path/to/my/cool/parser.red
- you can write e.g. your rules to disk with `write %/C/path/to/my/cool/parser.red mold rules`. This assumes all you rules are in an object.
- conversely, you'll get the object with all your rules back by load `%/C/path/to/my/cool/parser.red`


So how do we get an object? First, write your parser in DiaGrammar.
Now, change you top-level rule from in your favourite text editor:
`rule: [ .... ]` to

`set 'rule [ .....]`
This will make **only** the top-level rule visible in the global context. Think of it as "exporting it" if you wish.
To create the object all you have to do now is go one line above where your rules start and type:
`context [`

Then go to the last rule and after that type `]` - you guessed right: `context` creates an object!

On to the next blog where the parsing begins...



