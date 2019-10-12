/* global nodecg, NodeCG, moment, Polymer */

;(() => {
  const timer = nodecg.Replicant('graphics.timer', 'nodecg-twitchie')
  const brb = nodecg.Replicant('graphics.brb', 'nodecg-twitchie', { persistent: true })

  const clearBrb = () => {
    const { message } = brb.value

    brb.value = {
      isAway: false,
      message,
    }
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
        clearBrbOnComplete: {
          type: Boolean,
          value: true,
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

    async ready() {
      super.ready()
      await NodeCG.waitForReplicants(timer)

      timer.on('change', newVal => {
        this.timer = newVal
        this.$.pages.selected = newVal ? 'manage' : 'create'
      })

      this.$.countdown.addEventListener('countdown-finished', () => {
        if (this.clearBrbOnComplete) {
          clearBrb()
        }
      })
    }
  }

  customElements.define(TwitchieTimer.is, TwitchieTimer)
})()
