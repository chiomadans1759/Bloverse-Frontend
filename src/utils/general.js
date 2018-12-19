import axios from 'axios';
/* eslint-disable */
export function initialize(store, router){
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.auth);
    const isJournalist = to.matched.some(record => record.meta.journalist);
    const isAdmin = to.matched.some(record => record.meta.admin);
    const currentUser = store.state.auth.loggedInUser;

    
    if(requiresAuth){
      if(isJournalist && store.getters.isAJournalist){
        next()
      }else if(isAdmin && store.getters.isAnAdmin){
        next()
      }else{
        if(isAdmin){
          next('/admin/login');
        }else if(isJournalist){
          next('creators/login');
        }else{
          next(from.path);
        }
      }
    }else{
      if(to.path == '/creators' && store.getters.isAJournalist){
        if(!!currentUser){
           next({path: `/creators/${currentUser.userName}/dashboard`});
         }else{
           next('/creators')
         }
      }else if(to.path == '/admin/login' && store.getters.isAnAdmin){
        
         next('/admin/dashboard');
      }else{
         next();
       }
    }

   
  });


  axios.interceptors.response.use(null, (error) =>{
    if(error.response.status == 403){
      store.dispatch('clearSession');
      router.push('/creators');
    }
    return Promise.reject(error);
  });

  

}
