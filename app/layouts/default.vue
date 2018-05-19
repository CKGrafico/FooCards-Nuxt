<template>
  <section class="layout">
    <nav class="layout-menu navbar navbar-expand-lg bg-secondary text-uppercase navbar-shrink" id="mainNav">
      <div class="container">
        <nuxt-link class="navbar-brand" :to="localePath('/')" exact>Foo Cards</nuxt-link>
        
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <nuxt-link class="nav-link" :to="localePath('/')" exact>Home</nuxt-link>
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <nuxt-link class="nav-link" :to="localePath('login')">Login</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section class="layout-content">
      <nuxt />
    </section>

    <div class="layout-copy copyright py-4 text-center text-white">
      <div class="container">
        <small>Made with 🍕 by CKGrafico</small>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '~/variables';

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;

  &-content {
    flex: 1 1 auto;
  }

  &-menu,
  &-copy {
    flex: 0 0 auto;
  }
}
</style>

<script lang='ts'>
import Vue from 'vue';
import Component from 'nuxt-class-component';

@Component
export default class DefaultLayout extends Vue {}
</script>