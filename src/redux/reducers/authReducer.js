const initialState = {
  message: false,
  filter: "",
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...initialState,
        message: action.payload,
      }; 

    case "Filter_Search":
       return {
         ...initialState,
         filter: action.payload,
       }
    default:
      return state;
  }
};
