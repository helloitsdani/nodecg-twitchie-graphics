/* global nodecg, NodeCG, moment, Polymer */

(() => {
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
        finishedText: {
          type: String,
          value: 'Finished!',
        },
      }
    }

    getCountdownText(diff) {
      if (diff <= 0) {
        return this.finishedText
      }

      const diffMoment = moment.utc(diff)

      return diffMoment.format(
        diffMoment.hours() > 0
          ? 'H:mm:ss'
          : 'm:ss'
      )
    }

    tick() {
      const now = moment.utc()
      const diff = this.targetMoment.diff(now)
      this.countdownText = this.getCountdownText(diff)
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
})()
