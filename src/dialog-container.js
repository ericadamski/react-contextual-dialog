import React, { Component } from 'react';

import DialogManager, { getActivity$ } from './dialog-manager';
import DialogContext from './dialog-context';
import isFunction from './utils/is-function';
import NOOP from './utils/noop';

const makeOpen = uid =>
  function open(cb) {
    (isFunction(cb) ? cb : NOOP)(DialogManager().update(uid, { isOpen: true }));
  };

const makeClose = uid =>
  function open(cb) {
    (isFunction(cb) ? cb : NOOP)(
      DialogManager().update(uid, { isOpen: false })
    );
  };

export function createDialog(open = false) {
  const { uid } = DialogManager().add({ isOpen: open });
  DialogManager().update(uid, {
    open: makeOpen(uid),
    close: makeClose(uid),
  });

  return uid;
}

export default class DialogContainer extends Component {
  state = DialogManager().getState();

  componentWillMount() {
    this.activity = getActivity$().subscribe(action =>
      this.setState(DialogManager().getState())
    );
  }

  componentWillUnmount() {
    this.activity && this.activity.unsubscribe();
    DialogManager().removeAll();
  }

  render() {
    return (
      <DialogContext.Provider value={this.state}>
        {this.props.children}
      </DialogContext.Provider>
    );
  }
}
