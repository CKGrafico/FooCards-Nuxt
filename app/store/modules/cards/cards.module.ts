import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { injectable, inject } from 'inversify';
import { RootState } from '~/store';
import { StoreModule } from '~/core';
import { IRandomizerHelper, IRandomizerHelperId } from '~/helpers';
import { Avatar } from '~/store/modules/avatars';

export const types = {
    ADD_CARD: 'ADD_CARD',
    REMOVE_CARD: 'REMOVE_CARD'
};

export interface Card {
    id?: number;
    avatar: Avatar;
    hp?: number;
    power?: number;
}

export interface State {
    list: Card[];
}

@injectable()
export class CardsStore extends StoreModule<State> {
    public static id = 'cards';

    constructor(@inject(IRandomizerHelperId) private randomizerHelper: IRandomizerHelper) {
        super();
    }

    public state = (): State => ({
        list: [
            {
                id: 1,
                avatar: {
                    color: '39b9bd',
                    eyes: 'eyes7',
                    mouth: 'mouth3',
                    nose: 'nose3',
                },
                hp: 100,
                power: 180
            }
        ]
    })

    public getters: GetterTree<State, RootState> = {};
    public actions: ActionTree<State, RootState> = {
        addCard: ({ commit }, card: Card): void => {
            card.id = performance.now();
            card.hp = this.randomizerHelper.generate(50, 200);
            card.power = this.randomizerHelper.generate(100, 500);
            commit(types.ADD_CARD, card);
        },
        removeCard: ({ commit, state }, card: Card): void => {
            const index = state.list.findIndex(x => x.id === card.id);
            commit(types.REMOVE_CARD, index);
        }
    };

    public mutations: MutationTree<State> = {
        [types.ADD_CARD](state, card: Card): void {
            state.list.push(card);
        },
        [types.REMOVE_CARD](state, index: number): void {
            state.list.splice(index, 1);
        }
    };
}