import{s as t,r as e,$ as s}from"./9e53947f.js";import{U as o}from"./34f22a45.js";class i extends t{static get tag(){return"location-from-ip"}constructor(){super(),this.UserIpInstance=new o,this.locationEndpoint="https://freegeoip.app/json/",this.long=null,this.lat=null}static get properties(){return{lat:{type:Number,reflect:!0},long:{type:Number,reflect:!0}}}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),this.getGEOIPData()}async getGEOIPData(){const t=new o,e=await t.updateUserIP();return fetch(this.locationEndpoint+e.ip).then((t=>!!t.ok&&t.json())).then((t=>(console.log(t),this.lat=t.latitude,this.long=t.longitude,console.log(`${this.lat} ${this.long}`),t)))}static get styles(){return[e`:host{display:block}iframe{height:500px;width:500px}`]}render(){const t=`https://maps.google.com/maps?q=${this.lat},${this.long}&t=&z=15&ie=UTF8&iwloc=&output=embed`;return s`<iframe title="Where you are" src="${t}"></iframe> `}}customElements.define(i.tag,i);