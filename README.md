# react-kbi-si-en-html

Kolloqe Input Component with code-switching support between Sinhala and English that can be attached via a `<script>` tag

## Releasing

- When the version is bumped, first do the versioning in the package.json
- run `npm run build` to build the latest build
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
