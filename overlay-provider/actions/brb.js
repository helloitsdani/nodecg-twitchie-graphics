const BRB_UPDATE = 'brb/UPDATE'

const updateBRB = (away, message) => ({
  type: BRB_UPDATE,
  payload: {
    away,
    message,
  },
})

export {
  BRB_UPDATE,
  updateBRB,
}
