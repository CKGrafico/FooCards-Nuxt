<template>
  <section class="p-login">
    <button @click="onClickLogin">Login!</button>
  </section>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';
import { userModule } from '~/store/modules';

const UserModule = namespace(userModule.UsersStore.id);

@Component
export default class LoginPage extends Vue {
  @UserModule.Action login;

  public async onClickLogin(): Promise<void> {
    await this.login('User');
    this.$router.push({
      path: this.localePath('wizard')
    });
  }
}
</script>