import Api from '../src/utils/Api';
import {
  getLocalUser,
  getJWT
} from "@/utils/UserAuth";


var objCodec = require('object-encode');
var SimpleCrypto = require("simple-crypto-js").default;

var _secretKey = "some-unique-key";
var simpleCrypto = new SimpleCrypto(_secretKey);
var bloverseOps = ')*myNewAWESOME-mmbloverseOps254@%^&%';

let user = null;
let localJWT = null;
if (getLocalUser() == null) {
  user = null;
} else {
  user = objCodec.decode_object(getLocalUser(), 'base64', bloverseOps);
}

if (getJWT() == null) {
  localJWT = null;
} else {
  localJWT = simpleCrypto.decrypt(getJWT());

}


export default {
  state: {
    jwt: localJWT,
    newUser: {
      imageUrl: 'https://res.cloudinary.com/naera/image/upload/v1512417704/u7aoterwekcq0thkng3j.png'
    },
    applicant: {
      articleURLs: ['']
    },
    loggedInUser: user,
    shouldRegister: false,
  },
  actions: {
    async login({
      commit,
      state
    }, params) {
      let response = await Api.post('authentication/', params)
      switch (response.statusCode) {
      case 201:
        commit('setJwt', response.data.token);
        commit('setLoggedInUser', response.data.user)
        return true;
      default:
        return {
          errors: response.data
        };
      }
    },

    async apply({ state, commit }) {
      const applicant = {}
      applicant.categoryId = state.applicant.category.id;
      applicant.countryId = state.applicant.country.id;
      applicant.phone = state.applicant.phoneCode + state.applicant.phoneNumber;

      if (!state.applicant.linkedInUsername) {
        applicant.linkedInUrl = "";
      }else {
        applicant.linkedInUrl = `https://www.linkedin.com/in/${state.applicant.linkedInUsername}`;
      }

      if (!state.applicant.twitterUsername) {
        applicant.twitterUrl = ""
      }else {
        applicant.twitterUrl = `https://www.twitter.com/${state.applicant.twitterUsername}`;
      }

      if (state.applicant.articleURLs.length > 0) {
        applicant.articles = state.applicant.articleURLs.map((article, index) => {
          if(article) {
            return `${state.applicant.articleProtocols[index]}${article}`;
          }
        });
      }

      if (!applicant.articles || applicant.articles[0] == undefined) {
        applicant.articles = undefined
      }

      commit('setApplicant', applicant);
      let response = await Api.post('applicants/', {
        ...state.applicant,
        countryId: state.applicant.countryId,
        categoryId: state.applicant.categoryId
      })
      switch (response.statusCode) {
      case 201:
        return true;
      default:
        return {
          errors: response.data
        };
      }
    },
    async getApplicantById({
      commit
    }, id) {
      let response = await Api.get('applicants/' + id + '/')
      switch (response.statusCode) {
      case 200:
        commit('setApplicant', response.data.applicant);
        break;
      case 404:
        commit('clearApplicant');
        break;
      default:
        return {
          errors: response.data
        };
      }
    },
    async applicantHasRegistered({
      state
    }) {
      //Checks if an applicant had previously setup account as user
      let response = await Api.get('journalists?applicant=' + state.applicant.id)
      return response.data.journalists.length > 0;
    },
    async registerJournalist({state, dispatch, commit}) {
      let newUrl = await dispatch('doUpload', state.newUser.imageUrl, {root: true})
      commit('setNewUser', { imageUrl: newUrl })
      let response = await Api.post('journalists/', state.newUser);
      switch (response.statusCode) {
      case 201:
        return true;
      default:
        return {
          errors: response.data
        };
      }
    },
    async generateUsername({
      state,
      commit,
      dispatch
    }) {
      let username = `${state.newUser.firstName}.${state.newUser.lastName}`.toLowerCase();
      username = await dispatch('validateUsername', {
        username,
        count: 1
      })
      commit('setUsername', username);
    },
    async validateUsername({
      dispatch
    }, {
      username,
      count
    }) {
      let response = await Api.get('journalists?username=' + username)
      if (response.data.journalists.length > 0) {
        username += count;
        count++;
        dispatch('validateUsername', {
          username,
          count
        });
      }
      return username;
    },
    clearSession({
      commit,
      state
    }) {
      localStorage.removeItem("jwt");
      localStorage.removeItem("loggedInUser");
      state.jwt = null;
      state.loggedInUser = null;
      return true;
    }
  },
  mutations: {
    setApplicant(state, props) {
      state.applicant = {
        ...state.applicant,
        ...props
      };
    },
    clearApplicant(state) {
      state.applicant = {
        articleURLs: [],
        phoneNumber: '',
        linkedInUsername: '',
        twitterUsername: ''
      };
    },
    setNewUser(state, props) {
      state.newUser = {
        ...state.newUser,
        ...props
      };
    },
    setJwt(state, jwt) {
      state.jwt = jwt
      localStorage.setItem("jwt", JSON.stringify(simpleCrypto.encrypt(state.jwt)));
    },
    setLoggedInUser(state, user) {
      state.loggedInUser = user;
      localStorage.setItem("loggedInUser", JSON.stringify(objCodec.encode_object(state.loggedInUser, 'base64', bloverseOps)));
    },
    setUsername(state, username) {
      state.newUser.username = username;

    },
    setShouldRegister(state, value) {
      state.shouldRegister = value;
      state.newUser.firstName = state.applicant.first_name;
      state.newUser.lastName = state.applicant.last_name;
      state.newUser.applicant = state.applicant.id;
      state.newUser.email = state.applicant.email;
      state.newUser.phone = state.applicant.phone_number.substring(4);
      state.newUser.category = state.applicant.category;
      state.newUser.country = state.applicant.country;
      state.newUser.gender = '';
      state.newUser.about = '';
      state.newUser.code = state.applicant.phone_number.substring(0,4);
    },

    setApplicantIds(state, {
      name,
      value
    }) {
      state.applicant[name] = value;
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.loggedInUser !== null;
    },
    isAnAdmin(state) {
      if (state.loggedInUser) {
        return state.loggedInUser.type === 'Admin';
      }
      return false;
    },
    isAJournalist(state) {
      if (state.loggedInUser) {
        return state.loggedInUser.type === 'journalist';
      }
      return false;
    },
    isAllowedToRegister(state) {
      return state.shouldRegister;
    }
  }
}
