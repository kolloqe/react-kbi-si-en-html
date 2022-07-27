import React from 'react';
import ReactDOM from 'react-dom/client';
import KeyboardInput from './KeyboardInterface';

let element_id = undefined;
let root = undefined;
let props = {};

try {
  element_id = window?.input_id;
  props = window?.kolloqeProps[element_id];
  root = ReactDOM.createRoot(document.getElementById(String(element_id)));
} catch (err) {
  console.error("failed to retrieve the props");
}

root.render(
  <React.StrictMode>
    <div id="kolloqe-input-main">
      <KeyboardInput
        id={props?.id}
        name={props?.name}
        type={props?.type}
        variant={props?.variant}
        inputProps={props?.inputProps}
        required={props?.required}
        margin={props?.margin}
        interface={props?.interface}
        value={props?.value}
        defaultValue={props?.defaultValue}
        placeholder={props?.placeholder}
        className={props?.className}
        autoFocus={props?.autoFocus}
        size={props?.size}
        color={props?.color}
        label={props?.label}
        hiddenLabel={props?.hiddenLabel}
        disableUnderline={props?.disableUnderline}
        defaultLanguage={props?.defaultLanguage}
        handleChange={props?.handleChange}
        handleTextChange={props?.handleTextChange}
        handleShortcut={props?.handleShortcut}
        handleEnter={props?.handleEnter}
        enableShortcuts={props?.enableShortcuts}
        shortcutKey={props?.shortcutKey}
        error={props?.error}
        helperText={props?.helperText}
        disabled={props?.disabled}
        fullWidth={props?.fullWidth} />
    </div>
  </React.StrictMode>
);
