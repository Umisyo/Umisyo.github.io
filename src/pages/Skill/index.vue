<template lang='pug'>
    div.skill
        h2 Skills
        CardList(:content_list='content_list')

</template>

<script>
export default {
  components: {
    CardList: () => import('~/components/CardList')
  },
  data() {
    return {
      content_list: [
        {
          img: 'https://res.cloudinary.com/umisyo/image/upload/f_auto/v1568624473/Portfolio/Python-icon_e4sffr.png',
          title: 'Python3',
          text: 'Django, Flask, and other...'
        },
        {
          img: 'https://res.cloudinary.com/umisyo/image/upload/f_auto/v1568624693/Portfolio/JavaScript-icon_vknmjz.png',
          title: 'JavaScript',
          text: 'Vue/Nuxt, React, Express'
        },
        {
          img: 'https://res.cloudinary.com/umisyo/image/upload/f_auto/v1568624799/Portfolio/php-icon_o6n7sz.png',
          title: 'PHP',
          text: 'Laravel'
        },
        {
          img: 'https://res.cloudinary.com/umisyo/image/upload/f_auto/v1568624904/Portfolio/html-icon_pmbe9n.png',
          title: 'HTML/CSS',
          text: 'sass, bem'
        },
        {
          img: 'https://res.cloudinary.com/umisyo/image/upload/f_auto/v1568625092/Portfolio/Arduino-icon_ijzu3y.jpg',
          title: 'Arduino',
          text: 'development IoT'
        },
        {
          img: 'https://res.cloudinary.com/umisyo/image/upload/f_auto/v1568625205/Portfolio/docker-icon_bmfmgq.png',
          title: 'Docker',
          text: 'Docker, docker-compose'
        }
      ]
    };
  }
};
</script>