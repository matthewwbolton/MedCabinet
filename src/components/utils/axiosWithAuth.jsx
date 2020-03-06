import axios from 'axios';

export const REGISTER_URL = "https://build-week-04-med-cabinet.herokuapp.com/api/auth/register";
export const LOGIN_URL = "https://build-week-04-med-cabinet.herokuapp.com/api/auth/login";
const TEST_MODE = true


// Custom axios Post for Testing registering users
export const registerHandler = (payload) => {
  axios.post(`${REGISTER_URL}`, payload)
    .then(response => {
      if(TEST_MODE) {
        console.log(response)
      }
  })
    .catch(error => console.log('Post to server failed... ', error))
};

export const loginHandler = (payload) => {
  axios.post(`${LOGIN_URL}`, payload)
    .then(response => {
      if(TEST_MODE) {
        console.log(response)
      }
  })
    .catch(error => console.log('Post to server failed... ', error))
};

const axiosWithAuth = () => {
  return null;
};

export default axiosWithAuth;