import axios from "axios";
import { GET_USER } from "./types";

export const getUser = (payload) => async (dispatch) => {
  try {
    const user = await axios.get(`https://api.github.com/users/${payload}`);
    dispatch({
      type: GET_USER,
      payload: { status: user.status, data: user.data },
    });
  } catch (error) {
    dispatch({ type: GET_USER, payload: error });
    console.log(error);
  }
};
