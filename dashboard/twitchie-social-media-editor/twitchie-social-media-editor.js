/* global nodecg, NodeCG, Polymer */

;(() => {
  const accounts = nodecg.Replicant('graphics.social', 'nodecg-twitchie', {
    defaultValue: [],
    persistent: true,
  })

  class TwitchieSocialMediaEditor extends Polymer.Element {
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

    async ready() {
      super.ready()
      await NodeCG.waitForReplicants(accounts)

      accounts.on('change', newAccounts => {
        this.accounts = newAccounts
      })
    }
  }

  customElements.define(TwitchieSocialMediaEditor.is, TwitchieSocialMediaEditor)
})()
