import actions from '../../actions/constants';

const initialState = 'devices';

export default function scenes(state = initialState, action) {
  switch (action.type) {
    case actions.scenes.setScene: {
      return action.scene;
    }
    case actions.user.logOut: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
