<template>
  <section class="p-logout">
    <loading :size="50" />
  </section>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';
import { userModule } from '~/store/modules';
import { LoadingComponent } from '~/components/shared';

const UserModule = namespace(userModule.UsersStore.id);

@Component({
  components: {
    LoadingComponent
  },
  middleware: 'secured'
})
export default class LoginPage extends Vue {
  @UserModule.Action logout;

  public async created(): Promise<void> {
    await this.logout();
    this.$router.push({
      path: this.localePath('/')
    });
  }
}
</script>

<style compile lang="scss" scoped>
@import '~/variables';

.p-logout {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>