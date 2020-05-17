export const ADD_TASK = 'ADD_TASK';
export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SET_TASKS = 'SET_TASKS';
export const IS_LOADING = 'IS_LOADING';
export const NAVIGATE_TO = 'NAVIGATE';

const initialState = {
  isLoading: false,
  tasks: []
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload]
      };

    case MARK_AS_COMPLETED:
      return {
        ...state,
        user: payload,
      };

    case DELETE_TASK:
      return {
        ...state,
        url: payload
      };

    case UPDATE_TASK:
      const tasks = state.tasks.map(stTask => stTask._id === payload._id ? payload : stTask);
      return {
        ...state,
        tasks: tasks,
      };

    case SET_TASKS:
      return {
        ...state,
        tasks: payload
      }

    case IS_LOADING: {
      return {
        ...state,
        loading: payload
      }
    }
    case NAVIGATE_TO: {
      return {
        ...state,
        url: payload
      }
    }
    default:
      return state;
  }
}