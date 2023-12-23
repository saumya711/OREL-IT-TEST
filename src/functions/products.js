import axios from "axios";

export const getAllProducts = async (pageNumber, userToken) => {
    try {
      return await axios.get(`${process.env.REACT_APP_API}/recommend/items?page=${pageNumber}`, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
};
