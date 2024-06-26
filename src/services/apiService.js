// src/services/apiService.js
import axiosInstance from "./axiosInstance";

export const fetchData = async () => {
  try {
    const response = await axiosInstance.get(
      "https://api.coinlore.net/api/tickers/"
    );
    return response.data;
  } catch (error) {
    // Handle error appropriately
    console.error("Error fetching data:", error);
    throw error;
  }
};
