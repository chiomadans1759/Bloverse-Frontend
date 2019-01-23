import Api from '../src/utils/Api';

export default {
  state: {
    journalistPosts: {},
    draftPosts: {},
    metrics: {},
  },
  actions: {
    async processPost({ commit, rootState, state, dispatch }, params) {
      let { post } = params;
      if (params.shouldUploadImage) {
        let newUrl = await dispatch('doUpload', post.imageUrl, {root: true});
        post.imageUrl = newUrl
      }

      let userId = rootState.auth.loggedInUser.id;
      let payload;

      let postId;

      if (post.category === 7) {
        let {
          id,
          title,
          location,
          duration,
          deviceType: device_type,
          imageUrl: image_url,
          category,
          country,
          body
        } = post;
        postId = id;
        payload = {
          id,
          title,
          location,
          duration,
          device_type,
          image_url,
          category,
          country,
          body,
          is_published: params.shouldPublish
        };
      } else {
        let {
          id,
          title,
          body,
          keyPoints: keypoint,
          imageUrl: image_url,
          category,
          country
        } = post;
        postId = id;
        payload = {
          id,
          keypoint: keypoint.map(point => point.value),
          image_url,
          title,
          body,
          category,
          country,
          is_published: params.shouldPublish
        };
      }

      let response;

      /* The block of line below performs either an update or create, checks if post sent with param has an Id
         it updates if it finds an Id
      */
      if (post.id) {
        response = await Api.put('journalists/' + userId + '/posts/' + postId, payload, true);
      } else {
        response = await Api.post('journalists/' + userId + '/posts/', payload, true);
      }
      
      switch (response.statusCode) {
      case 200:
      case 201: {
        let { 
          id, title, body, keypoint: keyPoints, image_url: imageUrl, category, country, is_published: isPublished = false, 
          slug, location, duration, device_type
        } = response.data.post;

        let updatedPost = { id, keyPoints, imageUrl, title, body, category, country, isPublished, slug, location, duration, device_type };

        return updatedPost;
      }
      default:
        return { errors: response };
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
