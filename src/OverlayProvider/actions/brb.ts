import { BRBStatus } from '../../types'

const BRB_UPDATE = 'brb/UPDATE'

interface BRBUpdateAction {
  type: typeof BRB_UPDATE
  payload: BRBStatus
}

type BRBActions = BRBUpdateAction

const updateBRB = (brbStatus: BRBStatus): BRBActions => ({
  type: BRB_UPDATE,
  payload: brbStatus,
})

export { BRB_UPDATE, updateBRB, BRBActions }
