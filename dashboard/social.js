!function(e){function t(t){for(var c,i,a=t[0],s=t[1],u=t[2],p=0,d=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);for(l&&l(t);d.length;)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={3:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;o.push([187,1,0]),n()}({187:function(e,t,n){"use strict";n.r(t);var c=n(11);n(23),n(35),n(188),n(180),n(46),n(47),n(45),n(36);const r=nodecg.Replicant("graphics.social","nodecg-twitchie",{defaultValue:[],persistent:!0});class o extends c.a{static get template(){return c.b`
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
`}static get is(){return"twitchie-social-media-editor"}static get properties(){return{accounts:{type:Array,value:[]},newService:{type:String},newUsername:{type:String}}}updateAccounts(e){r.value=e.sort((e,t)=>{const n=e.service.localeCompare(t.service);return 0===n?e.username.localeCompare(t.username):n}),this.newService="",this.newUsername=""}removeAccount(e){const t=e.model.get("account");this.updateAccounts(this.accounts.filter(e=>{const n=e.service===t.service,c=e.username===t.username;return!(n&&c)}))}addAccount(){this.updateAccounts([...this.accounts,{service:this.newService,username:this.newUsername}])}ready(){super.ready(),NodeCG.waitForReplicants(r).then(()=>{r.on("change",e=>{this.accounts=e})})}}customElements.define(o.is,o),document.getElementById("app").innerHTML="\n  <twitchie-social-media-editor></twitchie-social-media-editor>\n"}});