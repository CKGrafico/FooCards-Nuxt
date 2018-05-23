import { Vue } from 'vue-property-decorator';
import Component, { namespace } from 'nuxt-class-component';
import { gameModule } from '~/store/modules';
import { CardComponent, LoadingComponent } from '~/components/shared';
import { Card } from '~/store/modules/cards';

const GameModule = namespace(gameModule.GameStore.id);

@Component({
    components: {
        CardComponent,
        LoadingComponent
    },
    middleware: 'secured'
})
export default class TrainingPage extends Vue {
    @GameModule.Action initGame;
    @GameModule.Action selectBotCard;
    @GameModule.Action selectUserCard;
    @GameModule.Action compareCards;
    @GameModule.State userCards;
    @GameModule.State botCards;
    @GameModule.State activeBotCard;
    @GameModule.State activeUserCard;
    @GameModule.State botScore;
    @GameModule.State userScore;
    @GameModule.State isFightingTurn;
    @GameModule.State isFinished;

    public created(): void {
        this.initGame();
    }

    public onClickBotCard(card: Card): void {
        this.selectBotCard(card);
    }

    public onClickUserCard(card: Card): void {
        this.selectUserCard(card);
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

    public isFightingBot(card: Card): boolean {
        return this.isBotCardActive(card) && this.isFightingTurn;
    }

    public isFightingUser(card: Card): boolean {
        return this.isUserCardActive(card) && this.isFightingTurn;
    }

    public onClickFight(): void {
        this.compareCards();
    }
}