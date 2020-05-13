<template lang="pug">
  .page.index
    .wrapper
      section
        h1.title Have a new laptop?

      section
        .items(v-for="(list, i) in softwareItems" :key="i")
          softwareItem(v-for="(item, i) in list" :data="item" :key="i")

      section
        h2.title global packages
        .code-items
          codeItem(v-for="(item, i) in code" :data="item" :key="i")
</template>

<script>
/* eslint no-useless-escape: "off" */
import softwareItems from '@/data/software'
import softwareItem from '@/components/software-item'
import codeItem from '@/components/code-item'

export default {
  components: {
    softwareItem,
    codeItem
  },
  data () {
    return {
      softwareItems,
      code: [
        {
          title: 'Yarn install',
          text: 'brew install yarn'
        },
        {
          title: 'Terminal aliases',
          text: 'printf "alias dc=\\"docker-compose\\"\\nalias dev=\\"yarn dev\\"" > $HOME/.zshrc'
        }
      ]
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
        margin-bottom: 20px;
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
