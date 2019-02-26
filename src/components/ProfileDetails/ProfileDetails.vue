<template>
  <div class="profile-details-content">
    <div class="contact-details mb-4">
      <p>John Doe</p>
      <p>
        <i class="fal fa-phone mr-2 contact-icon"></i>
        +234 000 000 0000
      </p>
      <p>
        <i class="fal fa-envelope mr-2 contact-icon"></i>
        email@bloverse.com
      </p>
      <p>
        <i class="fal fa-map-marker-alt mr-2 contact-icon"></i>
        Lagos, Nigeria
      </p>
    </div>

    <category-card 
      hideCardClass titleStyle="profile-details-title"
      title="Category"
      :showEditIcon="false"
      :showSubtitle="false"
      :addPadding="false"
    />

    <social-media />
  </div>
</template>

<script>
import CategoryCard from '../CategoryCard/CategoryCard.vue';
import SocialMedia from '../SocialMedia/SocialMedia.vue';

export default {
  name: 'ProfileDetails',
  components: { SocialMedia, CategoryCard },
}
</script>

<style lang="scss" scoped>
  @import './ProfileDetails.scss';
</style>
