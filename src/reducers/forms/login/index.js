import actions from '../../../actions/constants';

const initialState = {
  username: '',
  password: '',
  error: '',
  isLoading: false,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case actions.forms.login.updateUsername: {
      return {
        ...state,
        username: action.username,
      };
    }
    case actions.forms.login.updatePassword: {
      return {
        ...state,
        password: action.password,
      };
    }
    case actions.forms.login.displayGenericError: {
      return {
        ...state,
        error: action.error,
      };
    }
    case actions.forms.login.displayError: {
      return {
        ...state,
        error: action.error,
      };
    }
    case actions.forms.login.clear: {
      return {
        ...initialState,
      };
    }
    case actions.forms.login.clearUsername: {
      return {
        ...state,
        username: initialState.username,
      };
    }
    case actions.forms.login.clearPassword: {
      return {
        ...state,
        password: initialState.password,
      };
    }
    default: {
      return state;
    }
  }
}
