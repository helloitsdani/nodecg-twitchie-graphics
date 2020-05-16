import { BRBStatus } from '../../types';
export declare const BRB_UPDATE = "brb/UPDATE";
export interface BRBUpdateAction {
    type: typeof BRB_UPDATE;
    payload: BRBStatus;
}
export declare type BRBActions = BRBUpdateAction;
export declare const updateBRBAction: (brbStatus: BRBStatus) => BRBUpdateAction;
