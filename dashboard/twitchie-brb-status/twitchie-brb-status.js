/* global nodecg, NodeCG, moment, Polymer */

(() => {
  const brb = nodecg.Replicant('brb', 'nodecg-twitchie')

  class TwitchieBRBStatus extends Polymer.Element {
    static get is() {
      return 'twitchie-brb-status'
    }

    static get properties() {
      return {
        isAway: {
          type: Boolean,
          value: false,
        },
        message: {
          type: String,
          value: '',
        },
      }
    }

    update() {
      brb.value = {
        away: this.isAway,
        message: this.message,
      }
    }

    async ready() {
      super.ready()
      await NodeCG.waitForReplicants(brb)

      brb.on(
        'change',
        (newVal) => {
          this.isAway = newVal.away
          this.message = newVal.message
        }
      )
    }
  }

  customElements.define(TwitchieBRBStatus.is, TwitchieBRBStatus)
})()
