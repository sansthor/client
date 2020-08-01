import { GET_USER_LOGIN, REGISTER_USER } from "../actions";

const initialState = {
  user: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case GET_USER_LOGIN:
      return { ...state, user: actions.payload };
    case REGISTER_USER:
      return { ...state, user: actions.payload };
    default:
      return state;
  }
};
