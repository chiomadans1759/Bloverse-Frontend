<template>
<main id="settings">
  <div class="container">
  <div class="row d-flex justify-content-center align-items-center">
  <div class="col-sm-7 col-lg-6">
    <h3 class="pb-4">Settings</h3>
    <div class="card p-4">
      <h6 class="pb-3">Profile</h6>

      <a href="#" class="text-capitalize">edit profile</a>
      <p class="text small">Update your information</p>

      <a href="#" class="text-capitalize mt-3">change password</a>
      <p class="text small">Update your information</p>

      <a href="#" class="text-capitalize mt-3">customize country</a>
      <p class="text small">Update your information</p>

      <a href="#" class="text-capitalize mt-3">customize category</a>
      <p class="text small">Update your information</p>

      <a href="#" class="text-capitalize mt-3">feedback</a>
      <p class="text small">Update your information</p>   

      <p class="text-capitalize font-weight-bold pt-4 auth">authorization</p> 

        <div class="pt-3 d-flex justify-content-between align-items-center">
          <div class="pr-2">
            <p class="text-capitalize">newsletter subscription</p>
            <p class="text small"> Subscribe to receive article digest of your interest</p>
          </div>   
           <div >
            <button type="button" class="btn btn-sm btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
              <div class="square"></div>
            </button>
          </div>
        </div> 

        <div class="pt-3 d-flex justify-content-between align-items-center">
          <div>
            <p>Browser Push Notifications</p>
            <p class="text small"> Receive article digest</p>
          </div>   
           <div>
            <button type="button" class="btn btn-sm btn-toggle active" data-toggle="button" aria-pressed="true" autocomplete="off">
              <div class="square"></div>
            </button>
          </div>
        </div>  

        <div class="hr"></div>

        <div class="d-flex justify-content-between align-items-center">
          <div>
            <p class="text-capitalize">Become a Content Creator</p>
            <p class="text small mb-2">Publish your article to the world</p>
            <a href="" class="text-capitalize">know more</a>
          </div>   
           <div>
            <button type="button" class="btn btn-sm btn-primary text-capitalize">apply</button>
          </div>

        </div> 
    </div>
  </div>
  </div>
  </div>
</main>
  
</template>

<script>
export default {
  
}
</script>

<style scoped>

  #settings {
    width: 100%;
    margin-bottom: 7rem;
  }

  #settings h1 {
   margin-left: 6rem;
  }

  #settings .card {
    background: #fff;
    height: auto;
    padding-top: 1.5rem;
    padding-bottom: 7rem;
  }

  #settings .card .text {
    color: #868686;
  }

  #settings .card .auth {
    font-size: 0.9rem;
  }

 #settings .btn-toggle{
  padding: 0;
  position: relative;
  border: none;
  height: 1.5rem;
  width: 3rem;
  background: rgb(131, 128, 128);
  border-radius: 1.5rem;
}
#settings .btn-toggle.btn-sm:focus,
.btn-toggle.btn-sm.focus,
.btn-toggle.btn-sm:focus.active,
.btn-toggle.btn-sm.focus.active {
  outline: none;
}
#settings .btn-toggle.btn-sm:before,
.btn-toggle.btn-sm:after {
  line-height: 1.5rem;
  width: 0.5rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.55rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: absolute;
  bottom: 0;
  transition: opacity 0.25s;
}
#settings .btn-toggle.btn-sm:before {
  content: 'Off';
  left: -0.5rem;
}
#settings .btn-toggle.btn-sm:after {
  content: 'On';
  right: -0.5rem;
  opacity: 0.5;
}
#settings .btn-toggle.btn-sm > .square {
  position: absolute;
  top: 0.1875rem;
  left: 0.1875rem;
  width: 1.125rem;
  height: 1.125rem;
  background: #fff;
  transition: left 0.25s;
}
#settings .btn-toggle.btn-sm.active {
  transition: 0.25s;
  background: #096DD9;
}
#settings .btn-toggle.btn-sm.active > .square {
  left: 1.6875rem;
  transition: left 0.25s;
}
#settings .btn-toggle.btn-sm.active:before {
  opacity: 0.5;
}
#settings .btn-toggle.btn-sm.active:after {
  opacity: 1;
}
#settings .btn-toggle.btn-sm.btn-sm:before,
.btn-toggle.btn-sm.btn-sm:after {
  line-height: -0.5rem;
  color: #fff;
  letter-spacing: 0.75px;
  left: 0.4125rem;
  width: 2.325rem;
}
#settings .btn-toggle.btn-sm.btn-sm:before {
  text-align: right;
}
#settings .btn-toggle.btn-sm.btn-sm:after {
  text-align: left;
  opacity: 0;
}
#settings .btn-toggle.btn-sm.btn-sm.active:before {
  opacity: 0;
}
#settings .btn-toggle.btn-sm.btn-sm.active:after {
  opacity: 1;
}

#settings .hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.10);
}

</style>
