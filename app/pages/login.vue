<template>
  <section class="p-login">
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="button" class="btn btn-primary btn-lg btn-block mt-5" @click="onClickLogin">Fake Login 🤪</button>
    </form>
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
      path: this.localePath('cards')
    });
  }
}
</script>

<style compile lang="scss" scoped>
@import '~/variables';

.p-login {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-top: 5%;
  width: 100%;
}
</style>