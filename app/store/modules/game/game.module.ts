import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { injectable, inject } from 'inversify';
import { RootState } from '~/store';
import { StoreModule } from '~/core';
import { IRandomizerHelper, IRandomizerHelperId, ICloneHelperId, ICloneHelper } from '~/helpers';
import { Card } from '~/store/modules/cards';

// TODO: Refactor this store :)
export const types = {
    SET_USER_CARDS: 'SET_USER_CARDS',
    SET_BOT_CARDS: 'SET_BOT_CARDS',
    SET_ACTIVE_BOT_CARD: 'SET_ACTIVE_BOT_CARD',
    SET_ACTIVE_USER_CARD: 'SET_ACTIVE_USER_CARD',
    UPDATE_USER_SCORE: 'UPDATE_USER_SCORE',
    UPDATE_BOT_SCORE: 'UPDATE_BOT_SCORE',
    DELETE_SCORES: 'DELETE_SCORES',
    PASS_TURN: 'PASS_TURN',
    START_TURN: 'START_TURN',
    END_GAME: 'END_GAME'
};

export interface State {
    botCards: Card[];
    userCards: Card[];
    activeBotCard: Card;
    activeUserCard: Card;
    botScore: number;
    userScore: number;
    isFightingTurn: boolean;
    isFinished: boolean;
}

@injectable()
export class GameStore extends StoreModule<State> {
    public static id = 'game';

    constructor(@inject(IRandomizerHelperId) private randomizerHelper: IRandomizerHelper,
                @inject(ICloneHelperId) private cloneHelper: ICloneHelper) {
        super();
    }

    public state = (): State => ({
        botCards: null,
        userCards: null,
        activeBotCard: null,
        activeUserCard: null,
        botScore: 0,
        userScore: 0,
        isFightingTurn: false,
        isFinished: false
    })

    public getters: GetterTree<State, RootState> = {};
    public actions: ActionTree<State, RootState> = {
        initGame: ({ commit, rootState }): void => {
            // Get the 3 best cards
            const userCards = this.cloneHelper.deep(rootState.cards.list).sort((a, b) => b.power - a.power).splice(0, 3);
            const botCards = [
                this.randomizerHelper.card(rootState.avatars.faceParts),
                this.randomizerHelper.card(rootState.avatars.faceParts),
                this.randomizerHelper.card(rootState.avatars.faceParts)
            ];

            commit(types.SET_USER_CARDS, userCards);
            commit(types.SET_BOT_CARDS, botCards);
            commit(types.DELETE_SCORES);
        },
        selectBotCard: ({ commit }, card: Card): void => {
            commit(types.SET_ACTIVE_BOT_CARD, card);
        },
        selectUserCard: ({ commit }, card: Card): void => {
            commit(types.SET_ACTIVE_USER_CARD, card);
        },
        compareCards: ({ commit, state }): void => {
            commit(types.START_TURN);

            const botHP = state.activeBotCard.hp - state.activeUserCard.power;
            const userHP = state.activeUserCard.hp - state.activeBotCard.power;

            if (botHP <= 0) {
                commit(types.UPDATE_USER_SCORE, 1);
            }

            if (userHP <= 0) {
                commit(types.UPDATE_BOT_SCORE, 1);
            }

            // If draw both have +1

            const bi = state.botCards.findIndex(x => x.id === state.activeBotCard.id);
            const ui = state.userCards.findIndex(x => x.id === state.activeUserCard.id);

            setTimeout(() => {
                commit(types.PASS_TURN, { botIndex: bi, userIndex: ui});
                if (state.userCards.length === 0) {
                    commit(types.END_GAME);
                }
            }, 2000);
        }
    };

    public mutations: MutationTree<State> = {
        [types.SET_USER_CARDS](state, userCards: Card[]): void {
            state.userCards = userCards;
        },
        [types.SET_BOT_CARDS](state, botCards: Card[]): void {
            state.botCards = botCards;
        },
        [types.SET_ACTIVE_BOT_CARD](state, card: Card): void {
            state.activeBotCard = card;
        },
        [types.SET_ACTIVE_USER_CARD](state, card: Card): void {
            state.activeUserCard = card;
        },
        [types.UPDATE_BOT_SCORE](state, scoreToAdd: number): void {
            state.botScore += scoreToAdd;
        },
        [types.UPDATE_USER_SCORE](state, scoreToAdd: number): void {
            state.userScore += scoreToAdd;
        },
        [types.DELETE_SCORES](state): void {
            state.userScore = 0;
            state.botScore = 0;
            state.isFightingTurn = false;
        },
        [types.PASS_TURN](state, { bi, ui }): void {
            state.userCards.splice(ui, 1);
            state.botCards.splice(bi, 1);
            state.isFightingTurn = false;
            state.activeBotCard = null;
            state.activeUserCard = null;
        },
        [types.START_TURN](state): void {
            state.isFightingTurn = true;
        },
        [types.END_GAME](state): void {
            state.isFinished = true;
        }
    };
}