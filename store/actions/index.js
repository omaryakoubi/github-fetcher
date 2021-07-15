import axios from "axios";
import { GET_USER } from "./types";

export const getUser = async (payload) => {
  try {
    const user = await axios.get(`https://api.github.com/users/${payload}`);
    return {
      type: GET_USER,
      payload: { status: user.status, data: user.data },
    };
  } catch (error) {
    console.log(error);
    return { type: GET_USER, error };
  }
};
