import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';

import { Container } from '~/core';
import { IRandomizerHelper, IRandomizerHelperId } from '~/helpers';

import { ChoicerComponent } from '~/components/shared';
import { AvatarComponent } from '~/components/wizard';
import { avatarsModule, cardsModule, userModule } from '~/store/modules';

const AvatarsModule = namespace(avatarsModule.AvatarsStore.id);
const CardsModule = namespace(cardsModule.CardsStore.id);
const UserModule = namespace(userModule.UsersStore.id);

@Component({
    components: {
        ChoicerComponent,
        AvatarComponent
    },
    middleware: 'secured'
})
export default class WizardPage extends Vue {
    @Container<IRandomizerHelper>(IRandomizerHelperId) randomizerHelper: IRandomizerHelper;

    @AvatarsModule.State faceParts: avatarsModule.AvatarsFace;
    @UserModule.State coins: number;

    @UserModule.Action payForAvatar;
    @CardsModule.Action addCard;

    public selectedEyes: string = null;
    public selectedNose: string = null;
    public selectedMouth: string = null;
    public selectedColor: string = null;
    public avatar: avatarsModule.Avatar = null;

    public async fetch({ store }): Promise<void> {
        await store.dispatch(`avatars/fetch`);
    }

    public created(): void {
        this.init();
    }

    public get haveCoins(): boolean {
        return this.coins > 0;
    }

    public onClickSave(): void {
        this.addCard({
            avatar: this.avatar
        });
        this.payForAvatar();
        this.init();
    }

    private init(): void {
        this.avatar = this.randomizerHelper.avatar(this.faceParts);
    }
}