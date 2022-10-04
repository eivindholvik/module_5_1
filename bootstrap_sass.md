# How to set up Bootstrap with SASS

## NPM

Ensure that you have npm installed.

**_teminal_**

```
npm -v
```

**_expect to get a version number_**

## Initializing package.json

**_teminal_**

```
npm init -y
```

You should now have a package.json file

## Installing Bootstrap

We can now install Bootstrap as a development dependency, because we will not use bootstraps css directly

**_teminal_**

```
npm install -D bootstrap@5.2.0
```

**_expect to get a version number_**

## SASS

Install SASS as a developent dependency

**_teminal_**

```
npm install -D sass
```

In package.json add the following script:

```json
"watch": "sass --watch src/scss:dist/css"
```

**_remember to put a comma if more scripts are present_**

You may change "src/scss:dist/css" to ex "scss:css".

**_teminal_**

```
mkdir src dist src/scss dist/css
touch src/scss/stylesheet.scss
```

In index.html link to stylesheet.css:

```html
<link rel="stylesheet" href="dist/css/stylesheet.css" />
```

Add variables and link to bootstrap in stylesheet.scss:

```scss
@import "variables"; /* /src/scss/_variables.scss */
@import "../../node_modules/bootstrap/scss/bootstrap";

.btn-custom {
  @extend .btn-warning;

  &:hover {
    @extend .btn-danger;
  }
}
```

**_terminal_**

```
touch src/scss/_variables.scss
```

## Generating stylesheet

**_terminal_**

```
npm run watch
```

**_CTRL+C to exit watch_**
