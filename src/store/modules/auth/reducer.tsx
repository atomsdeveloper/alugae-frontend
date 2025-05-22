import axios from "../../../services/axios";
import * as types from "../types";

const initialState = {
  isLoggedIn: false,
  token: "",
  user: {},
  isLoading: false,
};

interface AuthAction {
  type: string;
  payload?: {
    token?: string;
    user?: {
      id?: number | string;
      name?: string;
      email?: string;
    };
    name?: string;
    email?: string;
  };
}

export default function authReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    // AUTH
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
        token: action.payload?.token,
        user: {
          id: action.payload?.user?.id,
          name: action.payload?.user?.name,
          email: action.payload?.user?.email,
        },
      };

    case types.LOGIN_FAILURE:
      delete axios.defaults.headers.Authorization;
      return {
        ...initialState,
      };

    // REGISTER
    case types.REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.REGISTER_UPDATE_SUCCESS:
      console.log("REDUCER -> Register Success", action.payload);
      return {
        ...state,
        user: {
          ...state.user,
          name: action.payload?.name,
          email: action.payload?.email,
        },
        isLoading: false,
      };

    case types.REGISTER_CREATED_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          isLoading: false,
        },
      };

    case types.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}
