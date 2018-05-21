import { injectable } from 'inversify';

export interface ICloneHelper {
    deep(object: any): any;
}

@injectable()
export class CloneHelper implements CloneHelper {
    deep(object: any): any {
        try {
            return JSON.parse(JSON.stringify(object));
        } catch (e) {
            throw 'Cannot clone the object.';
        }
    }
}

export const ICloneHelperId = Symbol('ICloneHelper');