import axios from 'axios';
/* eslint-disable */
export function initialize(store, router){
  router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.auth);
    const isJournalist = to.matched.some(record => record.meta.journalist);
    const isAdmin = to.matched.some(record => record.meta.admin);
    const currentUser = !!store.state.auth.loggedInUser;

    
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
      if(to.path == '/creators/login' && store.getters.isAJournalist){
        if(currentUser){
           next({path: `/creators/${currentUser.userName}/dashboard`});
         }else{
           next('/creators/login')
         }
      }else if(to.path == '/admin/login' && store.getters.isAnAdmin){
        
         next('/admin/dashboard');
      }else{
         next();
       }
    }
  













    // if(requiresAuth && isJournalist && currentUser && store.getters.isAJournalist){
    //     console.log("issue");
    //     next({path: `/creators/${currentUser.userName}/dashboard`});
    // }else if(requiresAuth && isAdmin && currentUser && store.getters.isAnAdmin){
    //    next('/admin/dashboard')
    // }else{
    //   next();
    // }
   // }else{
   //  if(to.path == 'creators/login' && store.getters.isAJournalist){
   //    if(currentUser){
   //       next({path: `/creators/${currentUser.userName}/dashboard`});
   //     }else{
   //       alert('Catch');
   //       next('creators/login')
   //     }
   //  }else if(to.path == 'admin/login' && store.getters.isAnAdmin){
   //    if(currentUser){
   //       next('/admin/dashboard')
   //     }else{
   //      alert('Catch');
   //       next('admin/login')
   //     }
   //  }else{
   //    next();
   //  }
   
   // }

    

   
  });


  axios.interceptors.response.use(null, (error) =>{
    if(error.response.status == 401){
      store.dispatch('clearSession');
      router.push('/login');
    }
    return Promise.reject(error);
  });

  

}
