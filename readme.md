# Fullstack Technologies website

This is the site source.

## Building the site

1. Install Node 8+ (I recommend using [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows/releases))
2. Install [Hugo](https://gohugo.io/getting-started/installing) - You can test that it's working by running `hugo` after the executable is available in your $PATH. If run from just any old directory, it should complain "unable to locate config file," which means it's working.
3. Install [Yarn](https://yarnpkg.com/en/) - TODO: $PATH issue!!
4. Clone this repository
5. Run `git submodule update --init --recursive` to initialize the theme submodule after cloning.
4. Go to the directory where you cloned this repo and run `yarn install` to install dependencies
5. Run `yarn start`
6. Visit http://localhost:1313

To build for production, run `yarn build`. The rendered site will be in the public/ dir.

See other scripts in package.json.

## Recommended dev environment

VS Code (this will use the workspace settings defined in .vscode/settings.json) with [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) extensions installed. Linting and formatting will automatically run with a git hook, but these give you faster feedback.

## Working with the theme git submodule

To pull in submodule changes:

```
$ git submodule update --remote --merge
$ git commit -a -m "submodule updated"
```

To push changes made in theme submodule (while within themes/featherweight directory):

```
$ git commit -a -m "updates"
$ git push origin HEAD:<branch-name-in-theme-repo>
```

## Useful things

[Embed Responsively](http://embedresponsively.com/) will give you YouTube/Vimeo embed codes that work responsively (see 1up-media.html template partial for example).

Photos are not automatically resized when added through Netlify CMS, so resize/crush them before uploading.

Getting familiar with [Go templates](https://golang.org/pkg/text/template/) is very handy for working with Hugo. Here's a [good tutorial](https://code.tutsplus.com/tutorials/text-generation-with-go-templates--cms-30441).

Pretty printing Hugo variables for debug: https://gist.github.com/kaushalmodi/afb6c3e5098eccc028bddc91cf1eb53a

Find the right syntax for your YAML multiline strings - https://yaml-multiline.info/
