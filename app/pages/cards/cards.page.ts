import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';

import { CardComponent } from '~/components/shared';
import { cardsModule } from '~/store/modules';

const CardsModule = namespace(cardsModule.CardsStore.id);

@Component({
    components: {
        CardComponent
    },
    middleware: 'secured'
})
export default class WizardPage extends Vue {
    @CardsModule.State list;

    public async fetch({ store }): Promise<void> {
        await store.dispatch(`avatars/fetch`);
    }
}