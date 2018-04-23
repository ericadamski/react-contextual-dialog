import { TYPES } from '../dialog-actions';
import DialogManager, { getActivity$ } from '../dialog-manager';

import NOOP from '../utils/noop';

describe('DialogManger', () => {
  it('should be a function with arity 0', () => {
    expect(DialogManager).toBeInstanceOf(Function);
    expect(DialogManager).toHaveLength(0);
  });

  it('should return the entire state', () => {
    expect(DialogManager().getState()).toBeInstanceOf(Object);
  });

  it('should return delete the entire state', () => {
    DialogManager().add({});
    expect(Object.keys(DialogManager().getState())).toHaveLength(1);
    DialogManager().removeAll();
    expect(Object.keys(DialogManager().getState())).toHaveLength(0);
  });

  it('should return a class with functions [.add, .remove, .update, .get]', () => {
    const m = DialogManager();

    // .add
    expect(m.add).toBeInstanceOf(Function);
    expect(m.add).toHaveLength(1);

    // .remove
    expect(m.remove).toBeInstanceOf(Function);
    expect(m.remove).toHaveLength(1);

    // .get
    expect(m.get).toBeInstanceOf(Function);
    expect(m.get).toHaveLength(1);

    // .update
    expect(m.update).toBeInstanceOf(Function);
    expect(m.update).toHaveLength(2);
  });

  describe('.add', () => {
    it('should add a new object to the set of dialogs', () => {
      const m = DialogManager();

      const fns = {
        open: NOOP,
        close: NOOP,
        isOpen: false,
      };

      const emit = new Promise(resolve => getActivity$().subscribe(resolve));

      const result = m.add(fns);

      expect(typeof result.uid).toBe('string');
      expect(Object.keys(result)).toEqual(['uid', 'open', 'close', 'isOpen']);

      return emit.then(action => {
        expect(action.type).toBe(TYPES.NEW_DIALOG);
        expect(action.value).toEqual(result);
      });
    });
  });

  describe('.get', () => {
    it('should get a dialog from the set of dialogs', () => {
      const m = DialogManager();

      const props = {
        open: NOOP,
        close: NOOP,
        isOpen: false,
      };

      const result = m.add(props);

      expect(m.get(result.uid)).toEqual(result);
    });
  });

  describe('.remove', () => {
    it('should remove a dialog from the set of dialogs', () => {
      const m = DialogManager();

      const props = {
        open: NOOP,
        close: NOOP,
        isOpen: false,
      };

      const result = m.add(props);

      const emit = new Promise(resolve => getActivity$().subscribe(resolve));

      m.remove(result.uid);

      expect(m.get(result.uid)).not.toBeDefined();

      return emit.then(action => {
        expect(action.type).toBe(TYPES.REMOVE_DIALOG);
        expect(action.uid).toBe(result.uid);
      });
    });
  });

  describe('.update', () => {
    it('should update a dialog in the set of dialogs', () => {
      const m = DialogManager();

      const props = {
        open: NOOP,
        close: NOOP,
        isOpen: false,
      };

      const result = m.add(props);

      const emit = new Promise(resolve => getActivity$().subscribe(resolve));

      const updated = m.update(result.uid, { isOpen: true });

      expect(updated.uid).toBe(result.uid);

      return emit.then(action => {
        expect(action.type).toBe(TYPES.UPDATE_DIALOG);
        expect(action.value).toBe(updated);
      });
    });
  });
});
