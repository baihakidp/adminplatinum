const initialState = {
  message: false,
  allCar: false,
  smallCar: false,
  mediumCar: false,
  largecar: false,
  Mydelete: '',
};

export const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LISTCAR":
      return {
        ...initialState,
        message: action.payload,
      };
    case "ALLCAR":
      return {
        ...initialState,
        allCar: action.payload,
      };
    case "SMALLCAR":
      return {
        ...initialState,
        smallCar: action.payload,
      };
    case "MEDIUMCAR":
      return {
        ...initialState,
        mediumCar: action.payload,
      };
    case "LARGECAR":
      return {
        ...initialState,
        largeCar: action.payload,
      };

    case "Delete_Cars":
      return {
        ...initialState,
        Mydelete: action.payload,
      }
    default:
      return state;
  }
};
