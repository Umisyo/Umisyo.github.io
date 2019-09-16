<template lang="pug">
    section.card
        img.card__img(:src="imgSrc" :alt="title")
        h3.card__title {{ title }}
        p.card__text {{ text }}
</template>

<script>
export default {
    props: {
        imgSrc: String,
        title: String,
        text: String
    }
}
</script>