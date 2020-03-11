import { BRBStatus } from '../../types'

export const BRB_UPDATE = 'brb/UPDATE'

export interface BRBUpdateAction {
  type: typeof BRB_UPDATE
  payload: BRBStatus
}

export type BRBActions = BRBUpdateAction

export const updateBRBAction = (brbStatus: BRBStatus): BRBActions => ({
  type: BRB_UPDATE,
  payload: brbStatus,
})
