/* global nodecg */

(function () {
  const state = document.getElementById('brb.away')
  const message = document.getElementById('brb.message')
  const updateButton = document.getElementById('brb.update')

  const brb = nodecg.Replicant('brb', 'nodecg-twitchie')

  brb.on(
    'change',
    (newVal) => {
      state.checked = newVal.away
      message.value = newVal.message
    }
  )

  updateButton.addEventListener(
    'click',
    () => {
      brb.value = {
        away: state.checked,
        message: message.value
      }
    }
  )
}())
