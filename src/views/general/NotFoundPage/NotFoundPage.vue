<template>
    <main class="container bl-not-found d-flex justify-content-center align-items-center">
        <div class="row not-found-content flex-column flex-sm-row">
          <div class="col-12 col-sm-5 not-found-image">
            <img src="@/assets/image.svg" alt="" id="err-img">
          </div>
          <div class="col-12 col-sm-7 not-found-text">
            <p class="nos">
              404
            </p>
            <div class="msg">
              <p class="whoops">
                Whoops!
              </p>
              <p class="msg-text">
                We can’t find the page you are looking for
              </p>
              <p class="return-button">
                <router-link to="/" class="btn btn-outline-primary">Return</router-link>
              </p>
            </div>
          </div>
        </div>
    </main>
</template>

<script>
export default {
  name: 'NotFoundPage'
}
</script>

<style lang='scss' scoped>
@import './NotFoundPage.scss';
</style>
