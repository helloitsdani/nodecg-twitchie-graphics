import * as Polymer from '@polymer/polymer'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-list/iron-list'
import '@polymer/paper-icon-button/paper-icon-button'
import '@polymer/paper-button/paper-button'
import '@polymer/paper-checkbox/paper-checkbox'
import '@polymer/paper-input/paper-input'

import '../twitchie-style/twitchie-style'

const accounts = nodecg.Replicant('graphics.social', 'nodecg-twitchie', {
  defaultValue: [],
  persistent: true,
})

class TwitchieSocialMediaEditor extends Polymer.PolymerElement {
  static get template() {
    return Polymer.html`
    <style include="twitchie-style"></style>

    <style>
      .c-account-list {
        max-height: 10em;
        border-bottom: 1px solid #ccc;
        margin: 0 auto 1rem;
      }

      .c-account-list__account {
        padding: 0.5rem 0;
        border-bottom: 1px solid #ccc;
        font-size: 0.8em;
      }

      .c-account-list__account:last-child {
        border-bottom: none;
      }

      .c-account-list-field {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    </style>

    <h4>Accounts</h4>

    <iron-list class="c-account-list" items="[[accounts]]" as="account">
      <template>
        <div class="c-account-list__account">
          <div class="c-account-list-field">
            <span>
              <h5>
                {{account.service}}
              </h5>

              {{account.username}}
            </span>

            <paper-icon-button icon="icons:remove-circle-outline" on-tap="removeAccount"></paper-icon-button>
          </div>
        </div>
      </template>
    </iron-list>

    <h4>Add new account</h4>

    <div class="c-field-group">
      <paper-input label="Service" value="{{newService}}" class="c-field-group__field c-flush-input"></paper-input>

      <paper-input label="Username" value="{{newUsername}}" class="c-field-group__field c-flush-input"></paper-input>
    </div>

    <paper-button raised="" on-tap="addAccount">
      <iron-icon icon="icons:add"></iron-icon>
      Add account
    </paper-button>
`
  }

  static get is() {
    return 'twitchie-social-media-editor'
  }

  static get properties() {
    return {
      accounts: {
        type: Array,
        value: [],
      },
      newService: {
        type: String,
      },
      newUsername: {
        type: String,
      },
    }
  }

  updateAccounts(newAccounts) {
    accounts.value = newAccounts.sort((a, b) => {
      const serviceOrder = a.service.localeCompare(b.service)

      return serviceOrder === 0 ? a.username.localeCompare(b.username) : serviceOrder
    })

    this.newService = ''
    this.newUsername = ''
  }

  removeAccount(event) {
    const accountToRemove = event.model.get('account')

    this.updateAccounts(
      this.accounts.filter(account => {
        const isSameService = account.service === accountToRemove.service
        const isSameUser = account.username === accountToRemove.username

        return !(isSameService && isSameUser)
      })
    )
  }

  addAccount() {
    this.updateAccounts([
      ...this.accounts,
      {
        service: this.newService,
        username: this.newUsername,
      },
    ])
  }

  ready() {
    super.ready()

    NodeCG.waitForReplicants(accounts).then(() => {
      accounts.on('change', newAccounts => {
        this.accounts = newAccounts
      })
    })
  }
}

customElements.define(TwitchieSocialMediaEditor.is, TwitchieSocialMediaEditor)
