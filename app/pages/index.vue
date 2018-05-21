<template>
  <section>
    <div class="container mb-0 p-5">
      <h2 class="text-center text-primary text-uppercase">Welcome to Foo Cards</h2>
    </div>

    <div class="container bg-primary text-white p-5">
      <h2 class="text-center text-uppercase text-white">About</h2>
      <hr class="star-light mb-5">
      <div class="row">
        <div class="col-lg-4 ml-auto">
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat, nisi id lacinia ultrices, odio quam egestas purus, non hendrerit purus ipsum vitae justo. Nam blandit luctus rhoncus. Proin vestibulum venenatis sapien, et aliquet odio tempus bibendum.</p>
        </div>
        <div class="col-lg-4 mr-auto">
          <p class="lead">Nullam in rutrum ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut et euismod arcu. Nulla egestas nunc sit amet scelerisque lacinia. Suspendisse tempus ante sit amet molestie mattis. Vestibulum a varius justo. Mauris eget scelerisque metus.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue } from 'vue-property-decorator';
import Component from 'nuxt-class-component';

@Component
export default class IndexPage extends Vue {}
</script>