(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[572],{713:function(n,e,t){"use strict";t.d(e,{JN:function(){return c},TP:function(){return p},tx:function(){return l},z1:function(){return s},zv:function(){return f}});var r=t(861),a=t(757),i=t.n(a),o=t(388),u="af0d5f243de6f7a5bfa482911cb42a9e";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(u,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},77:function(n,e,t){"use strict";t.d(e,{Dx:function(){return s},H2:function(){return f},eW:function(){return p}});var r,a,i,o=t(168),u=t(444),c=t(731),s=u.ZP.h2(r||(r=(0,o.Z)(["\n  font-size: 30px;\n  margin-top: 40px;\n  margin-bottom:0;\n"]))),p=u.ZP.ul(a||(a=(0,o.Z)(["\n  padding: 26px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  row-gap: 10px;\n"]))),f=(0,u.ZP)(c.rU)(i||(i=(0,o.Z)(["\n  padding: 3px 6px;\n\n  &:hover {\n    background-color: rgba(195, 195, 195, 0.36);\n  }\n"])))},572:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o=t(885),u=t(483),c=t(77),s=t(791),p=t(713),f=t(7),l=t.n(f),d=t(719),m=t(168),h=t(444),x=h.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  max-width: 300px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  margin-top: 8px;\n"]))),v=h.ZP.input(a||(a=(0,m.Z)(["\ndisplay: inline-block;\n  width: 100%;\n  font-size: 16px;\n  padding: 4px;\n\n  &::placeholder {\n    font-size: 16px;\n  }\n"]))),g=h.ZP.button(i||(i=(0,m.Z)(["\n  align-items: center;\n  background-color: inherit;\n  width: 30px;\n  height: 30px;\n  margin-right: 7px;\n  margin-left: 4px;\n  transition: all 250ms easy-out;\n  cursor: pointer;\n  border:none;\n\n  &:hover {\n    transform: scale(1.1);\n  }\n\n  &>svg{\n    width:25px;\n    height: 25px;\n  }\n"]))),y=t(184),b=function(){return(0,y.jsx)(v,{type:"text",name:"movieName",required:!0,autoComplete:"off",autoFocus:!0,placeholder:"Write movie name"})},Z=function(n){var e=n.onSubmit,t=n.children;return(0,y.jsx)(x,{onSubmit:e,children:t})};Z.propTypes={onSubmit:l().func.isRequired};var w=function(n){var e=n.onSubmit;return(0,y.jsx)("div",{children:(0,y.jsxs)(Z,{onSubmit:e,children:[(0,y.jsx)(b,{}),(0,y.jsx)(g,{type:"submit",children:(0,y.jsx)(d.wTD,{})})]})})},k=t(731),_=t(739),S=function(){var n,e=(0,_.TH)(),t=(0,k.lr)(),r=(0,o.Z)(t,2),a=r[0],i=r[1],f=null!==(n=a.get("movieName"))&&void 0!==n?n:"",l=(0,s.useState)([]),d=(0,o.Z)(l,2),m=d[0],h=d[1],x=(0,s.useState)(!1),v=(0,o.Z)(x,2),g=v[0],b=v[1],Z=(0,s.useState)(!1),S=(0,o.Z)(Z,2),j=S[0],T=S[1];return(0,s.useEffect)((function(){""!==f&&(h([]),b(!0),(0,p.z1)(f).then((function(n){if(!n.results.length)return b(!1),T(!0),console.log("There is no movies with this request. Please, try again");T(!1),h(n.results),b(!1)})))}),[f]),(0,y.jsxs)("main",{children:[(0,y.jsx)(w,{onSubmit:function(n){n.preventDefault();var e=n.currentTarget;i({movieName:e.elements.movieName.value}),e.reset()}}),j&&(0,y.jsx)("p",{children:"We do not find movies with your request. Please, try again"}),(0,y.jsxs)(c.eW,{children:[m.map((function(n){return(0,y.jsx)("li",{children:(0,y.jsx)(c.H2,{to:"/movies/".concat(n.id),state:{from:e},children:n.original_title||n.name})},n.id)})),g&&(0,y.jsx)(u.Z,{})]})]})}},888:function(n,e,t){"use strict";var r=t(47);function a(){}function i(){}i.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,i,o){if(o!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},7:function(n,e,t){n.exports=t(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=572.69921f08.chunk.js.map