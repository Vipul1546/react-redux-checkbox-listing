import * as actions from "./actionType";

export const elementChecked = (id) => ({
  type: actions.ELEMENT_CHECKED,
  payload: {
    id,
  },
});
