import axios from "axios";
import { GET_USER } from "../types";

export const getUser = (payload) => async (dispatch) => {
  try {
    const user = await axios.get(`https://api.github.com/users/${payload}`);
    dispatch({ type: GET_USER, payload: user.data });
  } catch (error) {
    console.log(error);
  }
};