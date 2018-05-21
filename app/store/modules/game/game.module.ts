import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { injectable, inject } from 'inversify';
import { RootState } from '~/store';
import { StoreModule } from '~/core';
import { IRandomizerHelper, IRandomizerHelperId, ICloneHelperId, ICloneHelper } from '~/helpers';
import { Card } from '~/store/modules/cards';

export const types = {
    SET_USER_CARDS: 'SET_USER_CARDS',
    SET_BOT_CARDS: 'SET_BOT_CARDS'
};

export interface State {
    botCards: Card[];
    userCards: Card[];
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
        userCards: null
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
        }
    };

    public mutations: MutationTree<State> = {
        [types.SET_USER_CARDS](state, userCards: Card[]): void {
            state.userCards = userCards;
        },
        [types.SET_BOT_CARDS](state, botCards: Card[]): void {
            state.botCards = botCards;
        }
    };
}