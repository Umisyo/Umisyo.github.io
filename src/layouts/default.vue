<template lang="pug">
  div
    header.header
      nuxt-link.header__link(to="/")
        button.header__link-button Top
      nuxt-link.header__link(to="/About")
        button.header__link-button About
      nuxt-link.header__link(to="/")
        button.header__link-button Skill
      nuxt-link.header__link(to="/")
        button.header__link-button Works
    nuxt
</template>
