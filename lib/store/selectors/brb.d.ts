import { OverlayState } from '../reducers';
declare const getBRB: (state: OverlayState) => import("../..").BRBStatus;
declare const isAway: (state: OverlayState) => boolean;
declare const getMessage: (state: OverlayState) => string | undefined;
export { getBRB, isAway, getMessage };
