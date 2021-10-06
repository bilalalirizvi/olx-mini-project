const initialState = {};
const currentUserData = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_USER_DATA": {
      return { ...state, currData: action.data };
    }
    default: {
      return state;
    }
  }
};

export default currentUserData;
