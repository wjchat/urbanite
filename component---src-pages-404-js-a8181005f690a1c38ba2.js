(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(153);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"There's no page here"),r.a.createElement("p",null,"It really do be like that sometimes"))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(143),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(145),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},147:function(e){e.exports={data:{site:{siteMetadata:{title:"URBANITE"}}}}},148:function(e,t,n){"use strict";n.r(t);n(35);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(49),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},149:function(e,t,n){e.exports={header:"nav-module--header--lIsu1",nav:"nav-module--nav--1MMFh",title:"nav-module--title--2IyM_",link:"nav-module--link--3Vt4M",border:"nav-module--border--1PGMO",active:"nav-module--active--1Yatu",currentPage:"nav-module--currentPage--1rLuQ"}},150:function(e,t,n){e.exports={footer:"footer-module--footer--1F2cB"}},151:function(e,t,n){},152:function(e,t,n){e.exports={layout:"layout-module--layout--1Y7BV"}},153:function(e,t,n){"use strict";var a=n(147),r=n(0),i=n.n(r),o=n(4),l=n.n(o),u=n(155),c=n.n(u),s=n(144),d=(n(156),n(7)),m=n.n(d),p=n(149),f=n.n(p),h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleOver=function(){t.refs.animate.classList.add(f.a.active)},t.handleLeave=function(){t.refs.animate.classList.remove(f.a.active)},t}return m()(t,e),t.prototype.render=function(){return i.a.createElement("li",{onMouseOver:this.handleOver,onMouseLeave:this.handleLeave,style:{listStyle:"none"}},i.a.createElement(s.Link,{activeClassName:f.a.currentPage,className:f.a.link,to:this.props.link},this.props.page),i.a.createElement("div",{ref:"animate",className:f.a.border}))},t}(i.a.Component),v=function(e){function t(){return e.apply(this,arguments)||this}return m()(t,e),t.prototype.render=function(){return i.a.createElement("nav",{className:f.a.nav},i.a.createElement(h,{link:"/",page:"Home"}),i.a.createElement(h,{link:"/ticket",page:"Tickets"}),i.a.createElement(h,{link:"/merch/",page:"Merch"}),i.a.createElement(h,{link:"/dancers/",page:"Dancer Portal"}))},t}(i.a.Component),y=function(e){var t=e.siteTitle;return i.a.createElement("div",{className:f.a.header},i.a.createElement("div",null,i.a.createElement("h1",null,i.a.createElement(s.Link,{className:f.a.title,to:"/"},t)),i.a.createElement(v,null)))},g=n(150),E=n.n(g),k=function(e){function t(){return e.apply(this,arguments)||this}return m()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{className:E.a.footer},"URBANITE©2018")},t}(i.a.Component),b=n(154),w=(n(151),n(152)),q=n.n(w),P=function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(y,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(b.ParallaxProvider,null,i.a.createElement("div",{className:q.a.layout},t,i.a.createElement(k,null))))},data:a})};P.propTypes={children:l.a.node.isRequired};t.a=P}}]);
//# sourceMappingURL=component---src-pages-404-js-a8181005f690a1c38ba2.js.map