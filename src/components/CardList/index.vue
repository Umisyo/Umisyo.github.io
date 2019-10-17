<template lang="pug">
    div.card-list
        Card(v-for="(content, index) in content_list" :key="index" :imgSrc="content.img" :title="content.title" :text="content.text")
</template>

<script>
export default {
  components: {
    Card: () => import("~/components/CardList/Card")
  },
  props: {
    content_list: {
      type: Array,
      default: () => []
    }
  }
};
</script>
