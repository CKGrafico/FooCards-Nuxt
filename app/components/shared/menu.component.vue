<template>
  <div class="menu navbar">
    <ul class="menu-list navbar-nav">
      <li class="menu-item nav-item" v-if="!logged">
        <nuxt-link class="nav-link" :to="localePath('login')">Login</nuxt-link>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <span class="menu-coins">{{coins}}💰</span>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <nuxt-link class="nav-link" :to="localePath('cards')">
          My Cards
          <span class="menu-bullet">({{list.length}})</span>
        </nuxt-link>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <nuxt-link class="nav-link" :to="localePath('wizard')">Create</nuxt-link>
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
import { userModule, cardsModule } from '~/store/modules';

const UserModule = namespace(userModule.UsersStore.id);
const CardsModule = namespace(cardsModule.CardsStore.id);

@Component
export default class MenuComponent extends Vue {
  @UserModule.State logged;
  @UserModule.State coins;
  @CardsModule.State list;
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
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 1rem;
  }

  &-coins {
    color: $color-secondary-brighter;
  }

  &-bullet {
    color: $color-secondary-brighter;
  }
}
</style>