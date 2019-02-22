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
      <div class="modal-dialog" :class="{ 'modal-dialog-centered': !modalTop }" role="document">
        <div class="modal-content" :class="{ 'noBorderRadius': noBorderRadius }">
          <div class="modal-header" :class="{ darkBackground: dark }">
            <h5 v-if="title" class="modal-title" id="customModal">{{title}}</h5>
            <div>
              <h6 v-if="altTitle">
                <strong class="alt-title">{{altTitle}}</strong>
              </h6>
              <h6 v-if="subTitle" class="mt-2 sub-title">{{subTitle}}</h6>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div v-if="!hideFooter" class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-outline-primary" data-dismiss="modal">
                {{closeText}}
              </button>
              <button type="button" class="btn btn-primary">{{actionText}}</button>
            </slot>
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
      default: ""
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
    },
    dark: {
      type: Boolean,
      required: false,
      default: false
    },
    altTitle: {
      type: String,
      required: false,
      default: ""
    },
    subTitle: {
      type: String,
      required: false,
      default: ""
    },
    modalTop: {
      type: Boolean,
      default: false
    },
    noBorderRadius: {
      type: Boolean,
      default: false,
      required: false,
    }
  }
};
</script>


<style lang="scss" scoped>
@import "./Modal.scss";
</style>

