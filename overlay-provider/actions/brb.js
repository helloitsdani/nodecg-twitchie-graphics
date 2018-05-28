const BRB_UPDATE = 'brb/UPDATE'

const updateBRB = (away, message, timer) => ({
  type: BRB_UPDATE,
  payload: {
    away,
    message,
    timer,
  },
})

export {
  BRB_UPDATE,
  updateBRB,
}
