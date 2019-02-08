<template>
  <header id="feeds-header">
    <nav
      class="navbar navbar-expand-lg navbar-light px-5"
      :class="[{ 'transparent': isTransparent, 'alt-button': isTransparent }, customClass]"
    >
      <a v-if="showBackArrow" class="backlink mr-4" href="/settings">
        <i class="fal fa-long-arrow-left fa-2x back-icon"></i>
        <span class="back-text">Back</span>
      </a>
      <router-link to="/" class="router-link">
        <img class="nav-logo" v-if="!isTransparent" src="@/assets/Logo.svg">
        <img class="nav-logo" v-if="isTransparent" src="@/assets/Logo - White.svg">
      </router-link>
      <div
        v-if="showNavigations"
        data-target="#navbarSupportedContent"
        data-toggle="collapse"
        class="form-inline my-2 my-lg-0 navbar-toggler mobile-view"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span id="option-icon"/>
          <span id="option-icon"/>
          <span id="option-icon"/>
        </a>
        <div class="dropdown-menu dropdown-mobile-view" aria-labelledby="navbarDropdown">
          <router-link to="/about" class="dropdown-item">About</router-link>
          <router-link to="/photocontest" class="dropdown-item">Photo Contest</router-link>
          <router-link to="/terms-and-conditions" class="dropdown-item">Terms</router-link>
          <router-link to="/privacy-policies" class="dropdown-item">Privacy</router-link>
          <a class="dropdown-item" href="#">FAQ</a>
          <div class="dropdown-divider"></div>
          <a data-toggle="modal" href="#feedback-modal" class="dropdown-item">Feedback</a>
        </div>
        <div>
          <span class="vl bg-light"></span>
          <router-link class="get-started-link" to="/login" v-if="!isLogin">Get Started</router-link>
        </div>

        <!-- initials mobile -->
        <div class="nav-item dropdown initials" v-if="isLogin">
          <a
            class="dropdown-toggle initials-link"
            to="/login"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >MD</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link to="/profile" class="dropdown-item">
              <span class="icon-profile">
                <i class="fal fa-user-circle"></i>
              </span>
              Profile
            </router-link>
            <div class="dropdown-divider"></div>
            <router-link class="dropdown-item" to="/settings">
              <span class="icon-settings">
                <i class="fal fa-cog"></i>
              </span>
              Settings
            </router-link>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="icon-power">
                <i class="far fa-power-off"></i>
              </span>
              Sign Out
            </a>
          </div>
        </div>
      </div>

      <div v-if="showNavigations" class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto" :class="{ 'white-text': whiteText }">
          <li class="nav-item active">
            <router-link :to="backLink" class="nav-link">Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/photocontest">Photo Contest</a>
          </li>
          <li class="nav-item dropdown pr-4">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span id="option-icon"/>
              <span id="option-icon"/>
              <span id="option-icon"/>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/terms-and-conditions" class="dropdown-item">Terms</router-link>
              <router-link to="/privacy-policies" class="dropdown-item">Privacy</router-link>
              <a class="dropdown-item" href="#">FAQ</a>
              <div class="dropdown-divider"></div>
              <a data-toggle="modal" href="#feedback-modal" class="dropdown-item">Feedback</a>
            </div>
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0 pr-4" :class="{ 'alt-button': isTransparent }">
          <router-link class="get-started-link" to="/login" v-if="!isLogin">Get Started</router-link>

          <!-- initials -->
          <div class="nav-item dropdown initials">
            <a
              class="dropdown-toggle initials-link"
              to="/login"
              v-if="isLogin"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >MD</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/profile" class="dropdown-item">
                <span class="icon-profile">
                  <i class="fal fa-user-circle"></i>
                </span>
                Profile
              </router-link>
              <div class="dropdown-divider"></div>
              <router-link class="dropdown-item" to="/settings">
                <span class="icon-settings">
                  <i class="fal fa-cog"></i>
                </span>
                Settings
              </router-link>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                <span class="icon-power">
                  <i class="far fa-power-off"></i>
                </span>
                Sign Out
              </a>
            </div>
          </div>
          <span class="vl bg-light"></span>
          <router-link class="publish-link" to="/creators">Publish</router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    isTransparent: {
      type: Boolean,
      default: false
    },
    whiteText: {
      type: Boolean,
      default: false
    },
    showBackArrow: {
      type: Boolean,
      default: false
    },
    showNavigations: {
      type: Boolean,
      default: true
    },
    isLogin: {
      type: Boolean,
      default: true
    },
    backLink: {
      type: String,
      default: '/',
    },
    customClass: {
      type: String,
      required: false,
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./Navbar";
</style>
