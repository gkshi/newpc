(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{115:function(t,e,o){var content=o(119);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("7d6d83e3",content,!0,{sourceMap:!1})},116:function(t,e,o){var content=o(121);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("1fc1450a",content,!0,{sourceMap:!1})},117:function(t,e,o){var content=o(123);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("9a147a6e",content,!0,{sourceMap:!1})},118:function(t,e,o){"use strict";var n=o(115);o.n(n).a},119:function(t,e,o){(e=o(20)(!1)).push([t.i,".item-component[data-v-003a23c9]{display:block;height:140px}.item-component a[data-v-003a23c9]{height:100%;text-decoration:none}.item-component .icon[data-v-003a23c9]{min-width:80px;height:80px;margin-bottom:10px;background:#f3f4fa;border-radius:50%}.item-component .icon img[data-v-003a23c9]{display:block;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;-o-object-position:center;object-position:center;transition:all .2s ease;-webkit-filter:grayscale(1);filter:grayscale(1);opacity:.6}.item-component .indicator[data-v-003a23c9]{width:10px;height:10px;border-radius:50%;background:#fff;margin-right:8px;margin-top:1px}.item-component .indicator.work[data-v-003a23c9]{background:#f98164}.item-component .indicator.dev[data-v-003a23c9]{background:#78bb68}.item-component .indicator.system[data-v-003a23c9]{background:#b96dd0}.item-component .indicator.personal[data-v-003a23c9]{background:#3998ec}.item-component .indicator.design[data-v-003a23c9]{background:#e272a5}.item-component:hover .icon img[data-v-003a23c9]{-webkit-filter:grayscale(0);filter:grayscale(0);opacity:1}",""]),t.exports=e},120:function(t,e,o){"use strict";var n=o(116);o.n(n).a},121:function(t,e,o){(e=o(20)(!1)).push([t.i,".code-item-component[data-v-284d2f08]{padding:10px}.code-item-component pre[data-v-284d2f08]{display:block;background:#fff}",""]),t.exports=e},122:function(t,e,o){"use strict";var n=o(117);o.n(n).a},123:function(t,e,o){(e=o(20)(!1)).push([t.i,".page.index .items[data-v-0430dfca]{display:grid;grid-gap:20px;grid-template-columns:1fr 1fr 1fr 1fr}.page.index .code-items[data-v-0430dfca]>:not(:last-child),.page.index .items[data-v-0430dfca]:not(:last-child),.page.index section .title[data-v-0430dfca]{margin-bottom:20px}.page.index section[data-v-0430dfca]:not(:last-child){margin-bottom:80px}",""]),t.exports=e},124:function(t,e,o){"use strict";o.r(e);var n=[[{title:"WebStorm IDE",url:"https://www.jetbrains.com/webstorm/",category:"work",image:"icons/webstorm.png"},{title:"WebStorm patcher",url:"https://vk.com/jetlics",category:"work",image:"icons/webstorm.png"},{title:"GitKraken",url:"https://www.gitkraken.com/",category:"work",image:"icons/gitkraken.png"},{title:"GitKraken crack",url:"",category:"work",image:"icons/gitkraken.png"}],[{title:"iTerm",url:"https://iterm2.com/",category:"dev",image:"icons/iterm.png"},{title:"Node.js",url:"https://nodejs.org/en/",category:"dev",image:"icons/nodejs.png"},{title:"Mongo DB Compass",url:"https://www.mongodb.com/products/compass",category:"dev",image:"icons/mongo.png"},{title:"Tor Browser",url:"https://www.torproject.org/",category:"dev",image:"icons/tor.png"}],[{title:"Telegram",url:"https://desktop.telegram.org/",vpn:!0,category:"personal",image:"icons/telegram.png"},{title:"Google Chrome",url:"https://www.google.ru/chrome/",image:"icons/chrome.png",category:"personal"},{title:"Avast passwords",url:"https://www.avast.ru/passwords#mac",category:"personal",image:"icons/avastpasswords.png"},{title:"Notion",url:"https://www.notion.so/",category:"personal",image:"icons/notion.png"}],[{title:"TunnelBlick",url:"https://tunnelblick.net/",category:"system",image:"icons/tunnelblick.png"},{title:"TunnelBlick Config",url:"https://disk.yandex.ru/client/disk/%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8",category:"system",image:"icons/tunnelblick.png"},{title:"Macs Fan Control",url:"https://crystalidea.com/ru/macs-fan-control",category:"system",image:"icons/macsfancontrol.png"}],[{title:"Figma",url:"https://www.figma.com/downloads/",category:"design",image:"icons/figma.png"},{title:"Sketch App",url:"https://rutracker.org/forum/tracker.php?f=1370&nm=sketch",vpn:!0,category:"design",image:"icons/sketch.png"}]],c={name:"item-component",props:{data:{type:Object,default:()=>({})}}},r=(o(118),o(15)),l=Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item-component"},[e("a",{staticClass:"flex column center",attrs:{href:this.data.url,target:"_blank"}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:this.data.image}})]),e("div",{staticClass:"flex a-center"},[e("div",{staticClass:"indicator",class:this.data.category}),e("div",{staticClass:"title"},[this._v(this._s(this.data.title))])])])])}),[],!1,null,"003a23c9",null).exports,d={name:"code-item-component",props:{data:{type:String,default:""}},methods:{select(){console.log("select")}}},m=(o(120),{components:{softwareItem:l,codeItem:Object(r.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"code-item-component flex column a-start",on:{click:this.select}},[e("div",[this._v(this._s(this.data.title))]),e("pre",[e("code",[this._v(this._s(this.data.text))])])])}),[],!1,null,"284d2f08",null).exports},data:()=>({softwareItems:n,code:[{title:"Yarn install",text:"brew install yarn"},{title:"Terminal aliases",text:'printf "alias dc=\\"docker-compose\\"\\nalias dev=\\"yarn dev\\"" > $HOME/.zshrc'}]})}),f=(o(122),Object(r.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"page index"},[o("div",{staticClass:"wrapper"},[t._m(0),o("section",t._l(t.softwareItems,(function(e,i){return o("div",{key:i,staticClass:"items"},t._l(e,(function(t,i){return o("softwareItem",{key:i,attrs:{data:t}})})),1)})),0),o("section",[o("h2",{staticClass:"title"},[t._v("global packages")]),o("div",{staticClass:"code-items"},t._l(t.code,(function(t,i){return o("codeItem",{key:i,attrs:{data:t}})})),1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("h1",{staticClass:"title"},[this._v("Have a new laptop?")])])}],!1,null,"0430dfca",null));e.default=f.exports}}]);