import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';

import { Container } from '~/core';

// import { AvatarComponent } from '~/components/wizard';
// import { avatarsModule } from '~/store/modules';

// const AvatarsModule = namespace(avatarsModule.AvatarsStore.id);

@Component({
  components: {
  }
})
export default class WizardPage extends Vue {
    public async fetch({ store }): Promise<void> {
        await store.dispatch(`avatars/fetch`);
    }
}