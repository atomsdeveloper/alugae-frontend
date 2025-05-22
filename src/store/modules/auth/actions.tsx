// Types
import * as types from "../types";

// AUTH
export function ButtonLoginClickRequest(payload: unknown) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}
export function ButtonLoginClickSuccess(payload: unknown) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}
export function ButtonLoginClickFailure() {
  return {
    type: types.LOGIN_FAILURE,
  };
}
// REGISTER
export function ButtonRegisterClickRequest(payload: unknown) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}
export function ButtonRegisterUpdateClickSuccess(payload: unknown) {
  return {
    type: types.REGISTER_UPDATE_SUCCESS,
    payload,
  };
}
export function ButtonRegisterCreatedClickSuccess(payload: unknown) {
  return {
    type: types.REGISTER_CREATED_SUCCESS,
    payload,
  };
}
export function ButtonRegisterClickFailure(payload: unknown) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}
