<template>
  <main id="bl-modal">
    <div
      class="modal fade"
      :id="target"
      tabindex="-1"
      role="dialog"
      aria-labelledby="customModal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="customModal">{{title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div v-if="!hideFooter" class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">{{closeText}}</button>
            <button type="button" class="btn btn-primary">{{actionText}}</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      required: false,
      default: "Modal Title"
    },
    target: {
      type: String,
      required: true,
    },
    closeText: {
      type: String,
      required: false,
      default: "Close"
    },
    actionText: {
      type: String,
      required: false,
      default: "Save changes"
    },
    actionFunction: {
      type: Function,
      required: false,
      default: function() {}
    },
    hideFooter: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>


<style lang="scss" scoped>
@import "./Modal.scss";
</style>

