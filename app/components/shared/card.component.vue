<template>
    <div class="card">
        <img class="card-image" :src="`${apiUrl}/face/${value.eyes}/${value.nose}/${value.mouth}/${value.color}`" />
    </div>
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';

import { settingsModule, avatarsModule } from '~/store/modules';

const SettingsModule = namespace(settingsModule.SettingsStore.id);

@Component
export default class CardComponent extends Vue {
  @SettingsModule.State apiUrl: string;

  public isLoading = false;

  // v-model
  @Prop({ type: Object, required: true })
  value: avatarsModule.Avatar;
}
</script>

<style compile lang="scss" scoped>
@import "~/variables";

.card {
  &-image {
    $size: 10rem;
    height: $size;
    width: $size;
  }
}
</style>