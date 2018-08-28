/* global nodecg, NodeCG, moment */

(async () => {
  const pages = document.getElementById('timer.pages')

  const inputs = {
    minutes: document.getElementById('timer.minutes'),
    seconds: document.getElementById('timer.seconds'),
  }

  const elements = {
    startButton: document.getElementById('timer.start'),
    clearButton: document.getElementById('timer.clear'),
    countdown: document.getElementById('timer.countdown'),
    target: document.getElementById('timer.target'),
  }

  const timer = nodecg.Replicant('timer', 'nodecg-twitchie')
  await NodeCG.waitForReplicants(timer)

  let tickTimeout

  const getCountdownText = (diff) => {
    if (diff <= 0) {
      return 'Finished!'
    }

    const diffMoment = moment.utc(diff)

    return diffMoment.format(
      diffMoment.hours() > 0
        ? 'H:mm:ss'
        : 'm:ss'
    )
  }

  const createCountdownTicket = (target) => {
    const targetMoment = moment.utc(target)
    elements.target.innerHTML = targetMoment.local().format('LTS, on LL')

    return () => {
      const now = moment.utc()
      const diff = targetMoment.diff(now)

      elements.countdown.innerHTML = getCountdownText(diff)
    }
  }

  const startCountdownTo = (target) => {
    const tick = createCountdownTicket(target)
    tick()

    return setInterval(
      tick,
      1 * 1000,
    )
  }

  timer.on(
    'change',
    (newVal) => {
      pages.selected = newVal
        ? 'timer.manage'
        : 'timer.create'
    }
  )

  timer.on(
    'change',
    (newVal) => {
      if (newVal) {
        tickTimeout = startCountdownTo(newVal)
      } else {
        clearTimeout(tickTimeout)
      }
    }
  )

  elements.startButton.addEventListener(
    'click',
    () => {
      const newTimer = moment()
      newTimer.add(inputs.minutes.value, 'minutes')
      newTimer.add(inputs.seconds.value, 'seconds')
      timer.value = newTimer.utc()
    }
  )

  elements.clearButton.addEventListener(
    'click',
    () => {
      timer.value = null
    }
  )
})()
