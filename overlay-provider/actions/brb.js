const updateBRB = (away, message) => ({
  type: 'BRB_UPDATE',
  payload: {
    away,
    message,
  },
})

export {
  updateBRB,
}
