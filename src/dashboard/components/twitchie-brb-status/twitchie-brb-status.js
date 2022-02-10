/* global NodeCG */

import * as Polymer from '@polymer/polymer'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import '@polymer/paper-button/paper-button'
import '@polymer/paper-checkbox/paper-checkbox'
import '@polymer/paper-input/paper-input'

import '../twitchie-style/twitchie-style'

const brb = NodeCG.Replicant('graphics.brb', 'nodecg-twitchie', { persistent: true })

class TwitchieBRBStatus extends Polymer.PolymerElement {
  static get template() {
    return Polymer.html`
    <style include="twitchie-style"></style>

    <div class="c-field-group">
      <paper-checkbox checked="{{isAway}}">
        Show BRB screen?
      </paper-checkbox>
    </div>

    <div class="c-field-group">
      <paper-input class="c-field-group__field c-flush-input" label="Message" value="{{message}}"></paper-input>
    </div>

    <paper-button raised="" on-tap="update">
      <iron-icon icon="icons:done"></iron-icon>
      Update
    </paper-button>
`
  }

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

  ready() {
    super.ready()

    NodeCG.waitForReplicants(brb).then(() => {
      brb.on('change', newVal => {
        this.isAway = newVal.away
        this.message = newVal.message
      })
    })
  }
}

customElements.define(TwitchieBRBStatus.is, TwitchieBRBStatus)
