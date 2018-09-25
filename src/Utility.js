import axios from 'axios';

class Utility {
  static get categories() {
    return axios.get('/api/v1/categories').then((response) => {
      const categories = response.data.data.categories;
      return categories;
    }).catch((error) => {
      console.log(error);
    });
  }

  static get countries() {
    return axios.get('/api/v1/countries').then((response) => {
      const countries = response.data.data.countries;
      countries.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name == b.name) return 0;
        if (a.name < b.name) return -1;
      });
      return countries;
    }).catch((error) => {
      console.log(error);
    });
  }
}


export default Utility;
