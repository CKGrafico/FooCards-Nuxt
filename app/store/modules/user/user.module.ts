import { ActionTree, MutationTree, GetterTree } from 'vuex';
import { injectable } from 'inversify';
import { RootState } from '~/store';
import { StoreModule } from '~/core';

export const types = {
    SET_USER: 'SET_USER'
};

export interface User {
    name: string;
}

export interface State {
    user: User;
}

@injectable()
export class UsersStore extends StoreModule<State> {
    public static id = 'user';

    public state = (): State => ({
        user: null
    })

    public getters: GetterTree<State, RootState> = {};
    public actions: ActionTree<State, RootState> = {
        login: async ({ commit }, { username, password }): Promise<void> => {
            // this.$axios.$post();
            commit(types.SET_USER, { name: username });
            Promise.resolve();
        }
    };

    public mutations: MutationTree<State> = {
        [types.SET_USER](state, user: User): void {
            state.user = user;
        }
    };
}