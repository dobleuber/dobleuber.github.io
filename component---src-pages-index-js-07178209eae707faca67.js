webpackJsonp([35783957827783],{97:function(e,t,n){"use strict";function o(e){return e}function a(e,t,n){function a(e,t){var n=E.hasOwnProperty(t)?E[t]:null;_.hasOwnProperty(t)&&l("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&l("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function i(e,n){if(n){l("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),l(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,i=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&b.mixins(e,n.mixins);for(var r in n)if(n.hasOwnProperty(r)&&r!==c){var s=n[r],u=o.hasOwnProperty(r);if(a(u,r),b.hasOwnProperty(r))b[r](e,s);else{var p=E.hasOwnProperty(r),h="function"==typeof s,y=h&&!p&&!u&&n.autobind!==!1;if(y)i.push(r,s),o[r]=s;else if(u){var m=E[r];l(p&&("DEFINE_MANY_MERGED"===m||"DEFINE_MANY"===m),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,r),"DEFINE_MANY_MERGED"===m?o[r]=d(o[r],s):"DEFINE_MANY"===m&&(o[r]=f(o[r],s))}else o[r]=s}}}else;}function u(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var a=n in b;l(!a,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in e;if(i){var r=v.hasOwnProperty(n)?v[n]:null;return l("DEFINE_MANY_MERGED"===r,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=d(e[n],o))}e[n]=o}}}function p(e,t){l(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(l(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function d(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var a={};return p(a,n),p(a,o),a}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function h(e,t){var n=t.bind(e);return n}function y(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],a=t[n+1];e[o]=h(e,a)}}function m(e){var t=o(function(e,o,a){this.__reactAutoBindPairs.length&&y(this),this.props=e,this.context=o,this.refs=s,this.updater=a||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;l("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=i});t.prototype=new D,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(i.bind(null,t)),i(t,w),i(t,e),i(t,N),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),l(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var a in E)t.prototype[a]||(t.prototype[a]=null);return t}var g=[],E={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},v={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)i(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=r({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=r({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=r({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},w={componentDidMount:function(){this.__isMounted=!0}},N={componentWillUnmount:function(){this.__isMounted=!1}},_={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},D=function(){};return r(D.prototype,e.prototype,_),m}var i,r=n(4),s=n(34),l=n(1),c="mixins";i={},e.exports=a},305:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(){return"undefined"==typeof N&&"undefined"!=typeof window&&window.IntersectionObserver&&(N=new window.IntersectionObserver(function(e){e.forEach(function(e){_.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),N}t.__esModule=!0;var i=n(41),r=o(i),s=n(55),l=o(s),c=n(54),u=o(c),p=n(127),d=o(p),f=n(126),h=o(f),y=n(5),m=o(y),g=n(7),E=o(g),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},b={},w=function(e){var t=v(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!b[n]||(b[n]=!0,!1)},N=void 0,_=[],D=function(e,t){a().observe(e),_.push([e,t])},I=null,S=function(){if(null!==I)return I;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return I=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",o=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',r=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+r+s+t+n+i+a+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},O=function(e){var t=e.style,n=e.onLoad,o=(0,d.default)(e,["style","onLoad"]);return m.default.createElement("img",(0,h.default)({},o,{onLoad:n,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};O.propTypes={style:E.default.object,onLoad:E.default.func};var M=function(e){function t(n){(0,r.default)(this,t);var o=(0,l.default)(this,e.call(this,n)),a=!0,i=!0,s=!1,c=w(n);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=!1,i=!1,s=!0),"undefined"==typeof window&&(a=!1,i=!1),o.state={isVisible:a,imgLoaded:i,IOSupported:s},o.handleRef=o.handleRef.bind(o),o}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&D(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),n=t.title,o=t.alt,a=t.className,i=t.outerWrapperClassName,r=t.style,s=void 0===r?{}:r,l=t.imgStyle,c=void 0===l?{}:l,u=t.sizes,p=t.resolutions,d=t.backgroundColor,f=t.Tag,y=void 0;y="boolean"==typeof d?"lightgray":d;var g=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c),E=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(u){var b=u;return b.srcWebp&&b.srcSetWebp&&S()&&(b.src=b.srcWebp,b.srcSet=b.srcSetWebp),m.default.createElement(f,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},m.default.createElement(f,{className:(a?a:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef},m.default.createElement(f,{style:{width:"100%",paddingBottom:100/b.aspectRatio+"%"}}),b.base64&&m.default.createElement(O,{alt:o,title:n,src:b.base64,style:g}),b.tracedSVG&&m.default.createElement(O,{alt:o,title:n,src:b.tracedSVG,style:g}),y&&m.default.createElement(f,{title:n,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(O,{alt:o,title:n,srcSet:b.srcSet,src:b.src,sizes:b.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,h.default)({alt:o,title:n},b))}})))}if(p){var w=p,N=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:w.width,height:w.height},s);return"inherit"===s.display&&delete N.display,w.srcWebp&&w.srcSetWebp&&S()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),m.default.createElement(f,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===s.position?"initial":"relative"}},m.default.createElement(f,{className:(a?a:"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},w.base64&&m.default.createElement(O,{alt:o,title:n,src:w.base64,style:g}),w.tracedSVG&&m.default.createElement(O,{alt:o,title:n,src:w.tracedSVG,style:g}),y&&m.default.createElement(f,{title:n,style:{backgroundColor:y,width:w.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:w.height}}),this.state.isVisible&&m.default.createElement(O,{alt:o,title:n,width:w.width,height:w.height,srcSet:w.srcSet,src:w.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,h.default)({alt:o,title:n,width:w.width,height:w.height},w))}})))}return null},t}(m.default.Component);M.defaultProps={fadeIn:!0,alt:"",Tag:"div"},M.propTypes={responsiveResolution:E.default.object,responsiveSizes:E.default.object,resolutions:E.default.object,sizes:E.default.object,fadeIn:E.default.bool,title:E.default.string,alt:E.default.string,className:E.default.oneOfType([E.default.string,E.default.object]),outerWrapperClassName:E.default.oneOfType([E.default.string,E.default.object]),style:E.default.object,imgStyle:E.default.object,position:E.default.string,backgroundColor:E.default.oneOfType([E.default.string,E.default.bool]),onLoad:E.default.func,Tag:E.default.string},t.default=M},159:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},t={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n=Object.defineProperty,o=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,r=Object.getPrototypeOf,s=r&&r(Object);return function l(c,u,p){if("string"!=typeof u){if(s){var d=r(u);d&&d!==s&&l(c,d,p)}var f=o(u);a&&(f=f.concat(a(u)));for(var h=0;h<f.length;++h){var y=f[h];if(!(e[y]||t[y]||p&&p[y])){var m=i(u,y);try{n(c,y,m)}catch(e){}}}return c}return c}})},4:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}var a=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,s,l=n(e),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var u in o)i.call(o,u)&&(l[u]=o[u]);if(a){s=a(o);for(var p=0;p<s.length;p++)r.call(o,s[p])&&(l[s[p]]=o[s[p]])}}return l}},291:function(e,t){},201:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(5),i=o(a);n(291);var r=function(e){var t=e.label,n=e.score,o=Array.from(Array(n).keys()),a=Array.from(Array(5-n).keys());return i.default.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:5}},i.default.createElement("span",null,t),i.default.createElement("div",{className:"score"},o.map(function(e){return i.default.createElement("span",{className:"star",key:t+"_"+e})}),a.map(function(e){return i.default.createElement("span",{key:t+"_"+(5-e)})})))};t.default=r,e.exports=t.default},204:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=n(5),r=o(i),s=n(155),l=(o(s),n(305)),c=o(l),u=n(201),p=o(u),d=function(e){var t=e.data;return r.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.default.createElement("div",{style:{display:"flex"}},r.default.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.default.createElement(c.default,{title:"me",alt:"dobleuber",resolutions:t.file.childImageSharp.resolutions}),r.default.createElement("h4",{style:{marginTop:15}},"Skills"),t.site.siteMetadata.skills.map(function(e){return r.default.createElement(p.default,a({key:e.label},e))})),r.default.createElement("div",{style:{display:"flex",flexDirection:"column",padding:20}},r.default.createElement("h4",null,"Frontend Developer"),r.default.createElement("p",null,"Web developer with 15+ years of experience. Passionate for my work and self-improvement. Committed with developing product with high quality standards. I enjoy learning and working with new technologies. I love working hard when I am doing challenging projects."),r.default.createElement("p",null,"I fell in love with React and its ecosystem a couple of years ago. I have been studying this framework a lot and have built several applications to put my skills into practice. I’ve given talks about React, Angular and Web development in multiple tech meetups in my city."),r.default.createElement("h4",null,"Experience"),r.default.createElement("h5",null,"PSL Corp"),r.default.createElement("p",null,"Senior Web Developer"),r.default.createElement("p",null,"Responsabilities:",r.default.createElement("ul",null,r.default.createElement("li",null,"Develop high quality web applications for Big companies at US and Colombia"),r.default.createElement("li",null,"Support the software architect at defining the technology stack for Web projects and develop the most challenging features"),r.default.createElement("li",null,"Help with personal selection process doing internal and external technical interviews"),r.default.createElement("li",null,"Support to another teams in the resolution of difficult issues"),r.default.createElement("li",null,"Mentoring junior developers to improve their technical skills"))))))};t.default=d;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-07178209eae707faca67.js.map