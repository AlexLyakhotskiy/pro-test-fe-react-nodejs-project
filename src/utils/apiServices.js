import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/';

export const apiToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function apiRegisterUser(userData) {
  try {
    const { data } = await axios.post('/auth/signUp', userData);
    apiToken.set(data.token);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function apiLoginUser(userData) {
  try {
    const { data } = await axios.post('/auth/signIn', userData);
    apiToken.set(data.token);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function apiLogoutUser() {
  try {
    await axios.post('/auth/logout');
    apiToken.unset();
    return;
  } catch (error) {
    throw new Error(error);
  }
}
