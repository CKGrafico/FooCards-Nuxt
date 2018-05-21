import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { injectable } from 'inversify';
import { RootState } from '~/store';
import { StoreModule } from '~/core';

export const types = {
    SET_USER: 'SET_USER',
    DELETE_USER: 'DELETE_USER',
    UPDATE_COINS: 'UPDATE_COINS'
};

export interface User {
    name: string;
}

export interface State {
    user: User;
    coins: number;
    logged: boolean;
}

@injectable()
export class UsersStore extends StoreModule<State> {
    public static id = 'user';

    public state = (): State => ({
        user: null,
        coins: null,
        logged: false
    })

    public getters: GetterTree<State, RootState> = {};
    public actions: ActionTree<State, RootState> = {
        login: async ({ commit }, { username, password }): Promise<void> => {
            // this.$axios.$post();
            commit(types.SET_USER, { name: username });
            Promise.resolve();
        },
        logout: async ({ commit }): Promise<void> => {
            // this.$axios.$post();
            commit(types.DELETE_USER);
            Promise.resolve();
        },
        payForAvatar: ({ commit }): void => {
            commit(types.UPDATE_COINS, -25);
        },
        buyCoins: ({ commit }): void => {
            commit(types.UPDATE_COINS, 50);
        }
    };

    public mutations: MutationTree<State> = {
        [types.SET_USER](state, user: User): void {
            state.user = user;
            state.coins = 100;
            state.logged = true;
        },
        [types.DELETE_USER](state): void {
            state.user = null;
            state.logged = false;
        },
        [types.UPDATE_COINS](state, coins: number): void {
            state.coins += coins;
        }
    };
}