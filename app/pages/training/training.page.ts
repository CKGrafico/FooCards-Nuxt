import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';
import { gameModule } from '~/store/modules';
import { CardComponent } from '~/components/shared';
import { Card } from '~/store/modules/cards';

const GameModule = namespace(gameModule.GameStore.id);

@Component({
    components: {
        CardComponent
    },
    middleware: 'secured'
})
export default class TrainingPage extends Vue {
    @GameModule.Action initGame;
    @GameModule.State userCards;
    @GameModule.State botCards;

    public activeBotCard: Card = null;
    public activeUserCard: Card = null;
    public isGameStarted = false;

    public created(): void {
        this.initGame();
    }

    public onClickBotCard(card: Card): void {
        this.activeBotCard = card;
    }

    public onClickUserCard(card: Card): void {
        this.activeUserCard = card;
    }

    public isBotCardActive(card: Card): boolean {
        return this.activeBotCard && card.id === this.activeBotCard.id;
    }

    public isUserCardActive(card: Card): boolean {
        return this.activeUserCard && card.id === this.activeUserCard.id;
    }

    public get areCardsSelected(): boolean {
        return !!this.activeBotCard && !!this.activeUserCard;
    }

    public isFighting(card: Card): boolean {
        return this.isBotCardActive(card) && this.isGameStarted;
    }

    public onClickFight(): void {
        alert('in progress, alerts are the new console.log');
        this.isGameStarted = true;
    }
}