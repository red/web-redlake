---
title: 'DiaGrammar 1.2.2'
date: 2021-04-13T12:00:00.000Z
author: DiaGrammar Team
hero_type: image
hero_src: >-
  https://images.pexels.com/photos/993019/pexels-photo-993019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940
category: news
tags:
  - DiaGrammar
---

More improvements and a few fixes.

If you bought 1.0, this upgrade is free for you. Download it
[here](https://www.redlake-tech.com/releases/DiaGrammar_v1.2.2.zip).

This is a small release, most importantly for a fix to transparency
with the new D2D back end on some systems, and bookmark window
positioning. We did include a couple small features, rather than
holding them back until 1.3 (which has a big new feature planned).

Another change is related to rule files. After some feedback from
users, we decided to default the Live Parsing option to off. It's 
an advanced feature and we wanted to show it off, but it can also
be a source of confusion for some grammars we ship as standard.
We hope this will ease the learning curve a bit.

## Conclusion

We hope you enjoy this release, and please keep the feedback and
feature requests coming. Join us at https://gitter.im/redlake-comm/DiaGrammar
and let us know what you're doing with DiaGrammar.

Happy diagramming!

## DiaGrammar 1.2.2 Changelog

```
Changelog for 1.2.2

FEAT: Enabled marking of missing rules when refreshing (i.e. F5)

FEAT: Enabled top rule selecting in Preferences (hotkey Ctrl+T).

FIX: Style bug due to reorganization of draw-block handling to enable
     instant redrawing of minimap (experimental) but style handling
     was not synced with this change. 

FIX: Transparency issue related to new D2D back end.

FIX: Exporting unsaved grammar now defaults to %new.png.

FEAT: Live Parsing is now off for all rules by default.

FIX: Bookmark window placement.

   
```

