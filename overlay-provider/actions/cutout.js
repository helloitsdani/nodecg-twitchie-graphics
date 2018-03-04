const CUTOUT_UPDATE = 'cutout/UPDATE'

const updateCutout = coords => ({
  type: CUTOUT_UPDATE,
  payload: coords,
})

export {
  CUTOUT_UPDATE,
  updateCutout,
}
