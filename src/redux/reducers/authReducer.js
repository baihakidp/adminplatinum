const initialState = {
  message: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...initialState,
        message: action.payload,
      };
    default:
      return state;
  }
};
