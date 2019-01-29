<template>
  <main id="user-info-mobile" class="container d-block d-sm-none">
    <profile :hideMobileUserInfo="hideMobileUserInfo" />
    <country-card />
    <category-card />
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
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './UserInfoMobile.scss';
</style>

