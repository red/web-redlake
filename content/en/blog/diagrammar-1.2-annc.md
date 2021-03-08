---
title: 'DiaGrammar 1.2 Available Now!'
date: 2021-03-08T12:00:00.000Z
author: DiaGrammar Team
hero_type: image
hero_src: >-
  https://images.pexels.com/photos/993019/pexels-photo-993019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
category: news
tags:
  - DiaGrammar
---

Another month, another DiaGrammar release. 

If you bought 1.0, this upgrade is free for you. Download it [here](https://www.redlake-tech.com/releases/DiaGrammar_v1.2.zip).

## Highlights

We've added %json.org.style for those who want to match what Douglas Crockford
uses at JSON.org. We also have an experimental %wikipedia-plain.style, which
we're happy to share with you if you want to test it before the next release.
Both of these styles are based on a black and white theme, and the JSON.org 
style shows how you can change the open/close shapes for rules. We'll add 
more docs and features on style editing in the future.

We got some new metagrammars solidified enough to inlcude in this release as
well: BNF, EBNF, [case sensitive ABNF](https://tools.ietf.org/html/rfc7405),
and grammarkdown. The TOML grammar was improved, and we added both standard
and ABNF grammars for semver.

A number of improvements were made to `#include` handling, allowing you to
open them directly and use them in metafiles.

Syntax error checking on grammars is now available. It's a first step, which
just tells you, by turning the grammar label red, that something it wrong.
This helps because if live rendering is on, you may not notice that you have
an error in your grammar that's keeping it from updating. In the future we'll
provide more detailed information about syntax errors directly. In v1.2 you
can open the log to get more information about where the error is.

# D2D

Red, which DiaGrammar is built with, recently changed its Windows back end
graphics API to D2D, replacing the old GDI+ version. This was a huge amount
of work, and ushers Red into the modern age with regard to hardware
acceleration and other benefits GDI+ didn't offer. But while the underlying
details were hidden from the high level DiaGrammar code, the two systems do
not produce visually identical results.

We tend not to think about all the moving parts that go into a software
chain, and may not see differences in many applications. But because DG
tries to render and align things with a high degree of precision, to make
your diagrams look their best, any change in how font metrics or how rendered
text is measured can show up as things looking...not quite right. This was
the case when we started building against the D2D version.

Debugging these issues is always fun. It wasn't like all the text consistenlty
moved the same amount to the left. That would be too easy. This meant opening
a lot of grammars and visually inspecting them, trying to find patterns in
how alignment and spacing changed so we could adjust the rendering engine 
accordingly. The results are good, but we want to improve them even more. 

If you happen to find a case where something looks off in a rendered diagram,
contact us and we'll add your sample to our list for future tests.

# Bookmarks

v1.2 has a great new feature; bookmarks. DG had history navigation before, 
where if you double clicked on a rule name in the diagram it would note that
as a history point and let you step forward and back through those anchors.
But there was no way to see that history, or to move between them in a
non-linear fashion. Now you can.

Ctrl+B opens the bookmark window, showing the list of rules you can step
between, and also lets you select any of them from that list and jump right
to it. Better still, that list can be saved with the grammar, so it's there
the next time you open it.

More details can be found in the Help system built into DG.

# Test files

DG now has a special *test-file* format, where you can describe example inputs
that different rules should be able to parse, or on which they should fail. To
see an example of this test file format, open %rules/abnf/abnf.test. The format
uses a lightweight markup model, which works well in this case, though we
considered a richer Red dialect of course.

Here are some basics:

- Empty lines and comments (with ";") are allowed between tests

- If line starts with "rule: " followed by a valid rule-name, that rule to test is set

- Single-line tests:

    a. If a line starts with whitespace it is interpreted as input to match the last set rule against.
    
    b. If a line starts with "-" or "not" followed by whitespace, what follows is interpreted as negative test case, i.e. the test succeeds if the rule fails on this input.
    
    c. Comments may be included at the end of line. They must start with " ; " (ws #";" ws), not just #";" (to avoid matching #";" if it appears in string).
    
- Multi-line tests

    a. Two forms: bracket form ("[" ... "]") and markdown form (between three backticks).
    
    b. Opening marks may be followed with "-" or "not" indicating negative test.
    
    c. Lines between marks are parsed verbatim, i.e. do not include extra space in line beginnings, or additional comments at the end of lines.
    
    d. If ending your input with a newline is required, add an empty line before the closing multline mark (bracket or backticks).

See Help in the app for more details.

# Other improvments

* Skip ".tmp", ".zip" and ".png" files when parsing directory

* Include selection in Find dialog and preselect

* Improve generation: add rules for "ahead" and "not"

* Apply metafile automatically if new file is saved with foreign grammar extension

See the changelog below for more.

## Conclusion

We hope you enjoy this new release, and please keep the feedback and feature requests coming. Join us at https://gitter.im/redlake-comm/DiaGrammar and let us know what you're doing with DiaGrammar.

Happy diagramming!

## DiaGrammar 1.2 Changelog

```
Changelog for 1.2

FEAT: Add json.org.style (Use for different json grammars)
FIX:  Correct opening of included files
FEAT: Add error message for opening nonexistent included file
FEAT: Improve .test file format
    1) Empty lines and comments (with ";") allowed between tests
    2) If line starts with "rule: " followed with rule-name new rule to test is set
    3) Single-line tests:
        a. If line starts with some whitespace (space(s) or tab(s)), what follows is interpreted as input to match rule against
        b. If line starts with "-" or "not" followed by some whitespace, what follows is interpreted as negative test case, i.e. line succeeds if rule fails on this input
        c. Comments may be included in the end of line, but they must start with " ; " (ws #";" ws), not just #";" (to avoid wrong match if #";" appears in string)
    4) Multi-line tests
        a. two forms: bracket form ("[" ... "]") and markdown form (between three backticks)
        b. if opening marks may be followed with "-" or "not" indicating negative test
        c. lines between marks are parsed verbatim, i.e. no extra space in line beginnings, nor additional comments in line ends are allowed
        d. if ending with newline is required, add empty line before ending mark
FIX:  Correct C1 chars rendering
FEAT: Close Help together with main window
FEAT: Always include selection in Find dialog and preselect
FEAT: Add %grammarkdown.rule
FEAT: Add EBNF rules
FEAT: Add BNF rules
FEAT: Set datatype! color lighter red 
FEAT: Add Bookmarks
FIX:  Skip ".tmp", ".zip" and ".png" files when parsing directory
FIX:  Improve "New File" and "~new.tmp" handling
FEAT: Add syntax error checking on grammars
FEAT: Add %semver.bnf
FEAT: Improve directory parsing for foreign grammars
FEAT: Change font-size with wheel
FEAT: Improve generation: add rules for "ahead" and "not"
FEAT: Disable missing-rules-checking for function-specs
FEAT: Enable file inculsion in metafiles
FEAT: Apply metafile automatically if new file is saved with foreign grammar extension
FIX:  Adjust spacing of text in diagrams for D2D
FEAT: Add %case.abnf, %abnf-case.test and %semver.abnf
FIX:  Improve %toml.rule
FEAT: Add %wikipedia.style (not in release download, will add to v1.2x)
DOC:  Add Testing and Bookmarks sections to Help
FEAT: Make Help scrollable (see Testing section)
DOC:  Change Help title
DOC:  Remove parens from around hotkeys in menus
FEAT: Sync bookmarks when changing files
    Also sync with `rules`, so that when `rules` is changed and the new rule is found in bookmarks, select this bookmark.
    Also sync bookmarks with text changing, so that if a rule that is in bookmarks is deleted from text, bookmarks is automatically adjusted.
    
```

