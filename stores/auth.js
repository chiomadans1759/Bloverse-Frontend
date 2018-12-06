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
      imageUrl: 'http://res.cloudinary.com/naera/image/upload/v1532107032/bloverse/hndx2wy0k2y2nykqcixu.jpg'
    },
    applicant: {
      articleURLs: []
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

    async apply({
      state,
      commit
    }) {
      let categoryId = state.applicant.category.id;
      let countryId = state.applicant.country.id;

      const applicant = {
        phone: state.applicant.phoneCode + state.applicant.phoneNumber,
      }

      if (state.applicant.linkedInUsername) {
        applicant.linkedIn = `https://www.linkedin.com/in/${state.applicant.linkedInUsername}`
      }

      if (state.applicant.twitterUsername) {
        applicant.twitter = `https://www.twitter.com/${state.applicant.twitterUsername}`;
      }

      if (state.applicant.articleURLs.length > 0) {
        applicant.articles = state.applicant.articleURLs.map((article, index) => {
          return `${state.applicant.articleProtocols[index]}${article}`
        });
      }

      commit('setApplicant', applicant);
      let response = await Api.post('applicants/', {
        ...state.applicant,
        countryId,
        categoryId
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
    async registerJournalist({
      state
    }) {
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
      state.applicant = { ...state.applicant,
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
      state.newUser = { ...state.newUser,
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
