---
title: An intro to DiaGrammar
date: 2021-01-11T12:00:00.000Z
slug: An intro to DiaGrammar
author: DiaGrammar Team
hero_type: image
hero_src: >-
  https://images.pexels.com/photos/993019/pexels-photo-993019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
category: news
tags:
  - DiaGrammar
---

##Diagrammar and the importance of a postal address

Post is important to us. Both for personal reasons, administrative post and online deliveries. During the holidays, on your birthday, post has value, just like a package that was gifted or ordered. And then there is the necessary administrative post - voting by post during corona as an example.

But that's not all - companies also send massive amount of packages and cargo, as well as forms, despite digitization.

And what is one of the key pieces of information to make this all possible? **The address.**

That's what we'll use to develop an example grammar. Now there are almost as many address schemes as their are countries, so we need to pick one. It has to satisfy the following criteria:

- widely used, so we do something relevant
- widely known, so chances are, you, the reader, are familiar. This makes it easier to follow along.
- moderately complex, so we can show some really useful red grammar concepts. But not so complex that you're overwhelmed, or so simple that you'll learn nothing.

In the country where I live, the Netherlands, we hardly meet any of these requirements. All that's needed is the zip code and the house number, like so `1011AB 17`. On the other hand, a US address hits all of the criteria. Just look at this example US address (source: UPS):

```
ANDREA GARCIA
47 ANYVILLE RD NW #2
ANYTOWN AZ 01234
```

What makes this extra interesting is that the US is a federation, so you get the added bonus of a state as "routing layer" in the address. We wanted to write a grammar for a widely used address scheme that is also reasonably well-known. The US address scheme seems a good candidate, so we'll go with that.


##Defining a grammar

If you think about it , an address is a piece of routing information botttom-up.
First the name, then the road, then (optional) direction, then number, then town the state. Only zip code breaks the layering, but we'll accept that as exception to the rule.

So we can mimick this order in building our grammar. The approach we take is explaining the new red grammar constructs used, followed by the rules that use them. And we'll do that in order of building the address.

The first thing you have to know is `;` - everything followed by that is a comment.
The next handy functionality is groups (blocks): `[   ]` . Anything between square brackets is a block. Keep in mind you can nest blocks, like ` [ [] ]`. This will turn out to be handy for grammars.

Next: the rule definition. It's a plain word followed by a colon such as `rule:`. The actual rule is then inside.... a block. And finally the `charset` function. a `charset` takes a block as parameter that specifies a range, such as `UPPER: charset [ #"A"  - #"Z"]` . This defines the rule `UPPER` to be any character in the alphabet, uppercase form. One little note to add (and that's where the char in charset comes from): when using letters they have to be of the type `char!` , hence the prefix with the `#`, which is a requirement for a char.

That was quite a lot, but let's  get to our first few rules:

```
; Rule names are case insensitive. So rule name UPPER == upper
UPPER: charset [#"A" - #"Z"]        ; character set range
ALPHA: charset [#"A" - #"Z" #"a" - #"z"]  ; multiple ranges
DIGIT: charset "0123456789"          ; string can be used too
VCHAR: charset [#"^(21)" - #"^(7E)"]    ; and hex code ranges
SP: #" "                  ; single character
```

If you read the comments after each rule, then with the knowledge you have so far you should be able to read it. So let's move on.

We also want line breaks, but they may be `LF` or `CR LF`
Instead of writing two rules and then have to do al sorts of trickery, Red provides the `opt` directive.
`opt` always succeeds but makes the next rule "optional" - it may or may not be there. So for line breaks we define

`BR: [opt CR LF]                ; CRLF or LF`

And as you can see, both `CR LF` and `LF` will match. When using more nested complex sub-rules, `opt` will also come in handy. This brings us to our next rule. It defines the postal address with forward references to sub-rules. Note that the names of these references are human-readable. You can give a rule any name you want, but by making them human-readable and structuring your grammar it will read much more naturally and communicate the grammar's intent easier.

`postal-address: [name-part BR street BR zip-part opt BR]`

First, let's look at the name part. it has an optional personal part, a mandatory last name and an optional suffix.
The name-part of the grammar looks like this:

