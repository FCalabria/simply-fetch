!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).f=t()}(this,(function(){"use strict";function e(e,t,n,r,o,i,u){try{var c=e[i](u),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(r,o)}function t(t){return function(){var n=this,r=arguments;return new Promise((function(o,i){var u=t.apply(n,r);function c(t){e(u,o,i,c,a,"next",t)}function a(t){e(u,o,i,c,a,"throw",t)}c(void 0)}))}}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){return u.apply(this,arguments)}function u(){return(u=t(regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,n);case 3:if(!(r=e.sent).ok){e.next=11;break}return e.next=7,r.json();case 7:return o=e.sent,e.abrupt("return",Promise.resolve(o));case 11:return e.abrupt("return",Promise.reject(r));case 12:e.next=17;break;case 14:return e.prev=14,e.t0=e.catch(0),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}return{get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(e,t)},head:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(e,o({method:"HEAD"},t))},post:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i(e,o({method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},n))},put:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return i(e,o({method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},n))},delete:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(e,o({method:"DELETE"},t))},options:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i(e,o({method:"OPTIONS"},t))}}}));