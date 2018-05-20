import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';

import { Container } from '~/core';
import { IRandomizerHelper, IRandomizerHelperId } from '~/helpers';

import { ChoicerComponent } from '~/components/shared';
import { AvatarComponent } from '~/components/wizard';
import { avatarsModule, cardsModule } from '~/store/modules';
import { Avatar } from '~/store/modules/avatars';

const AvatarsModule = namespace(avatarsModule.AvatarsStore.id);
const CardsModule = namespace(cardsModule.CardsStore.id);

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
        this.avatar = {
            eyes: this.faceParts.eyes[this.randomizerHelper.generate(0, this.faceParts.eyes.length - 1)],
            nose: this.faceParts.nose[this.randomizerHelper.generate(0, this.faceParts.nose.length - 1)],
            mouth: this.faceParts.mouth[this.randomizerHelper.generate(0, this.faceParts.mouth.length - 1)],
            color: this.randomizerHelper.color()
        };
    }

    public onClickSave(): void {
        this.addCard({
            avatar: this.avatar,
            hp: 100,
            power: 50
        });
    }
}