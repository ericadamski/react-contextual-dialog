import { Subject } from 'rxjs/Subject';
import ObjectID from 'bson-objectid';

import Action from './dialog-actions';

let _manager;
const dialogs = {};
const change$ = new Subject();

export function getActivity$() {
  return change$;
}

class DialogManager {
  getState() {
    return dialogs;
  }

  removeAll() {
    Object.keys(dialogs).forEach(key => delete dialogs[key]);
  }

  get(uid) {
    return dialogs[uid];
  }

  add({ open, close, isOpen }) {
    const uid = ObjectID().str;
    const dialog = {
      uid,
      open,
      close,
      isOpen,
    };

    dialogs[uid] = dialog;

    change$.next(Action.new(dialog));

    return dialog;
  }

  remove(uid) {
    delete dialogs[uid];

    change$.next(Action.remove(uid));
  }

  update(uid, value) {
    dialogs[uid] = Object.assign(dialogs[uid], value);

    change$.next(Action.update(dialogs[uid]));

    return dialogs[uid];
  }
}

export default function() {
  if (!_manager) _manager = new DialogManager();

  return _manager;
}
