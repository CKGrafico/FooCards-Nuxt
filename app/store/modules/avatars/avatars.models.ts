export interface AvatarsFace {
    eyes: string[];
    nose: string[];
    mouth: string[];
}

export interface Avatar {
    eyes: string;
    nose: string;
    mouth: string;
    color: string;
}

export interface State {
    faceParts: AvatarsFace;
}