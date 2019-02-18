<template>
  <main id="user-info-mobile" class="container d-block d-sm-none">
    <profile :hideMobileUserInfo="hideMobileUserInfo"
    displayInterest hideFollowing displayFollowers />
    <country-card v-if="!hideCountry" />
    <category-card v-if="!displayInterest" />
  </main>
</template>

<script>
import CountryCard from '@/components/CountryCard/CountryCard';
import Profile from '@/components/ProfileCard/ProfileCard';
import CategoryCard from '@/components/CategoryCard/CategoryCard';

export default {
  name: 'UserInfoMobile',
  components: { Profile, CountryCard, CategoryCard },
  props: {
    hideMobileUserInfo: {
      type: Function,
      required: false,
      default: () => {},
    },
    displayInterest: {
      type: Boolean,
      default: false,
    },
    hideFollowing: {
      type: Boolean,
      default: false,
    },
    displayFollowers: {
      type: Boolean,
      default: false,
    },
    hideCountry: {
      type: Boolean,
      default: false
    },
  }
}
</script>

<style lang="scss" scoped>
  @import './UserInfoMobile.scss';
</style>
