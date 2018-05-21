import * as rootModule from './root';
import * as settingsModule from './settings';
import * as userModule from './user';
import * as avatarsModule from './avatars';
import * as cardsModule from './cards';
import * as gameModule from './game';

export {
    rootModule,
    settingsModule,
    userModule,
    avatarsModule,
    cardsModule,
    gameModule
};

export interface ModulesStates {
    settings: settingsModule.State;
    user: userModule.State;
    avatars: avatarsModule.State;
    cards: cardsModule.State;
    game: gameModule.State;
}

export type RootState = rootModule.State & ModulesStates;