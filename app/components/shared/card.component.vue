<template>
    <div class="card" :class="{'is-small': small}">
        <img class="card-image" :src="`${apiUrl}/face/${value.avatar.eyes}/${value.avatar.nose}/${value.avatar.mouth}/${value.avatar.color}`"/>
        <p class="card-description" v-if="!small">
          Proin massa massa, bibendum at aliquam sed, euismod eget enim. Sed at facilisis ipsum. Mauris sem risus, luctus sit.
        </p>
        <div class="card-hp">{{value.hp}} ❤️</div>
        <div class="card-power">{{value.power}} ⚡</div>
    </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';

import { settingsModule, cardsModule } from '~/store/modules';

const SettingsModule = namespace(settingsModule.SettingsStore.id);

@Component
export default class CardComponent extends Vue {
  @SettingsModule.State apiUrl: string;

  public isLoading = false;

  // v-model
  @Prop({ type: Object, required: true })
  value: cardsModule.Card;

  @Prop({ type: Boolean, default: false })
  small: boolean;
}
</script>

<style compile lang="scss" scoped>
@import '~/variables';

.card {
  $size: 15rem;
  $size-small: 10rem;

  align-items: center;
  background-color: $color-background-bright;
  border: 3px solid rgba($color-foreground-darker, .05);
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  margin: 1rem;
  overflow: hidden;
  transition: transform $animation-speed-default;
  width: $size;

  &:hover {
    transform: translateY(-1rem);
  }

  &-image {
    $image-size: $size;

    height: $image-size;
    width: $image-size;
  }

  &-description {
    color: $color-foreground-bright;
    font-size: $font-size-s;
    margin: 1rem;
  }

  &-hp,
  &-power {
    color: $color-brand;
    font-size: $font-size-l;
  }

  &.is-small {
    width: $size-small;
  }

  &.is-small &-image {
    $image-size: $size-small;

    height: $image-size;
    width: $image-size;
  }
}
</style>