# Redlake Technologies website

This is the site source.

## Building the site

### Development

1. Install [Docker](https://www.docker.com/products/docker-desktop)
2. Clone this repository
    * If you are using HTTPS (not SSH), you'll need to update the submodule reference in your clone to the theme directory to HTTPS as well. See [this answer](https://stackoverflow.com/a/30885128/2486583).
3. Run `git submodule update --init --recursive` to initialize the theme submodule after cloning.
4. Run `docker-compose up -d`.
5. Run `docker-compose exec web bash`.
6. In the bash prompt that appears, run `yarn install`. This only needs to be run when installing new packages.
7. Run `yarn start`.
8. Visit http://localhost:5000

### Production

1. Run `docker build . -t prod-image`.
2. Run `docker run -dit -p 80:80 -p 443:443 --name prod prod-image`.
3. Run `docker exec -it prod nginx`.

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
