import axios from "axios";

const API_BASE_URL =
  "http://localhost:5000/your-firebase-project/us-central1/api";

export const fetchShoutOuts = async () => {
  return axios.get(`${API_BASE_URL}/shoutouts`);
};

export const postShoutOut = async (shoutOutData) => {
  return axios.post(`${API_BASE_URL}/shoutouts`, shoutOutData);
};

export const fetchShoutOutsForUser = async (name) => {
  return axios.get(`${API_BASE_URL}/shoutouts/user/${name}`);
};
