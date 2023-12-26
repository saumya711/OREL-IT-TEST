const initialState = {
    name: null,
    email: null
  };
  
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER_INFO":
            return action.payload;
        default:
            return state;
    }
}