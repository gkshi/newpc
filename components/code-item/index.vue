<template lang="pug">
  .code-item-component.flex.column.a-start
    .title(@click="select") {{ data.title }}
    pre(@click="select")
      code(ref="code") {{ data.text }}
</template>

<script>
export default {
  name: 'code-item-component',
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  methods: {
    select () {
      if (document.selection) { // IE
        const range = document.body.createTextRange()
        range.moveToElementText(this.$refs.code)
        range.select()
      } else if (window.getSelection) {
        const range = document.createRange()
        range.selectNode(this.$refs.code)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .code-item-component {
    padding: 10px 10px;
    .title {
      margin-bottom: 4px;
      font-size: .8rem;
      letter-spacing: .5px;
      // font-weight: $font-weight-semibold;
    }
    pre {
      display: flex;
      width: 100%;
      padding: 20px 20px;
      border-radius: $border-radius-default;
      background: $color-white;
    }
  }
</style>
