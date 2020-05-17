export const SET_USER_SESSION = `SET_USER_SESSION`;
export const CLEAR_USER_SESSION = `CLEAR_USER_SESSION`;
export const LOGIN_FAIL = `LOGIN_FAIL`;
export const CLEAR_ERROR = `CLEAR_ERROR`;
export const IS_LOGIN_INPROGRESS = `IS_LOGIN_INPROGRESS`;
export const NAVIGATE_TO = `NAVIGATE`;

const initialState = {
  loading: false,
  hasError: false,
  errorMessage: '',
  url: '/',
  user: {
    token: {
      name: '',
      token: '',
    },
    image: ''
  }
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case CLEAR_USER_SESSION:
      return {
        ...state,
        user: initialState.user
      };

    case SET_USER_SESSION:
      return {
        ...state,
        user: payload,
      };

    case NAVIGATE_TO:
      return {
        ...state,
        url: payload
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage: payload,
      };
    case IS_LOGIN_INPROGRESS:
      return {
        ...state,
        loading: payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        loading: false,
        hasError: false,
        errorMessage: '',
      };

    default:
      return state;
  }
}