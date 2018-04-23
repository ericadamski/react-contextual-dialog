import React, { Component } from 'react';
import DialogManager from './dialog-manager';
import { createDialog as cd } from './dialog-container';
import DialogContainer from './dialog-container';
import D from './dialog';

export const createDialog = cd;

class Dialog extends Component {
  uid = cd();

  open() {
    DialogManager()
      .get(this.uid)
      .open();
  }

  close() {
    DialogManager()
      .get(this.uid)
      .open();
  }

  componentWillUnmount() {
    DialogManager().remove(this.uid);
  }

  render() {
    return <D uid={this.uid}>{this.props.children}</D>;
  }
}

export default { Dialog, DialogContainer };
