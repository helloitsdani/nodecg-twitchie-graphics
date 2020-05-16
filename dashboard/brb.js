!function(e){function t(t){for(var n,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(p&&p(t);d.length;)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},i={2:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=c;a.push([186,1,0]),r()}({186:function(e,t,r){"use strict";r.r(t);var n=r(11);r(23),r(35),r(46),r(47),r(45),r(36);const i=nodecg.Replicant("graphics.brb","nodecg-twitchie",{persistent:!0});class a extends n.a{static get template(){return n.b`
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
`}static get is(){return"twitchie-brb-status"}static get properties(){return{isAway:{type:Boolean,value:!1},message:{type:String,value:""}}}update(){i.value={away:this.isAway,message:this.message}}ready(){super.ready(),NodeCG.waitForReplicants(i).then(()=>{i.on("change",e=>{this.isAway=e.away,this.message=e.message})})}}customElements.define(a.is,a),document.getElementById("app").innerHTML="\n  <twitchie-brb-status></twitchie-brb-status>\n"}});