<template>
  <section class="bg-primary text-white mb-0 p-5">
    <div class="container">
      <h2 class="text-center text-uppercase text-white">About</h2>
      <hr class="star-light mb-5">
      <div class="row">
        <div class="col-lg-4 ml-auto">
          <p class="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional LESS stylesheets for easy customization.</p>
        </div>
        <div class="col-lg-4 mr-auto">
          <p class="lead">Whether you're a student looking to showcase your work, a professional looking to attract clients, or a graphic artist looking to share your projects, this template is the perfect starting point!</p>
        </div>
      </div>
      <div class="text-center mt-4">
        <a class="btn btn-xl btn-outline-light" href="#">
          <i class="fa fa-download mr-2"></i>
          Download Now!
        </a>
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