<template>
  <footer id="journalist-account-footer">
    <div class="mt-5">
      <ul class="list-inline mb-2">
        <li class="list-inline-item">
          <a href>Terms</a>
        </li>
        <li class="list-inline-item mx-3">
          <a href>Privacy</a>
        </li>
        <li class="list-inline-item">
          <a href>Feedback</a>
        </li>
      </ul>

      <h5 class="text-secondary">{{current_year}} Bloverse. All rights reserved.</h5>
    </div>
  </footer>
</template>

<script>
export default {
  name: "journalist-account-footer",
  data() {
    return {
      current_year: new Date().getFullYear()
    };
  }
};
</script>

<style scoped>
#journalist-account-footer .list-inline .list-inline-item a {
  color: rgba(0, 0, 0, 0.9) !important;
  font-size: 12px;
}

#journalist-account-footer .list-inline .list-inline-item a:hover {
  color: #2F80ED !important;
}

@media screen and (max-width: 600px) {
  #journalist-account-footer {
    display: none;
  }
}

#journalist-account-footer h5 {
  font-size: 12px;
}
</style>
