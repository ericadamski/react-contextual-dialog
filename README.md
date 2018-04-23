# React Contextual Dialog

A simple set of dialog components that utilize React 16 context API

## Installation

`yarn add react-contextual-dialog` or `npm i react-contextual-dialog`

## Usage

Render a single `DialogContainer` heigher than you want to render the dialogs.

```javascript
import React from 'react';
import { render } from 'react-dom';
import ContextualDialog from 'react-contextual-dialog;

const Main = ({ children }) => (
  <ContextualDialog.DialogContainer>
    {children}
  </ContextualDialog.DialogContainer>
);

render(<Main />, document.getElementById('app'));
```

You can now render a dialog anywhere in the `children` passed to `<Main />`

```javascript
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import ContextualDialog from 'react-contextual-dialog;

const Dialog = ({ open, close, isOpen }) => (
  <Fragment>
  {!isOpen && <button onClick={open}>Open the dialog</button>}
  {
    isOpen && (
      <div>
        I am a dialog
        <button onClick={close}>Close Me</button>
      </div>
    )
  }
  </Fragment>
)

const Popup = () => (
  <ContextualDialog.Dialog>
    <Dialog />
  </ContextualDialog.Dialog>
)

const Main = ({ children }) => (
  <ContextualDialog.DialogContainer>
    {children}
  </ContextualDialog.DialogContainer>
);

render(
  (
    <Main>
      <Popup />
    </Main>
  ),
  document.getElementById('app')
);
```
