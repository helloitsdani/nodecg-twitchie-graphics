/* global nodecg, NodeCG, moment */

(async () => {
  const pages = document.getElementById('timer.pages')
  const startButton = document.getElementById('timer.start')
  const cancelButton = document.getElementById('timer.cancel')

  const timer = nodecg.Replicant('timer', 'nodecg-twitchie')
  await NodeCG.waitForReplicants(timer)

  timer.on(
    'change',
    (newVal) => {
      pages.selected = newVal
        ? 'timer.manage'
        : 'timer.create'
    }
  )

  startButton.addEventListener(
    'click',
    () => {
      const newTimer = moment().add(10, 'minutes')
      timer.value = newTimer.unix()
    }
  )

  cancelButton.addEventListener(
    'click',
    () => {
      timer.value = null
    }
  )
})()
