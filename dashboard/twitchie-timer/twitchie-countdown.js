/* global nodecg, NodeCG, moment, Polymer */

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

class TwitchieCountdown extends Polymer.Element {
  static get is() {
    return 'twitchie-countdown'
  }

  static get properties() {
    return {
      target: {
        type: Number,
        value: 0,
        observer: 'updateTimer',
      },
    }
  }

  tick() {
    const now = moment.utc()
    const diff = this.targetMoment.diff(now)
    this.countdownText = getCountdownText(diff)
  }

  updateTimer(newTarget) {
    clearTimeout(this.tickTimer)

    if (!newTarget) {
      return
    }

    this.targetMoment = moment.utc(newTarget)
    this.targetText = this.targetMoment.local().format('LTS, on LL')

    this.tick()
    this.tickTimer = setInterval(
      () => this.tick(),
      1 * 1000,
    )
  }
}

customElements.define(TwitchieCountdown.is, TwitchieCountdown)
