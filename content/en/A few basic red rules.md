## A few basic red rules

Welcome to this series blog posts marked #tutorial

Let's first look at word, because they are often what you use to refer to or assign values to. A word in rebol can be any character, and when it's a definition, foloowed by a colon.

```
a: 0
__a_: 0
__: 0

You can think of these words as variables, but they are much more, there value is dynamically computed. We'll get back to that later.

`red` has a lot of datatypes, for example `email!`

```\
a: make email! john.doe@redrules.org     or
b: >> make tag! <A>

You can also make objects, in a prototype manner (like Javascript):

c: make object! [ dog: "barf"]
d: make c [ cat: "cute"]
```
if you woukd use the handy `probe` function, that prints a value and then **returns the **value** so your program flow isn't interrupted:
```
probe d
>> probe d
make object! [
    dog: "barf"
    cat: "cute"
]
```

As you can see, d took c, cloned it, and the added `cat`.

That's it for now folks. Keep reading, because next coming up:
arithmetic and blocks!
