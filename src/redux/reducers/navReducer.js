const initialState = {
  current: "dashboard",
};

export const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAVIGATE":
      return {
        ...initialState,
        current: action.payload,
      };
    default:
      return state;
  }
};
