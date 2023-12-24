import axios from "axios";

export const getProfile = async (userToken) => {
    try {
      return await axios.get(`https://api.escuelajs.co/api/v1/auth/profile`, {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  };