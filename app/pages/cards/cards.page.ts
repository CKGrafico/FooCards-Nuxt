import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';

import { CardComponent } from '~/components/shared';
import { cardsModule, userModule } from '~/store/modules';

const CardsModule = namespace(cardsModule.CardsStore.id);
const UserModule = namespace(userModule.UsersStore.id);

@Component({
    components: {
        CardComponent
    },
    middleware: 'secured'
})
export default class CardsPage extends Vue {
    @CardsModule.State list: cardsModule.Card[];
    @CardsModule.Action removeCard;
    @UserModule.Action buyCoins;

    public async fetch({ store }): Promise<void> {
        await store.dispatch(`avatars/fetch`);
    }

    public onClickRemove(card: cardsModule.Card): void {
        this.removeCard(card);
    }

    public onClickBuy(): void {
        this.buyCoins();
    }
}