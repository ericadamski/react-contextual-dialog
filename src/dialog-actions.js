export const TYPES = {
  NEW_DIALOG: 'NEW_DIALOG',
  UPDATE_DIALOG: 'UPDATE_DIALOG',
  REMOVE_DIALOG: 'REMOVE_DIALOG',
};

export default {
  new(value) {
    return {
      type: TYPES.NEW_DIALOG,
      value,
    };
  },
  update(value) {
    return {
      type: TYPES.UPDATE_DIALOG,
      value,
    };
  },
  remove(uid) {
    return {
      type: TYPES.REMOVE_DIALOG,
      uid,
    };
  },
};
