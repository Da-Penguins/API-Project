import{s as t,r as i,$ as s}from"./aa05e036.js";class e extends t{static get tag(){return"user-ip"}constructor(){super(),this.ip=null,this.location="Computing the Location...",this.city="Computing the City...",this.country="Computing the Country...",this.ipLookUp="https://ip-fast.com/api/ip/?format=json&location=True"}static get properties(){return{ip:{type:String,reflect:!0},country:{type:String,reflect:!0},city:{type:String,reflect:!0},location:{type:String,reflect:!0}}}updated(t){t.forEach(((t,i)=>{if("ip"===i&&this[i]){const t=new CustomEvent("ip-changed",{bubbles:!0,composed:!0,cancelable:!0,detail:{value:this.ip}});this.dispatchEvent(t)}}))}firstUpdated(t){super.firstUpdated&&super.firstUpdated(t),null===this.ip&&this.updateUserIP()}async updateUserIP(){return fetch(this.ipLookUp).then((t=>!!t.ok&&t.json())).then((t=>(this.ip=t.ip,this.country=`${t.country}`,this.city=`${t.city}`,this.location=`${t.city}, ${t.country}`,t)))}static get styles(){return[i`:host{display:block}ul{margin:0 8px;list-style-type:square;font-size:20px}li{margin:0;padding:0}.ipaddress{font-style:var(--user-ip-ipaddress-font-style,italic)}`]}render(){return s` <p> IP Address: ${this.ip} -- Location: ${this.location} -- City: ${this.city} -- Country: ${this.country} </p> <p></p> <ul> <li><strong class="ipaddress">IP Address:</strong> ${this.ip}</li> <li><strong class="location">Location:</strong> ${this.location}</li> <li><strong class="city">City:</strong> ${this.city}</li> <li><strong class="country">Country:</strong> ${this.country}</li> </ul>`}}customElements.define(e.tag,e);export{e as U};
