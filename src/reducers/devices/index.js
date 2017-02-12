import actions from '../../actions/constants';

const initialState = [];

export default function devices(state = initialState, action) {
  switch (action.type) {
    case actions.user.logOut: {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
}
