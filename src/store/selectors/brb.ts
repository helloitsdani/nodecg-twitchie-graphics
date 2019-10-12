import { OverlayState } from '../reducers'

const getBRB = (state: OverlayState) => state.brb

const isAway = (state: OverlayState) => getBRB(state).away

const getMessage = (state: OverlayState) => getBRB(state).message

export { getBRB, isAway, getMessage }
