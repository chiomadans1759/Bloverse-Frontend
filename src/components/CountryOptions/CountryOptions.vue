<template>
  <main id="bl-dropdown" class="btn-group bl-dropdown">
    <button v-if="!minimal" type="button" class="btn dropdown-toggle bl-dropdown-btn"
      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
      data-reference="parent"
    >
      <p class="country">
        <img src="@/assets/france.svg" alt="fr">
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
            <img src="@/assets/mexico.svg" alt="fr">
            Mexico
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/US.svg" alt="fr">
            USA
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/nigeria.svg" alt="fr">
            Nigeria
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/mexico.svg" alt="fr">
            Mexico
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/US.svg" alt="fr">
            USA
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/nigeria.svg" alt="fr">
            Nigeria
          </p>
        </div>
        <div class="other-countries">
          <p class="header">
            Other Country
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/mexico.svg" alt="fr">
            Mexico
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/US.svg" alt="fr">
            USA
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/nigeria.svg" alt="fr">
            Nigeria
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/mexico.svg" alt="fr">
            Mexico
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/US.svg" alt="fr">
            USA
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/nigeria.svg" alt="fr">
            Nigeria
          </p>
          <p class="dropdown-item country">
            <img src="@/assets/nigeria.svg" alt="fr">
            Nigeria
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
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
