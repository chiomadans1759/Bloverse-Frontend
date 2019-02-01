import Api from '@/utils/Api';

export default {
  state: {
    journalistPosts: {},
    draftPosts: {},
    metrics: {}
  },
  actions: {
    async processPost({ commit, rootState, state, dispatch }, params) {
      let { post } = params;
      if (params.shouldUploadImage) {
        let newUrl = await dispatch('doUpload', post.image_url, {root: true});
        post.image_url = newUrl
      }

      let userId = rootState.auth.loggedInUser.id;

      let { 
        id, title, body, keypoint=[], image_url, category, country, location, duration, device_type
      } = post;
      

      let payload = { 
        id, title, location, duration, device_type, image_url, category, country, body, is_published: params.shouldPublish, keypoint
      };

      if(keypoint.length < 1)
        delete payload.keypoint

      let response;

      /* The block of line below performs either an update or create, checks if post sent with param has an Id
         it updates if it finds an Id
      */
      if (post.id) {
        response = await Api.put('journalists/' + userId + '/posts/' + post.id, payload, true);
      } else {
        response = await Api.post('journalists/' + userId + '/posts/', payload, true);
      }
      
      switch (response.statusCode) {
      case 200:
      case 201: {
        let { 
          id, title, body, keypoint, image_url, category, country, is_published: isPublished = false, 
          slug, location, duration, device_type
        } = response.data.post;

        let updatedPost = { id, keypoint, image_url, title, body, category, country, isPublished, slug, location, duration, device_type };

        return updatedPost;
      }
      default:
        return response;
      }
    },
    async getMyPosts({ commit, rootState }) {
      let userId = rootState.auth.loggedInUser.id;
      let response = await Api.get('journalists/' + userId + '/posts/', true);
      let posts = [];
      let drafts = [];
      response.data.posts.forEach(post => {
        if (post.is_published == true) {
          posts.push(post)
        } else if (post.is_published == false) {
          drafts.push(post)
        }
      })
      commit('setPosts', posts);
      commit('setDrafts', drafts);
    },
    async getMyDrafts({ commit, rootState }) {
      let userId = rootState.auth.loggedInUser.id;
      let response = await Api.get('journalists/' + userId + '/posts/', false);
      commit('setDrafts', response.data);
    },
    async getMyMetrics({ commit, rootState }) {
      let userId = rootState.auth.loggedInUser.id;
      let response = await Api.get(`metrics/journalists/${userId}/`);
      commit('setMyMetrics', response.data);
    }
  },
  mutations: {
    setPosts(state, props) {
      state.journalistPosts = props
    },
    setDrafts(state, props) {
      state.draftPosts = props
    },
    setMyMetrics(state, metrics) {
      state.metrics = metrics;
    }
  },
  getters: {
    views(state) {
      return state.metrics && state.metrics.views;
    },
    datas(state) {
      return {
        countryRank: state.metrics.countryRank,
        categoryRank: state.metrics.categoryRank,
        point: state.metrics.points,
        worldRank: state.metrics.worldRank
      }
    },
    articles(state) {
      return state.metrics && state.metrics.publishedArticles;
    }
  }
}
