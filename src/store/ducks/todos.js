/**
 * Types
 */
export const Types = {
  ADD: "todos/ADD"
};

const DEFAULT_STATE = {
  data: []
};

/**
 * Reducers
 */
export default function todos(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return { data: [...state.data, action.payload.todo] };
    default:
      return state;
  }
}

/**
 * Actins
 */

export const Creators = {
  addTodo: todo => ({ type: Types.ADD, payload: { todo } })
};
