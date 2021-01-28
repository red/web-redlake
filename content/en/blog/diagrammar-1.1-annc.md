---
title: 'DiaGrammar 1.1 Available Now!'
date: 2021-01-27T12:00:00.000Z
# slug: Kaarel Eenpalu was born on this day
author: DiaGrammar Team
hero_type: image
hero_src: >-
  https://images.pexels.com/photos/993019/pexels-photo-993019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
category: news
tags:
  - DiaGrammar
---

Just over a month ago we released DiaGrammar 1.0, and we've been hard at work to make improvements and fix bugs we didn't have time to address before DiaGrammar's inaugural release. If you bought 1.0, this upgrade is free for you. Download it [here](https://www.redlake-tech.com/releases/DiaGrammar_v1.1.zip).

## Highlights

We've added or improved a number of features:

* Changed `Red` in headers to `DiaGrammar`. While DiaGrammar is written using the Red Language, and %.rule data files are loadable directly by Red, using `Red` in the header was an artifact of early development, and doesn't indicate what app the files are intended to be used with. The most important aspect of this change is that all example files have been updated for this release. Any grammar files you created with v1.0 need to be updated as well. We apologize for this inconvenience to our early users, but it's the best long-term solution.

* Adjustment of position of lowest rule's popup, so it doesn't appear outside the diagram bounds. We had gotten used to the old behavior, but new users have fresh eyes, and your feedback can lead to improvements like this.

* Added note to Help about the ability to close multiple popups wit SHIFT-ESC. We try to document everything, but as developers sometimes we take for granted how a feature works, or even forget ourselves that one exists because there are so many. 

* Missing rules show as missing in status area when hovered over. We're thinking about even better ways to alert the user to this condition, and other UI aspects. 

## Paths: Getting there from here

After 1.0 was out, we noticed that some of the sample files we shipped had local path information in them, meaning they didn't work as expected on user's systems. DiaGrammar remembers what input files you used with a grammar, but those might be anywhere. It's always a challenge with software that tries to be helpful to decide when it's best to use absolute versus relative file references. DG also automatically saves these references when you save your grammar, so as we develop and test locally, it's possible for those changes to find their way into a release. Because we have so many samples, it was going to be a big task to check them all once we updated DG to use relative paths for them. Fortunately, DG is written in Red, which made automating this task easy. We now have a tool to automatically check for a number of conditions while preparing a release, and adding more checks is easy.

## Diagram Enhancements

As we continued to look for test grammars in the wild, and started applying diagrams to external content, we found new cases we hadn't considered. For example, DG lets you change colors and styles easily, but matching colors for a web site was still tedious and error prone. So we added an option to make exported diagrams transparent. We also found that in some contexts it was better to include a border around the rule, but not always, so that's also an option now. 

But one of our biggest surprises came when we found the OData ABNF grammar. It's an extended version of ABNF, but thanks to DG's metagrammar architecture, creating an OBNF version was easy. With that their grammar rendered perfectly. But it was large. Very large. 438 rules to be precise. As a single PNG diagram it would be 2337x73562 pixels. When we tried to export it, we hit an internal limitation at a vertical image size of 65536 pixels. We can increase that limit, but images that large are not easy to work with. By the time you scale them down you can't see details, but at their normal size you have to scroll...and scroll...and scroll.

DG makes this so easy natively (e.g. you can `ctrl+scroll` to navigate a rule at a time in the diagram) that we didn't realize how painful it is with many other image viewing tools. But having a large number of separate PNGs may not be easy either, so we came up with a better solution. There's a new `Selection` feature that lets you select any contiguous group of complete rules and only those rules will be diagrammed and exported. This lets you, for example, select all the numeric or date related rules in your grammar and render them as a plate-sized diagram (if separate rules are bite-sized and the entire grammar is a buffet). 

Side Note: We have since found and even larger ABNF grammar, for Excel formulas. It has 1'145 rules and would render to a diagram 2634x216235 pixels in size. How do we know this, if it's too big to render? Red to the rescue again. We wrote a script to tally the size of all images in a folder, if stacked vertically, then exported each rule as a separate image and ran that script against them.



## DiaGrammar 1.1 Changelog

```
1. Styling:

FIX  +a) Prevent deletion of style values on form
FIX  +b) Adjust box size of bold/plain font change
FIX  +c) Honor saved style for grammar

2. Export:

FIX  +a) Repaired each exporting 
FEAT +b) Add selection option for exporting selected rules only
FEAT +c) Add "Transparent(/Opaque)" and "(No )Border" options to "Preferences/Export"
FEAT +d) Add warning for too large png-s (limit ~65500px height)

3. Statistics on parsing: 

FEAT +a) No. of files (if directory)
FEAT +b) No. of lines (if testing)
FEAT +c) Time of parsing

4. Grammars:

FEAT +a) rfc3261-SIP.abnf
FEAT +b) odata.obnf family
FEAT +c) meta.obnf
FEAT +d) declaration-reference.rule (for TSDoc)
FIX  +e) Remove references to local files/folders from grammars.

5. Chars and charsets:

FEAT +a) Add some formatting options to char (decimal, control, escape)
FEAT +b) Improve C-escape backslash format

6. File:

FEAT +a) integrate inclusion permanently (from experiment to regular)
FEAT +c) Open included files from context menu

7. Parsing:

FIX  +a) Improve block-parsing
FEAT +b) *.test inputs for testing individual rules.

8. Misc:

FIX  +a) Trim license key on initial validation.
DOC  +b) Change tooltip for Parse: "Press to parse input(s)..."
DOC  +c) Improve help, adding missing items and fixing others
```

