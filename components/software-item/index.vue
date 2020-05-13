<template lang="pug">
  .item-component
    a.flex.column.center(:href="data.url" target="_blank")
      .icon
        img(:src="data.image")
      .flex.a-center
        .indicator(:class="data.category")
        .title {{ data.title }}
</template>

<script>
export default {
  name: 'item-component',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
  .item-component {
    display: block;
    height: 140px;
    // background: $color-white;
    // border-radius: $border-radius-default;
    // box-shadow: $box-shadow-default;
    a {
      height: 100%;
      text-decoration: none;
    }
    .icon {
      min-width: 80px;
      height: 80px;
      margin-bottom: 10px;
      background: $color-bg;
      border-radius: 50%;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        transition: $transition-image;
        filter: grayscale(1);
        opacity: .6;
      }
    }
    .indicator {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: $color-white;
      margin-right: 8px;
      margin-top: 1px;
      &.work {
        background: #f98164;
      }
      &.dev {
        background: #78bb68;
      }
      &.system {
        background: #b96dd0;
      }
      &.personal {
        background: #3998ec;
      }
      &.design {
        background: #e272a5;
      }
    }
    .title {
      // font-weight: $font-weight-semibold;
    }

    &:hover {
      .icon {
        img {
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }
</style>
