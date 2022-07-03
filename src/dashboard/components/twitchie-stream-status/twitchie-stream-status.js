/* global NodeCG */

import * as Polymer from '@polymer/polymer'
import '@polymer/paper-input/paper-input'

import '../twitchie-style/twitchie-style'

import './twitchie-away-status'

const streamStatus = NodeCG.Replicant('stream.status', 'nodecg-twitchie')

class TwitchieStreamStatus extends Polymer.PolymerElement {
  static get template() {
    return Polymer.html`
    <style include="twitchie-style"></style>

    <div class="c-field-group">
      <paper-input class="c-field-group__field c-flush-input" label="Stream status" value="{{streamStatus}}"></paper-input>
    </div>

    <hr class="c-field-group" />

    <twitchie-away-status></twitchie-away-status>
`
  }

  static get is() {
    return 'twitchie-stream-status'
  }

  static get properties() {
    return {
      streamStatus: {
        type: String,
      },
    }
  }

  _onStreamStatusUpdate(newStreamStatus) {
    streamStatus.value = newStreamStatus
  }

  ready() {
    super.ready()

    NodeCG.waitForReplicants(streamStatus).then(() => {
      streamStatus.on('change', (newId) => {
        this.streamStatus = newId
      })

      this._createPropertyObserver('streamStatus', this._onStreamStatusUpdate)
    })
  }
}

customElements.define(TwitchieStreamStatus.is, TwitchieStreamStatus)
