(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{171:function(t,n,o){},172:function(t,n,o){},173:function(t,n,o){"use strict";var s=o(2),e=o(12),c=o(16),r=o(65),a=o(63),l=o(5),i=o(85).f,u=o(84).f,v=o(7).f,f=o(174).trim,p=s.Number,d=p,h=p.prototype,_="Number"==c(o(64)(h)),m="trim"in String.prototype,g=function(t){var n=a(t,!1);if("string"==typeof n&&n.length>2){var o,s,e,c=(n=m?n.trim():f(n,3)).charCodeAt(0);if(43===c||45===c){if(88===(o=n.charCodeAt(2))||120===o)return NaN}else if(48===c){switch(n.charCodeAt(1)){case 66:case 98:s=2,e=49;break;case 79:case 111:s=8,e=55;break;default:return+n}for(var r,l=n.slice(2),i=0,u=l.length;i<u;i++)if((r=l.charCodeAt(i))<48||r>e)return NaN;return parseInt(l,s)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,o=this;return o instanceof p&&(_?l(function(){h.valueOf.call(o)}):"Number"!=c(o))?r(new d(g(n)),o,p):g(n)};for(var w,C=o(6)?i(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;C.length>N;N++)e(d,w=C[N])&&!e(p,w)&&v(p,w,u(d,w));p.prototype=h,h.constructor=p,o(10)(s,"Number",p)}},174:function(t,n,o){var s=o(9),e=o(17),c=o(5),r=o(175),a="["+r+"]",l=RegExp("^"+a+a+"*"),i=RegExp(a+a+"*$"),u=function(t,n,o){var e={},a=c(function(){return!!r[t]()||"​"!="​"[t]()}),l=e[t]=a?n(v):r[t];o&&(e[o]=l),s(s.P+s.F*a,"String",e)},v=u.trim=function(t,n){return t=String(e(t)),1&n&&(t=t.replace(l,"")),2&n&&(t=t.replace(i,"")),t};t.exports=u},175:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},179:function(t,n,o){"use strict";var s=o(171);o.n(s).a},180:function(t,n,o){"use strict";var s=o(172);o.n(s).a},181:function(t,n,o){"use strict";var s=o(8),e=(o(173),{name:"v-col",components:{},props:{span:{type:[String,Number]},offset:{type:[String,Number],default:0}},data:function(){return{gutter:0}},computed:{colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}},colClass:function(){var t=this.createClasses,n=this.span,o=this.offset;return Object(s.a)(t({span:n,offset:o}))}},watch:{},methods:{createClasses:function(t){if(!t)return[];var n=[];return t.span&&n.push("col-".concat(t.span)),t.offset&&n.push("offset-".concat(t.offset)),n}},mounted:function(){}}),c=(o(180),o(0)),r=Object(c.a)(e,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"074097c6",null);r.options.__file="col.vue";n.a=r.exports},182:function(t,n,o){"use strict";o(13),o(173);var s={name:"v-row",components:{},props:{gutter:{type:[Number,String],default:0},align:{type:String,validator:function(t){return["left","right","center"].indexOf(t)>=0}}},data:function(){return{}},watch:{},methods:{},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(n){n.gutter=t.gutter})}},e=(o(179),o(0)),c=Object(e.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"2c359aa0",null);c.options.__file="row.vue";n.a=c.exports},206:function(t,n,o){},224:function(t,n,o){"use strict";var s=o(206);o.n(s).a},244:function(t,n,o){"use strict";o.r(n);var s=o(182),e=o(181),c={components:{vRow:s.a,vCol:e.a},props:{},data:function(){return{content:"\n            <v-row >\n                <v-col span='12' >col-12</v-col>\n                <v-col span='12'>col-12</v-col>\n            </v-row>\n            <v-row >\n                <v-col span='8' >col-8</v-col>\n                <v-col span='8'>col-8</v-col>\n                <v-col span='8' >col-8</v-col>\n            </v-row>\n            <v-row >\n                <v-col span='6' >col-6</v-col>\n                <v-col span='6'>col-6</v-col>\n                <v-col span='6' >col-6</v-col>\n                <v-col span='6' >col-6</v-col>\n            </v-row>"}},watch:{},methods:{},mounted:function(){}},r=(o(224),o(0)),a=Object(r.a)(c,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("section",[o("v-row",{staticClass:"demo-row"},[o("v-col",{staticClass:"demo-col",attrs:{span:"12"}},[t._v("col-12")]),t._v(" "),o("v-col",{staticClass:"demo-col light",attrs:{span:"12"}},[t._v("col-12")])],1),t._v(" "),o("v-row",{staticClass:"demo-row"},[o("v-col",{staticClass:"demo-col",attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),o("v-col",{staticClass:"demo-col light",attrs:{span:"8"}},[t._v("col-8")]),t._v(" "),o("v-col",{staticClass:"demo-col",attrs:{span:"8"}},[t._v("col-8")])],1),t._v(" "),o("v-row",{staticClass:"demo-row"},[o("v-col",{staticClass:"demo-col",attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),o("v-col",{staticClass:"demo-col light",attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),o("v-col",{staticClass:"demo-col",attrs:{span:"6"}},[t._v("col-6")]),t._v(" "),o("v-col",{staticClass:"demo-col light",attrs:{span:"6"}},[t._v("col-6")])],1),t._v(" "),o("pre",[t._v("        "),o("code",[t._v(t._s(t.content))]),t._v("\n    ")])],1)},[],!1,null,"dd1f77cc",null);a.options.__file="gird-basic.vue";n.default=a.exports}}]);