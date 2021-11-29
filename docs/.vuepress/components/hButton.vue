<template>
  <button :class="['h-button', buttonType, outlineType]">
    <span><slot></slot></span>
  </button>
</template>
<script>
export default {
  name: 'hButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    outline: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonType() {
      return `h-button-${this.type}`
    },
    outlineType() {
      return this.outline ? `is-outline` : ''
    }
  }
}
</script>
<style lang="scss" scoped>
.h-button {
  display: inline-block;
  cursor: pointer;
  color: #404040;
  padding: 12px 20px;
  background: #fff;
  border: 1px solid #ddd;
  font-size: 14px;
}
.h-button-primary {
  color: #fff;
  background: #3b86e0;
  border-color: #3b86e0;
  &.is-outline {
    color: #3b86e0;
    background: transparent;
  }
}
.h-button-success {
  color: #fff;
  background: #04be5b;
  border-color: #04be5b;
}
.h-button-info {
  color: #fff;
  background: #969696;
  border-color: #969696;
}
.h-button-warning {
  color: #fff;
  background: #ff9948;
  border-color: #ff9948;
}
.h-button-error {
  color: #fff;
  background: #ff4064;
  border-color: #ff4064;
}

</style>