```
name-part: [
  opt personal-part last-name opt [SP suffix]
]

personal-part: [first-name SP opt initial]
first-name: [some ALPHA]
initial: [ALPHA #"." SP]
last-name: [some ALPHA]
suffix: ["Jr." | "Sr." | "I" opt ["II" | "I" | "V"]]
```

Let's break it apart:
- A first name is just a bunch of letters, e.g. `Joey`
- The personal-part consists of a firstname followed by one optional suffix initial. An initial is a letter followed by a dot and a space, so that we would be `Joey B. `
- Last name is again a bunch of letters, so we get `Joey B. Cool`
- The optional suffix is a either nothing or a space and something like  "Jr." , "Sr." etc. e.g. `Joey B. Cool Jr.`

There is a small red parse lesson here: alternatives (OR) are denoted by a `|` as you can see in the suffix rule. These often come in handy for alternative subrules. Next, we'll define the street rule. We need to have an extra tool in our chest for that. First, two numbers followed by a rule means a range of times that rule can occur. An example: `[1  5 rule]` means you can have anywhere from 1 to 5 times that rule. Now we're ready for the street rule:

```
street: [[apt SP house-num SP | house-num SP] street-name]
apt: [1 4 DIGIT]
house-num: [1 8 [DIGIT | ALPHA]]
street-name: [some [VCHAR | SP]]
```

Let's just write out what every rules says:
- a street is an apt followed a SP, a nd house-num and a space OR a house-num by a space.
- we then take that and have it followed by street-name. Here you see the power of nested grouping.
- apt is just 1 to 4 digits (numbers), like `4560`
- house-num is 1 to 8 digits or letter, but because we nest the next block `[ALPHA | DIGIT]` (letter or number), they may mix, e.g. `14b`
- street-name is one or more VCHAR or spaces, intermixed, like `Strawberry Lane`

In street-name, we introduced the keyword `some` which means "at least one or more". `some` has a sibling `any`, which means "zero or more". This would have been handy if we had wanted to add e.g. a street-name-2.
`street-name-2: [ any [ VCHAR | SP]]`
....which would match the same as street-name, **but also nothing**!. Effectively making it optional in this grammar.

And now for the final part:

```
zip-part: [town-name "," opt SP state [1 2 SP] zip-code]
town-name: [some [ALPHA | SP]]
state: [2 UPPER]
zip-code: [5 DIGIT opt [#"-" 4 DIGIT]]
```

Let's break it again as ususal:
- The zip-part is the toplevel rule that brings it altogether. We'll traverse them one by one.
- town-name is just one or more letters or a spaces, so you can match cities like `New York` against that.
- "," is a literal string match. Very easy, but not mentioned before and worth knowin as a concept.
- state is just a space followed by 2 uppercase letters, like `NY`
- and then we have 1 or 2 spaces followed by zipcode as per the nested block
- zipcode is 5 digits, and optionally a dash and 4 more digits, like `24367` or `24367-0987`

And that's it! We have developed a grammar for a US Postal address!
Below we give the complete grammar, so you can copy and paste it into DG and tinker with it. Have fun!


```
; Rule names are case insensitive. 
UPPER: charset [#"A" - #"Z"]        ; character set range
;LOWER: charset [#"a" - #"z"]
ALPHA: charset [#"A" - #"Z" #"a" - #"z"]  ; multiple ranges
DIGIT: charset "0123456789"          ; string can be used too
VCHAR: charset [#"^(21)" - #"^(7E)"]    ; and hex code ranges
SP: #" "                  ; single character
BR: [opt CR LF]                ; CRLF or LF

postal-address: [name-part BR street BR zip-part opt BR]

name-part: [
  opt personal-part last-name opt [SP suffix]
]

personal-part: [first-name SP opt initial]
first-name: [some ALPHA]
initial: [ALPHA #"." SP]
last-name: [some ALPHA]
suffix: ["Jr." | "Sr." | "I" opt ["II" | "I" | "V"]]

street: [[apt SP house-num SP | house-num SP] street-name]
apt: [1 4 DIGIT]
house-num: [1 8 [DIGIT | ALPHA]]
street-name: [some [VCHAR | SP]]

zip-part: [town-name "," opt SP state [1 2 SP] zip-code]
town-name: [some [ALPHA | SP]]
state: [2 UPPER]
zip-code: [5 DIGIT opt [#"-" 4 DIGIT]]
```