import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { injectable } from 'inversify';
import { RootState } from '~/store';
import { StoreModule } from '~/core';
import { Avatar } from '~/store/modules/avatars';

export const types = {
    ADD_CARD: 'ADD_CARD'
};

export interface Card {
    avatar: Avatar;
    hp: number;
    power: number;
}

export interface State {
    list: Card[];
}

@injectable()
export class CardsStore extends StoreModule<State> {
    public static id = 'cards';

    public state = (): State => ({
        list: []
    })

    public getters: GetterTree<State, RootState> = {};
    public actions: ActionTree<State, RootState> = {
        addCard: ({ commit }, card: Card): void => {
            commit(types.ADD_CARD, card);
        }
    };

    public mutations: MutationTree<State> = {
        [types.ADD_CARD](state, card: Card): void {
            state.list.push(card);
        }
    };
}