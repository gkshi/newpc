<template lang="pug">
  .page.index
    .wrapper
      section
        h1.title Have a new laptop?
        h2 Install handy apps fast!

      section
        .items(v-for="(list, i) in softwareItems" :key="i")
          softwareItem(v-for="(item, i) in list" :data="item" :key="i")

      section
        h2.title Terminal useful commands:
        .code-items
          codeItem(v-for="(item, i) in code" :data="item" :key="i")
</template>

<script>
import softwareItems from '@/data/software'
import softwareItem from '@/components/software-item'
import codeItem from '@/components/code-item'
import codeItemData from '@/data/code'

export default {
  components: {
    softwareItem,
    codeItem
  },
  data () {
    return {
      softwareItems,
      code: codeItemData
    }
  }
}
</script>

<style lang="scss" scoped>
  .page.index {
    .items {
      display: grid;
      grid-gap: 20px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
    .code-items {
      & > *:not(:last-child) {
        margin-bottom: 10px;
      }
    }
    section {
      .title {
        margin-bottom: 20px;
      }
      &:not(:last-child) {
        margin-bottom: 80px;
      }
    }
  }
</style>
