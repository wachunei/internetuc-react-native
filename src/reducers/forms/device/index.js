const initialState = {
  name: '',
  mac: '',
  type: 'new',
};

export default function device(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
