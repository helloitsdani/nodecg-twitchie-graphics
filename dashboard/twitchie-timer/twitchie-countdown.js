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
          observer: 'updateTicker',
        },
        finishedText: {
          type: String,
          value: 'Finished!',
        },
      }
    }

    tick() {
      const now = moment.utc()
      const diff = this.targetMoment.diff(now)

      if (diff <= 0) {
        clearTimeout(this.tickTimer)
        this.isFinished = true

        this.countdownText = this.finishedText

        this.dispatchEvent(
          new CustomEvent('countdown-finished')
        )
      } else {
        const diffMoment = moment.utc(diff)

        this.countdownText = diffMoment.format(
          diffMoment.hours() > 0
            ? 'H:mm:ss'
            : 'm:ss'
        )
      }
    }

    updateTicker(newTarget) {
      clearTimeout(this.tickTimer)
      this.isFinished = false

      if (!newTarget) {
        return
      }

      this.targetMoment = moment.utc(newTarget)
      this.targetText = this.targetMoment.local().format('LTS, on LL')

      this.tick()

      if (this.isFinished) {
        return
      }

      this.tickTimer = setInterval(
        () => this.tick(),
        1 * 1000,
      )

      this.dispatchEvent(
        new CustomEvent('countdown-started')
      )
    }
  }

  customElements.define(TwitchieCountdown.is, TwitchieCountdown)
})()
