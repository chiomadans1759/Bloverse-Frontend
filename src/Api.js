import axios from 'axios';

let BASE_URL = 'https://bloverse-api.herokuapp.com/api/v1/'
class Api {
  static async get(url, requireAuth=false) {
    let response, statusCode, statusText, data, message;
    try {
      response = await axios.get(BASE_URL + url +'/')
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
        console.log(error);
      }
      
    }

    return { statusCode, statusText, data }
    
  }


  static async post(url, payload, requireAuth=false) {
    let response, statusCode, statusText, data, message;
    try {
      response = await axios.post(BASE_URL + url +'/', payload)
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
        console.log(error);
      }
      
    }

    return { statusCode, statusText, data }
    
  }

}




export default Api;
