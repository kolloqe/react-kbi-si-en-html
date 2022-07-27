# react-kbi-si-en-html

Kolloqe Input Component with code-switching support between Sinhala and English that can be attached via a `<script>` tag

## Setting up Dev Environmet

The original package was created using `npx create-react-app`. So, to set up a dev environment, the `node_modules` dir initialized using `npx create-react-app` is required to begin with. 

- Clone this repo
- Simply run `npm run init` to initialize required node_modeules
- Run `npm i` to install additional packages
- Run `npm start` to run the dev server
- This project adhears to all the commands executable inside a `npx create-react-app` project
- Additionally, this project supports the following npm commands
    1. `npm run init` - initializes required node_modules (takes care of cleanup internally)
    2. `npm run cleanup` - cleans up cached project files
    3. `npm run release` - creates a release that is ready to be attached via a script tag and places it under the `release` dir under the specific version. (takes care of `npm run build` internally)

## Releasing

- When the version is bumped, first do the versioning in the package.json
- run `npm run build` to build the latest build. (This is optional. `npm run release` can take care of this internally)
- run `npm run release` to get the transpiled js module to `release` dir under the proper package version.

## Attaching via a `<script>` tag

The component is attachable to any html via a `<script>` tag as follows

```html
<noscript>You need to enable JavaScript to run this app.</noscript>
<script>
  window.input_id = "testid";
  window.kolloqeProps = {
    testid: {
      interface: "textfield",
      id: undefined,
      name: undefined,
      type: undefined,
      variant: "filled",
      inputProps: {},
      margin: "none",
      required: false,
      value: "",
      defaultValue: undefined,
      placeholder: "Type something...",
      className: "w-100",
      autoFocus: true,
      size: "small",
      color: "primary",
      label: undefined,
      hiddenLabel: true,
      disableUnderline: true,
      defaultLanguage: "en",
      enableShortcuts: true,
      shortcutKey: 81,
      error: false,
      helperText: "",
      disabled: false,
      fullWidth: false
    }
  };

  !(function () {
    let e = document.createElement("script"),
      t = document.head || document.getElementsByTagName("head")[0];
    (e.src = "kolloqe-input-umd-v1.0.0.js"),
      (e.async = !0),
      (e.onload = () => {}),
      t.insertBefore(e, t.firstChild);
  })();
</script>
```

## Passing Props

{To be updated}
Refer the [Official Docs](https://kolloqe.github.io) for more details on passing props to kolloqe input component.

## Known Issues

- Only one input filed can be attached within a given html page. [react-kbi-si-en](https://www.npmjs.com/package/react-kbi-si-en) can be utilized within React apps to address the issue.
