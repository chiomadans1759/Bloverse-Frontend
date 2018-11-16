import axios from 'axios';
import store from '../../stores';

let BASE_URL = process.env.VUE_APP_API
class Api {
  static async get(url, requireAuth=false) {
    let response, statusCode, statusText, data, message, config;
    try {
      config = { headers: {'Authorization': `Token ${store.state.auth.jwt}`}};
      response = requireAuth ? await axios.get(BASE_URL + url, config) : await axios.get(BASE_URL + url)
      statusCode = response.status;
      data = response.data.data;
      statusText = response.data.status;
    }catch(error){
      if(error.response){
        statusCode = error.response.status;

        statusText = error.response.data.status;
        data = error.response.data.data;
        message = error.response.data.message;
      }else{
        return error;
      }
      
    }

    return { statusCode, statusText, data, message }
    
  }


  static async post(url, payload, requireAuth=false) {
    let response, statusCode, statusText, data, message;
    try {
      let config = { headers: {'Authorization': `Token ${store.state.auth.jwt}`}};
      response = requireAuth ? await axios.post(BASE_URL + url, payload, config) : await axios.post(BASE_URL + url, payload)
      statusCode = response.status;
      data = response.data.data;
      statusText = response.data.status;
    }catch(error){
      if(error.response){
        statusCode = error.response.status;
        statusText = error.response.data.status;
        data = error.response.data.data;
        message = error.response.data.message;
      }else{
        return error;
      }
      
    }

    return { statusCode, statusText, data, message }
    
  }

  static async put(url, payload={}, requireAuth=false){
    let response, statusCode, statusText, data, message;
    try {
      let config = { headers: {'Authorization': `Token ${store.state.auth.jwt}`}};
      response = requireAuth ? await axios.put(BASE_URL + url, payload, config) : await axios.put(BASE_URL + url, payload)
      statusCode = response.status;
      data = response.data.data;
      statusText = response.data.status;
    }catch(error){
      if(error.response){
        statusCode = error.response.status;
        statusText = error.response.data.status;
        data = error.response.data.data;
        message = error.response.data.message;
      }else{
        return error;
      }
      
    }

    return { statusCode, statusText, data, message }
  }

}




export default Api;
