/* global NodeCG */

import * as Polymer from '@polymer/polymer'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'
import '@polymer/iron-pages/iron-pages'
import '@polymer/paper-button/paper-button'
import '@polymer/paper-checkbox/paper-checkbox'
import '@polymer/paper-input/paper-input'
import moment from 'moment'

import './twitchie-countdown'

import '../twitchie-style/twitchie-style'

const timer = NodeCG.Replicant('graphics.timer', 'nodecg-twitchie')
const brb = NodeCG.Replicant('graphics.brb', 'nodecg-twitchie', { persistent: true })

const clearBrb = () => {
  const { message } = brb.value

  brb.value = {
    isAway: false,
    message,
  }
}

class TwitchieTimer extends Polymer.PolymerElement {
  static get template() {
    return Polymer.html`
    <style include="twitchie-style"></style>

    <iron-pages id="pages" selected="create" attr-for-selected="name">
      <section name="create">
        <div class="c-field-group">
          <paper-input label="Minutes" type="number" pattern="[0-9]" allowed-pattern="[0-9]" auto-validate="" min="0" value="{{minutes}}" class="c-field-group__field c-flush-input"></paper-input>

          <paper-input label="Seconds" type="number" pattern="[0-9]" allowed-pattern="[0-9]" auto-validate="" min="0" max="59" value="{{seconds}}" class="c-field-group__field c-flush-input"></paper-input>
        </div>

        <paper-button raised="" on-tap="startTimer">
          <iron-icon icon="icons:alarm-add"></iron-icon>
          Start new timer
        </paper-button>
      </section>

      <section name="manage">
        <twitchie-countdown id="countdown" target="[[timer]]"></twitchie-countdown>

        <div class="c-field-group">
          <paper-checkbox checked="{{clearBrbOnComplete}}">
            Hide BRB screen when timer finishes?
          </paper-checkbox>
        </div>

        <paper-button raised="" on-tap="clearTimer">
          <iron-icon icon="icons:alarm-off"></iron-icon>
          Clear timer
        </paper-button>
      </section>
    </iron-pages>
`
  }

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

  ready() {
    super.ready()

    NodeCG.waitForReplicants(timer).then(() => {
      timer.on('change', newVal => {
        this.timer = newVal
        this.$.pages.selected = newVal ? 'manage' : 'create'
      })

      this.$.countdown.addEventListener('countdown-finished', () => {
        if (this.clearBrbOnComplete) {
          clearBrb()
        }
      })
    })
  }
}

customElements.define(TwitchieTimer.is, TwitchieTimer)
