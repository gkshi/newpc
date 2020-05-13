<template lang="pug">
  .code-item-component.flex.column.a-start(@click="select")
    div {{ data.title }}
    pre
      code {{ data.text }}
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
      console.log('select')
    }
  }
}
</script>

<style lang="scss" scoped>
  .code-item-component {
    padding: 10px 10px;
    pre {
      display: block;
      background: $color-white;
    }
  }
</style>
