import React, { Children, Component, cloneElement } from 'react';
import DialogManager from './dialog-manager';
import DialogContainer, { createDialog as cd } from './dialog-container';
import D from './dialog';

export const createDialog = cd;

export class Dialog extends Component {
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

  isOpen() {
    return DialogManager().get(this.uid).isOpen;
  }

  componentWillUnmount() {
    DialogManager().remove(this.uid);
  }

  render() {
    if (Children.count(this.props.children) < 1) return null;

    return (
      <D uid={this.uid}>
        {cloneElement(Children.toArray(this.props.children)[0], {
          ...this.props,
        })}
      </D>
    );
  }
}

export default {
  createDialog,
  DialogContainer,
  Dialog,
};
