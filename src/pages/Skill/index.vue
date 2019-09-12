<template lang="pug">
    div.skill
        h2 Skills
        CardList(:content_list="content_list")

</template>

<script>
export default {
  components: {
    CardList: () => import("~/components/CardList")
  },
  data() {
    return {
      content_list: [
        {
          img: 'https://res.cloudinary.com/umisyo/image/upload/v1568269864/Portfolio/icon_zmntgo.webp',
          title: "Python3",
          text: "Django, Flask, and other..."
        },
        {
          title: "JavaScript",
          text: "Vue/Nuxt, React, Express"
        },
        {
          title: "PHP",
          text: "Laravel"
        },
        {
          title: "HTML/CSS",
          text: "sass, bem"
        },
        {
          title: ""
        }
      ]
    };
  }
};
</script>