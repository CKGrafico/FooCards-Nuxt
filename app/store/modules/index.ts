import * as rootModule from './root';
import * as settingsModule from './settings';
import * as userModule from './user';
import * as avatarsModule from './avatars';
import * as cardsModule from './cards';

export {
    rootModule,
    settingsModule,
    userModule,
    avatarsModule,
    cardsModule
};

export interface ModulesStates {
    settings: settingsModule.State;
    user: userModule.State;
    avatars: avatarsModule.State;
    cards: cardsModule.State;
}

export type RootState = rootModule.State & ModulesStates;