<template>
  <div class="menu navbar">
    <ul class="menu-list navbar-nav">
      <li class="menu-item nav-item" v-if="!logged">
        <nuxt-link class="nav-link" :to="localePath('login')">Login</nuxt-link>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <transition name="add">
          <span class="menu-coins" v-if="showCoins">{{coins}}💰</span>
        </transition>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <nuxt-link class="nav-link" :to="localePath('cards')">
          My Cards
          <transition name="add">
            <span class="menu-bullet" v-if="showBullet">({{list.length}})</span>
          </transition>
        </nuxt-link>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <nuxt-link class="nav-link" :to="localePath('wizard')">Create</nuxt-link>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <nuxt-link class="nav-link" :to="hasEnoughCards ? localePath('training') : ''" :title="hasEnoughCards ? '' : 'You need at least 3 cards'" :class="{'is-disabled': !hasEnoughCards}">Training</nuxt-link>
      </li>
      <li class="menu-item nav-item" v-if="logged">
        <nuxt-link class="nav-link" :to="localePath('logout')">Logout</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Watch } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';
import { userModule, cardsModule } from '~/store/modules';

const UserModule = namespace(userModule.UsersStore.id);
const CardsModule = namespace(cardsModule.CardsStore.id);

@Component
export default class MenuComponent extends Vue {
  @UserModule.State logged;
  @UserModule.State coins;
  @CardsModule.State list;

  public showCoins = true;
  public showBullet = true;

  public get hasEnoughCards(): boolean {
    return this.list.length >= 3;
  }

  @Watch('coins')
  public onChangeCoins(newValue, oldValue): void {
    if (newValue <= oldValue) {
      return;
    }

    this.showCoins = false;
    setTimeout(() => this.showCoins = true, 10);
  }

  @Watch('list')
  public onChangeList(): void {
    this.showBullet = false;
    setTimeout(() => this.showBullet = true, 10);
  }
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
    background-color: rgba($color-secondary-darker, .65);
    border-radius: 2px;
    color: lighten($color-secondary-brighter, 20%);
    font-size: $font-size-s;
    padding: .2rem 0;
    padding-left: .5rem;
    padding-right: .15rem;
  }

  &-bullet {
    color: $color-secondary-brighter;
    display: inline-block;
  }
}
</style>