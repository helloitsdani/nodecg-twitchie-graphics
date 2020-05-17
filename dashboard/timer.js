!function(e){function t(t){for(var n,a,o=t[0],c=t[1],u=t[2],j=0,d=[];j<o.length;j++)a=o[j],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,u||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],n=!0,o=1;o<s.length;o++){var c=s[o];0!==r[c]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=s[0]))}return e}var n={},r={4:0},i=[];function a(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=n,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(s,n,function(t){return e[t]}.bind(null,n));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var o=window.webpackJsonp=window.webpackJsonp||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([184,1,0]),s()}({182:function(e,t,s){var n={"./af":53,"./af.js":53,"./ar":54,"./ar-dz":55,"./ar-dz.js":55,"./ar-kw":56,"./ar-kw.js":56,"./ar-ly":57,"./ar-ly.js":57,"./ar-ma":58,"./ar-ma.js":58,"./ar-sa":59,"./ar-sa.js":59,"./ar-tn":60,"./ar-tn.js":60,"./ar.js":54,"./az":61,"./az.js":61,"./be":62,"./be.js":62,"./bg":63,"./bg.js":63,"./bm":64,"./bm.js":64,"./bn":65,"./bn.js":65,"./bo":66,"./bo.js":66,"./br":67,"./br.js":67,"./bs":68,"./bs.js":68,"./ca":69,"./ca.js":69,"./cs":70,"./cs.js":70,"./cv":71,"./cv.js":71,"./cy":72,"./cy.js":72,"./da":73,"./da.js":73,"./de":74,"./de-at":75,"./de-at.js":75,"./de-ch":76,"./de-ch.js":76,"./de.js":74,"./dv":77,"./dv.js":77,"./el":78,"./el.js":78,"./en-SG":79,"./en-SG.js":79,"./en-au":80,"./en-au.js":80,"./en-ca":81,"./en-ca.js":81,"./en-gb":82,"./en-gb.js":82,"./en-ie":83,"./en-ie.js":83,"./en-il":84,"./en-il.js":84,"./en-nz":85,"./en-nz.js":85,"./eo":86,"./eo.js":86,"./es":87,"./es-do":88,"./es-do.js":88,"./es-us":89,"./es-us.js":89,"./es.js":87,"./et":90,"./et.js":90,"./eu":91,"./eu.js":91,"./fa":92,"./fa.js":92,"./fi":93,"./fi.js":93,"./fo":94,"./fo.js":94,"./fr":95,"./fr-ca":96,"./fr-ca.js":96,"./fr-ch":97,"./fr-ch.js":97,"./fr.js":95,"./fy":98,"./fy.js":98,"./ga":99,"./ga.js":99,"./gd":100,"./gd.js":100,"./gl":101,"./gl.js":101,"./gom-latn":102,"./gom-latn.js":102,"./gu":103,"./gu.js":103,"./he":104,"./he.js":104,"./hi":105,"./hi.js":105,"./hr":106,"./hr.js":106,"./hu":107,"./hu.js":107,"./hy-am":108,"./hy-am.js":108,"./id":109,"./id.js":109,"./is":110,"./is.js":110,"./it":111,"./it-ch":112,"./it-ch.js":112,"./it.js":111,"./ja":113,"./ja.js":113,"./jv":114,"./jv.js":114,"./ka":115,"./ka.js":115,"./kk":116,"./kk.js":116,"./km":117,"./km.js":117,"./kn":118,"./kn.js":118,"./ko":119,"./ko.js":119,"./ku":120,"./ku.js":120,"./ky":121,"./ky.js":121,"./lb":122,"./lb.js":122,"./lo":123,"./lo.js":123,"./lt":124,"./lt.js":124,"./lv":125,"./lv.js":125,"./me":126,"./me.js":126,"./mi":127,"./mi.js":127,"./mk":128,"./mk.js":128,"./ml":129,"./ml.js":129,"./mn":130,"./mn.js":130,"./mr":131,"./mr.js":131,"./ms":132,"./ms-my":133,"./ms-my.js":133,"./ms.js":132,"./mt":134,"./mt.js":134,"./my":135,"./my.js":135,"./nb":136,"./nb.js":136,"./ne":137,"./ne.js":137,"./nl":138,"./nl-be":139,"./nl-be.js":139,"./nl.js":138,"./nn":140,"./nn.js":140,"./pa-in":141,"./pa-in.js":141,"./pl":142,"./pl.js":142,"./pt":143,"./pt-br":144,"./pt-br.js":144,"./pt.js":143,"./ro":145,"./ro.js":145,"./ru":146,"./ru.js":146,"./sd":147,"./sd.js":147,"./se":148,"./se.js":148,"./si":149,"./si.js":149,"./sk":150,"./sk.js":150,"./sl":151,"./sl.js":151,"./sq":152,"./sq.js":152,"./sr":153,"./sr-cyrl":154,"./sr-cyrl.js":154,"./sr.js":153,"./ss":155,"./ss.js":155,"./sv":156,"./sv.js":156,"./sw":157,"./sw.js":157,"./ta":158,"./ta.js":158,"./te":159,"./te.js":159,"./tet":160,"./tet.js":160,"./tg":161,"./tg.js":161,"./th":162,"./th.js":162,"./tl-ph":163,"./tl-ph.js":163,"./tlh":164,"./tlh.js":164,"./tr":165,"./tr.js":165,"./tzl":166,"./tzl.js":166,"./tzm":167,"./tzm-latn":168,"./tzm-latn.js":168,"./tzm.js":167,"./ug-cn":169,"./ug-cn.js":169,"./uk":170,"./uk.js":170,"./ur":171,"./ur.js":171,"./uz":172,"./uz-latn":173,"./uz-latn.js":173,"./uz.js":172,"./vi":174,"./vi.js":174,"./x-pseudo":175,"./x-pseudo.js":175,"./yo":176,"./yo.js":176,"./zh-cn":177,"./zh-cn.js":177,"./zh-hk":178,"./zh-hk.js":178,"./zh-tw":179,"./zh-tw.js":179};function r(e){var t=i(e);return s(t)}function i(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=182},184:function(e,t,s){"use strict";s.r(t);var n=s(11),r=(s(23),s(35),s(185),s(46),s(47),s(45),s(0)),i=s.n(r);s(183),s(36);class a extends n.a{static get template(){return n.b`
    <style include="twitchie-style"></style>

    <style>
      .c-timer-target {
        margin: 0 auto 1rem;
      }

      .c-timer-countdown {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;

        margin: 0 auto 1rem;
        font-size: 2em;
      }

      .c-timer-countdown iron-icon {
        margin: 0 0.5em 0 0;
      }
    </style>

    <div class="c-timer-target">
      The timer has been set for

      <output id="target">
        {{targetText}}
      </output>.
    </div>

    <div class="c-timer-countdown">
      <iron-icon icon="image:timer"></iron-icon>

      <output id="countdown">
        {{countdownText}}
      </output>
    </div>
`}static get is(){return"twitchie-countdown"}static get properties(){return{target:{type:Number,value:0,observer:"updateTicker"},finishedText:{type:String,value:"Finished!"}}}tick(){const e=i.a.utc(),t=this.targetMoment.diff(e);if(t<=0)clearTimeout(this.tickTimer),this.isFinished=!0,this.countdownText=this.finishedText,this.dispatchEvent(new CustomEvent("countdown-finished"));else{const e=i.a.utc(t);this.countdownText=e.format(e.hours()>0?"H:mm:ss":"m:ss")}}updateTicker(e){clearTimeout(this.tickTimer),this.isFinished=!1,e&&(this.targetMoment=i.a.utc(e),this.targetText=this.targetMoment.local().format("LTS, on LL"),this.tick(),this.isFinished||(this.tickTimer=setInterval(()=>this.tick(),1e3),this.dispatchEvent(new CustomEvent("countdown-started"))))}}customElements.define(a.is,a);const o=nodecg.Replicant("graphics.timer","nodecg-twitchie"),c=nodecg.Replicant("graphics.brb","nodecg-twitchie",{persistent:!0});class u extends n.a{static get template(){return n.b`
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
`}static get is(){return"twitchie-timer"}static get properties(){return{minutes:{type:Number,value:10},seconds:{type:Number,value:0},clearBrbOnComplete:{type:Boolean,value:!0}}}clearTimer(){o.value=null}startTimer(){const e=i()();e.add(this.minutes,"minutes"),e.add(this.seconds,"seconds"),o.value=e.utc()}ready(){super.ready(),NodeCG.waitForReplicants(o).then(()=>{o.on("change",e=>{this.timer=e,this.$.pages.selected=e?"manage":"create"}),this.$.countdown.addEventListener("countdown-finished",()=>{this.clearBrbOnComplete&&(()=>{const{message:e}=c.value;c.value={isAway:!1,message:e}})()})})}}customElements.define(u.is,u),document.getElementById("app").innerHTML="\n  <twitchie-timer></twitchie-timer>\n"}});