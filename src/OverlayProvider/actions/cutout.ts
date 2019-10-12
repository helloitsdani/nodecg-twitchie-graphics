import { Cutout } from '../../types'

export const CUTOUT_UPDATE = 'cutout/UPDATE'

export interface UpdateCutoutAction {
  type: typeof CUTOUT_UPDATE
  payload: Cutout
}

export type CutoutActions = UpdateCutoutAction

export const updateCutoutAction = (coords: Cutout): CutoutActions => ({
  type: CUTOUT_UPDATE,
  payload: coords,
})
