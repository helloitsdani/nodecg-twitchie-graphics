/* global nodecg, NodeCG, moment, Polymer */

const timer = nodecg.Replicant('timer', 'nodecg-twitchie')

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

class TwitchieTimer extends Polymer.Element {
  static get is() {
    return 'twitchie-timer'
  }

  static get properties() {
    return {
      minutes: {
        type: Number,
        value: 10,
      },
      seconds: {
        type: Number,
        value: 0,
      },
    }
  }

  clearTimer() {
    timer.value = null
  }

  startTimer() {
    const newTimer = moment()
    newTimer.add(this.minutes, 'minutes')
    newTimer.add(this.seconds, 'seconds')
    timer.value = newTimer.utc()
  }

  createCountdownTicker(target) {
    const targetMoment = moment.utc(target)
    this.$.target.innerHTML = targetMoment.local().format('LTS, on LL')

    return () => {
      const now = moment.utc()
      const diff = targetMoment.diff(now)

      this.$.countdown.innerHTML = getCountdownText(diff)
    }
  }

  startCountdownTo(target) {
    const tick = this.createCountdownTicker(target)
    tick()

    return setInterval(
      tick,
      1 * 1000,
    )
  }

  async ready() {
    super.ready()
    await NodeCG.waitForReplicants(timer)

    timer.on(
      'change',
      (newVal) => {
        this.$.pages.selected = newVal
          ? 'manage'
          : 'create'
      }
    )

    timer.on(
      'change',
      (newVal) => {
        if (newVal) {
          this.tickTimeout = this.startCountdownTo(newVal)
        } else {
          clearTimeout(this.tickTimeout)
        }
      }
    )
  }
}

customElements.define(TwitchieTimer.is, TwitchieTimer)
