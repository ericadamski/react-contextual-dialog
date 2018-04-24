import React, { Fragment, Component } from "react";
import DialogContext from "react-contextual-dialog";
import Page from "./page";
import Dialog from "./dialog";
import Button from "./button";

const inner = (
  <Fragment>Hello, this is a simple dialog! Using React 16 Context</Fragment>
);

class App extends Component {
  openDialog() {
    this.dialog && this.dialog.open();
  }

  render() {
    return (
      <Page>
        <Button onClick={this.openDialog.bind(this)}>Open The Dialog</Button>
        <DialogContext.Dialog ref={n => (this.dialog = n)}>
          <Dialog title="Hello!" content={inner} />
        </DialogContext.Dialog>
      </Page>
    );
  }
}

export default App;
