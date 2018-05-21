import { injectable } from 'inversify';
import { Avatar, AvatarsFace } from '~/store/modules/avatars';
import { Card } from '~/store/modules/cards';

export interface IRandomizerHelper {
    generate(min: number, max: number): number;
    color(): string;
    avatar(faceParts: AvatarsFace): Avatar;
    card(faceParts: AvatarsFace): Card;
}

@injectable()
export class RandomizerHelper implements IRandomizerHelper {
    public generate(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public color(): string {
        // https://www.paulirish.com/2009/random-hex-color-code-snippets/
        return Math.floor(Math.random() * 16777215).toString(16);
    }

    public avatar(faceParts: AvatarsFace): Avatar {
        return {
            eyes: faceParts.eyes[this.generate(0, faceParts.eyes.length - 1)],
            nose: faceParts.nose[this.generate(0, faceParts.nose.length - 1)],
            mouth: faceParts.mouth[this.generate(0, faceParts.mouth.length - 1)],
            color: this.color()
        };
    }

    public card(faceParts: AvatarsFace): Card {
        return {
            avatar: this.avatar(faceParts),
            id: performance.now() + this.generate(1, 100),
            hp: this.generate(30, 150),
            power: this.generate(50, 350)
        };
    }
}

export const IRandomizerHelperId = Symbol('IRandomizerHelper');