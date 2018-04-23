import React, { Component, Children, cloneElement } from 'react';
import DialogContext from './dialog-context';

export default class Dialog extends Component {
  render() {
    const { children, uid } = this.props;

    if (!uid)
      throw new Error(
        'react-contextual-dialog: You must pass the ID from `createDialog` to the dialog component.'
      );

    return (
      <DialogContext.Consumer>
        {state =>
          Children.map(Children.only(children), child =>
            cloneElement(child, state[uid])
          )
        }
      </DialogContext.Consumer>
    );
  }
}
