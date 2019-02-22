<template>
  <main id="bl-dropdown" class="btn-group bl-dropdown">
    <button v-if="!minimal" type="button" class="btn dropdown-toggle bl-dropdown-btn"
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      data-reference="parent"
    >
      <p class="country">
        <span class="flag-icon flag-icon-fr rounded-circle mr-1"></span>
        France
        <i class="fal fa-angle-down"></i>
      </p>
    </button>
    <button v-else type="button" class="dropdown-toggle btn-no-bg"
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      data-reference="parent"
    >
      <p class="country">
        All <i class="fal fa-angle-down"></i>
      </p>
    </button>
    <div class="dropdown-menu bl-dropdown-menu" aria-labelledby="dropdownMenuReference">
      <div class="d-flex bl-dropdown-menu__countries">
        <div class="favourite-countries">
          <p class="header">
            Favourite Country
          </p>
          <p class="dropdown-item subheader">All</p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-mx rounded-circle mr-1"></span>
            Mexicoss
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-us rounded-circle mr-1"></span>
            USA
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-ng rounded-circle mr-1"></span>
            Nigeria
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-mx rounded-circle mr-1"></span>
            Mexico
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-us rounded-circle mr-1"></span>
            USA
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-fr rounded-circle mr-1"></span>
            Nigeria
          </p>
        </div>
        <div class="other-countries">
          <p class="header">
            Other Country
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-mx rounded-circle mr-1"></span>
            Mexico
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-us rounded-circle mr-1"></span>
            USA
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-ng rounded-circle mr-1"></span>
            Nigeria
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-mx rounded-circle mr-1"></span>
            Mexico
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-us rounded-circle mr-1"></span>
            USA
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-ng rounded-circle mr-1"></span>
            Nigeria
          </p>
          <p class="dropdown-item country">
            <span class="flag-icon flag-icon-ng rounded-circle mr-1"></span>
            Nigeria
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import 'flag-icon-css/css/flag-icon.css';

export default {
  name: 'CountryOptions',
  props: {
    minimal: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './Countryoptions.scss';
</style>
