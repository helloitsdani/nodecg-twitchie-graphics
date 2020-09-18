import { Cutout } from '../../types';
export declare const CUTOUT_UPDATE = "cutout/UPDATE";
export interface UpdateCutoutAction {
    type: typeof CUTOUT_UPDATE;
    payload: Cutout;
}
export declare type CutoutActions = UpdateCutoutAction;
export declare const updateCutoutAction: (coords: Cutout) => UpdateCutoutAction;
