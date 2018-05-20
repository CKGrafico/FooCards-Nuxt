<template>
  <div class="menu navbar">
    <ul class="menu-list navbar-nav">
      <li class="menu-item nav-item" v-if="!logged">
        <nuxt-link class="nav-link" :to="localePath('login')">Login</nuxt-link>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <nuxt-link class="nav-link" :to="localePath('cards')">Cards</nuxt-link>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <nuxt-link class="nav-link" :to="localePath('training')">Training</nuxt-link>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <nuxt-link class="nav-link" :to="localePath('logout')">Logout</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';
import { userModule } from '~/store/modules';

const UserModule = namespace(userModule.UsersStore.id);

@Component
export default class MenuComponent extends Vue {
  @UserModule.State logged;
}
</script>

<style lang="scss" scoped>
@import '~/variables';

.menu {
  display: flex;

  &-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &-item {
    margin-left: 1rem;
  }
}
</style>