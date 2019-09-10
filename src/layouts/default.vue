<template lang="pug">
  div.layout
    header.header
      nuxt-link.header__link(to="/")
        button.header__link-button Top
      nuxt-link.header__link(to="/About")
        button.header__link-button About
      nuxt-link.header__link(to="/Skill")
        button.header__link-button Skill
      nuxt-link.header__link(to="/Works")
        button.header__link-button Works
    nuxt
    footer.footer
      ul.footer__contacts Contacts
        li.footer__contacts-content mail: Kusunokisouta@gmail.com
</template>
