(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5724],{30590:function(e,t,r){"use strict";r.d(t,{Z:function(){return R}});var i,n,s,a,o,u=r(19017),h=r(1638),d=r(15851),f=r(67294),l=r(45697),c=r(87108),p=r(42778),m=["disabled"],g=(0,f.forwardRef)(function(e,t){var r=e.disabled,i=(0,d.Z)(e,m);return f.createElement(_,(0,h.Z)({disabled:r,ref:t,type:"checkbox"},i))}),_=c.ZP.input(i||(i=(0,u.Z)(["\n  cursor: pointer;\n  margin-right: 0.5rem;\n"])));g.propTypes={disabled:l.bool},g.defaultProps={stacked:!1};var v=r(88280),y=["data","errors","legend","stacked"],k=["disabled","label"],b=function(e){var t=e.data,r=e.errors,i=e.legend,n=e.stacked,s=(0,d.Z)(e,y);return f.createElement(E,{error:r[s.name]},i&&f.createElement("legend",null,i),t.map(function(e){var t=e.disabled,i=e.label,a=(0,d.Z)(e,k);return f.createElement(w,{htmlFor:a.id,key:a.id,stacked:n},f.createElement(p.Z,(0,h.Z)({component:g,disabled:t,errors:r[s.name],showError:!1},a,s)),i)}))};b.displayName="Checkbox";var E=c.ZP.fieldset(n||(n=(0,u.Z)(["\n  border-radius: 0.25rem;\n  color: ",";\n  ","\n"])),function(e){return e.theme.COLOUR.dark},function(e){return e.error&&(0,c.iv)(s||(s=(0,u.Z)(["\n      ","\n      padding: 0.5rem;\n    "])),function(e){return(0,v.Z)(e)})}),w=c.ZP.label(a||(a=(0,u.Z)(["\n  cursor: pointer;\n  margin-right: 1.25rem;\n  position: relative;\n  ","\n"])),function(e){return e.stacked&&(0,c.iv)(o||(o=(0,u.Z)(["\n      display: block;\n      margin: 0.5rem 0;\n    "])))});b.propTypes={data:l.array.isRequired,errors:l.object,legend:l.string,stacked:l.bool},b.defaultProps={data:[],errors:{},stacked:!1};var R=b},29444:function(e,t,r){"use strict";var i,n=r(19017),s=r(67294),a=r(45697),o=r(11163),u=r.n(o),h=r(87108),d=r(62906),f=function(e,t,r,i){return function(n){var a=n.row,o=!1;o=a[i]||e;var h=function(){var r=a[i]||e;return"".concat(r,"?id=").concat(a[t])},d=function(e){e.preventDefault(),e.stopPropagation(),u().push(h())},f=a[r],c=a[t];return o?"-"!==f&&c?s.createElement(l,{border:!1,href:h(),onClick:d},f):f||"-":f}},l=(0,h.ZP)(d.Z)(i||(i=(0,n.Z)(["\n  &:hover {\n    background: #ddd;\n    margin: -8px;\n    padding: 8px;\n  }\n"])));f.propTypes={row:a.object.isRequired},t.Z=f},73165:function(e,t){"use strict";var r=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};t.Z=r},57460:function(e,t){var r,i,n,s; /* @license
Papa Parse
v5.3.0
https://github.com/mholt/PapaParse
License: MIT
*/ s=function e(){"use strict";var t="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},r=!t.document&&!!t.postMessage,i=r&&/blob:/i.test((t.location||{}).protocol),n={},s=0,a={parse:function(r,i){var o=(i=i||{}).dynamicTyping||!1;if(b(o)&&(i.dynamicTypingFunction=o,o={}),i.dynamicTyping=o,i.transform=!!b(i.transform)&&i.transform,i.worker&&a.WORKERS_SUPPORTED){var u=function(){if(!a.WORKERS_SUPPORTED)return!1;var r,i,o=(r=t.URL||t.webkitURL||null,i=e.toString(),a.BLOB_URL||(a.BLOB_URL=r.createObjectURL(new Blob(["(",i,")();"],{type:"text/javascript"})))),u=new t.Worker(o);return u.onmessage=g,u.id=s++,n[u.id]=u}();return u.userStep=i.step,u.userChunk=i.chunk,u.userComplete=i.complete,u.userError=i.error,i.step=b(i.step),i.chunk=b(i.chunk),i.complete=b(i.complete),i.error=b(i.error),delete i.worker,void u.postMessage({input:r,config:i,workerId:u.id})}var c=null;return a.NODE_STREAM_INPUT,"string"==typeof r?c=i.download?new h(i):new f(i):!0===r.readable&&b(r.read)&&b(r.on)?c=new l(i):(t.File&&r instanceof File||r instanceof Object)&&(c=new d(i)),c.stream(r)},unparse:function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',u=o+o,h=!1,d=null,f=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter(function(e){return -1!==t.delimiter.indexOf(e)}).length||(n=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(h=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw Error("Option columns is empty");d=t.columns}void 0!==t.escapeChar&&(u=t.escapeChar+o),"boolean"==typeof t.escapeFormulae&&(f=t.escapeFormulae)}}();var l=RegExp(p(o),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return m(null,e,h);if("object"==typeof e[0])return m(d||c(e[0]),e,h)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:c(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),m(e.fields||[],e.data||[],h);throw Error("Unable to serialize unrecognized input");function c(e){if("object"!=typeof e)return[];var t=[];for(var r in e)t.push(r);return t}function m(e,t,r){var a="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var o=Array.isArray(e)&&0<e.length,u=!Array.isArray(t[0]);if(o&&i){for(var h=0;h<e.length;h++)0<h&&(a+=n),a+=g(e[h],h);0<t.length&&(a+=s)}for(var d=0;d<t.length;d++){var f=o?e.length:t[d].length,l=!1,c=o?0===Object.keys(t[d]).length:0===t[d].length;if(r&&!o&&(l="greedy"===r?""===t[d].join("").trim():1===t[d].length&&0===t[d][0].length),"greedy"===r&&o){for(var p=[],m=0;m<f;m++){var _=u?e[m]:m;p.push(t[d][_])}l=""===p.join("").trim()}if(!l){for(var v=0;v<f;v++){0<v&&!c&&(a+=n);var y=o&&u?e[v]:v;a+=g(t[d][y],v)}d<t.length-1&&(!r||0<f&&!c)&&(a+=s)}}return a}function g(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);!0===f&&"string"==typeof e&&null!==e.match(/^[=+\-@].*$/)&&(e="'"+e);var i=e.toString().replace(l,u);return"boolean"==typeof r&&r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||function(e,t){for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1}(i,a.BAD_DELIMITERS)||-1<i.indexOf(n)||" "===i.charAt(0)||" "===i.charAt(i.length-1)?o+i+o:i}}};if(a.RECORD_SEP="\x1e",a.UNIT_SEP="\x1f",a.BYTE_ORDER_MARK="\uFEFF",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!r&&!!t.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=c,a.NetworkStreamer=h,a.FileStreamer=d,a.StringStreamer=f,a.ReadableStreamStreamer=l,t.jQuery){var o=t.jQuery;o.fn.parse=function(e){var r=e.config||{},i=[];return this.each(function(e){if(!("INPUT"===o(this).prop("tagName").toUpperCase()&&"file"===o(this).attr("type").toLowerCase()&&t.FileReader)||!this.files||0===this.files.length)return!0;for(var n=0;n<this.files.length;n++)i.push({file:this.files[n],inputElem:this,instanceConfig:o.extend({},r)})}),n(),this;function n(){if(0!==i.length){var t,r,n,u,h=i[0];if(b(e.before)){var d=e.before(h.file,h.inputElem);if("object"==typeof d){if("abort"===d.action)return t="AbortError",r=h.file,n=h.inputElem,u=d.reason,void(b(e.error)&&e.error({name:t},r,n,u));if("skip"===d.action)return void s();"object"==typeof d.config&&(h.instanceConfig=o.extend(h.instanceConfig,d.config))}else if("skip"===d)return void s()}var f=h.instanceConfig.complete;h.instanceConfig.complete=function(e){b(f)&&f(e,h.file,h.inputElem),s()},a.parse(h.file,h.instanceConfig)}else b(e.complete)&&e.complete()}function s(){i.splice(0,1),n()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},(function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new c(t),(this._handle.streamer=this)._config=t}).call(this,e),this.parseChunk=function(e,r){if(this.isFirstChunk&&b(this._config.beforeFirstChunk)){var n=this._config.beforeFirstChunk(e);void 0!==n&&(e=n)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var o=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var u=o.meta.cursor;this._finished||(this._partialLine=s.substring(u-this._baseIndex),this._baseIndex=u),o&&o.data&&(this._rowCount+=o.data.length);var h=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(i)t.postMessage({results:o,workerId:a.WORKER_ID,finished:h});else if(b(this._config.chunk)&&!r){if(this._config.chunk(o,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);o=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(o.data),this._completeResults.errors=this._completeResults.errors.concat(o.errors),this._completeResults.meta=o.meta),this._completed||!h||!b(this._config.complete)||o&&o.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),h||o&&o.meta.paused||this._nextChunk(),o}this._halted=!0},this._sendError=function(e){b(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function h(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),u.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!r),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var i in e)t.setRequestHeader(i,e[i])}if(this._config.chunkSize){var n=this._start+this._config.chunkSize-1;t.setRequestHeader("Range","bytes="+this._start+"-"+n)}try{t.send(this._config.downloadRequestBody)}catch(s){this._chunkError(s.message)}r&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){var e,r;4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(null===(r=(e=t).getResponseHeader("Content-Range"))?-1:parseInt(r.substring(r.lastIndexOf("/")+1))),this.parseChunk(t.responseText)))},this._chunkError=function(e){var r=t.statusText||e;this._sendError(Error(r))}}function d(e){(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),u.call(this,e);var t,r,i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=k(this._chunkLoaded,this),t.onerror=k(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var n=Math.min(this._start+this._config.chunkSize,this._input.size);e=r.call(e,this._start,n)}var s=t.readAsText(e,this._config.encoding);i||this._chunkLoaded({target:{result:s}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;u.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,r=this._config.chunkSize;return r?(e=t.substring(0,r),t=t.substring(r)):(e=t,t=""),this._finished=!t,this.parseChunk(e)}}}function l(e){u.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=k(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(i){this._streamError(i)}},this),this._streamError=k(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=k(function(){this._streamCleanUp(),i=!0,this._streamData("")},this),this._streamCleanUp=k(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function c(e){var t,r,i,n=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)(e[-+]?\d+)?\s*$/,s=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,o=this,u=0,h=0,d=!1,f=!1,l=[],c={data:[],errors:[],meta:{}};if(b(e.step)){var g=e.step;e.step=function(t){if(c=t,k())v();else{if(v(),0===c.data.length)return;u+=t.data.length,e.preview&&u>e.preview?r.abort():(c.data=c.data[0],g(c,o))}}}function _(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function v(){if(c&&i&&(w("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines)for(var t=0;t<c.data.length;t++)_(c.data[t])&&c.data.splice(t--,1);return k()&&function(){if(c){if(Array.isArray(c.data[0])){for(var t=0;k()&&t<c.data.length;t++)c.data[t].forEach(r);c.data.splice(0,1)}else c.data.forEach(r)}function r(t,r){b(e.transformHeader)&&(t=e.transformHeader(t,r)),l.push(t)}}(),function(){if(!c||!e.header&&!e.dynamicTyping&&!e.transform)return c;function t(t,r){var i,n=e.header?{}:[];for(i=0;i<t.length;i++){var s=i,a=t[i];e.header&&(s=i>=l.length?"__parsed_extra":l[i]),e.transform&&(a=e.transform(a,s)),a=E(s,a),"__parsed_extra"===s?(n[s]=n[s]||[],n[s].push(a)):n[s]=a}return e.header&&(i>l.length?w("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+i,h+r):i<l.length&&w("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+i,h+r)),n}var r=1;return!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(t),r=c.data.length):c.data=t(c.data,0),e.header&&c.meta&&(c.meta.fields=l),h+=r,c}()}function k(){return e.header&&0===l.length}function E(t,r){return e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&(!function(e){if(n.test(e)){var t=parseFloat(e);if(-9007199254740992<t&&t<9007199254740992)return!0}return!1}(r)?s.test(r)?new Date(r):""===r?null:r:parseFloat(r)):r}function w(e,t,r,i){var n={type:e,code:t,message:r};void 0!==i&&(n.row=i),c.errors.push(n)}this.parse=function(n,s,o){var u=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var r=RegExp(p(t)+"([^]*?)"+p(t),"gm"),i=(e=e.replace(r,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<i[0].length;if(1===i.length||s)return"\n";for(var a=0,o=0;o<i.length;o++)"\n"===i[o][0]&&a++;return a>=i.length/2?"\r\n":"\r"}(n,u)),i=!1,e.delimiter)b(e.delimiter)&&(e.delimiter=e.delimiter(n),c.meta.delimiter=e.delimiter);else{var h=function(t,r,i,n,s){var o,u,h,d;s=s||[",","	","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var f=0;f<s.length;f++){var l=s[f],c=0,p=0,g=0;h=void 0;for(var v=new m({comments:n,delimiter:l,newline:r,preview:10}).parse(t),y=0;y<v.data.length;y++)if(i&&_(v.data[y]))g++;else{var k=v.data[y].length;p+=k,void 0!==h?0<k&&(c+=Math.abs(k-h),h=k):h=k}0<v.data.length&&(p/=v.data.length-g),(void 0===u||c<=u)&&(void 0===d||d<p)&&1.99<p&&(u=c,o=l,d=p)}return{successful:!!(e.delimiter=o),bestDelimiter:o}}(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);h.successful?e.delimiter=h.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),c.meta.delimiter=e.delimiter}var f=y(e);return e.preview&&e.header&&f.preview++,t=n,c=(r=new m(f)).parse(t,s,o),v(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,r.abort(),t=b(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){o.streamer._halted?(d=!1,o.streamer.parseChunk(t,!0)):setTimeout(o.resume,3)},this.aborted=function(){return f},this.abort=function(){f=!0,r.abort(),c.meta.aborted=!0,b(e.complete)&&e.complete(c),t=""}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t,r=(e=e||{}).delimiter,i=e.newline,n=e.comments,s=e.step,o=e.preview,u=e.fastMode,h=t=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(h=e.escapeChar),("string"!=typeof r||-1<a.BAD_DELIMITERS.indexOf(r))&&(r=","),n===r)throw Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==i&&"\r"!==i&&"\r\n"!==i&&(i="\n");var d=0,f=!1;this.parse=function(e,a,l){if("string"!=typeof e)throw Error("Input must be a string");var c=e.length,m=r.length,g=i.length,_=n.length,v=b(s),y=[],k=[],E=[],w=d=0;if(!e)return M();if(u||!1!==u&&-1===e.indexOf(t)){for(var R=e.split(i),C=0;C<R.length;C++){if(d+=(E=R[C]).length,C!==R.length-1)d+=i.length;else if(l)break;if(!n||E.substring(0,_)!==n){if(v){if(y=[],L(E.split(r)),Z(),f)return M()}else L(E.split(r));if(o&&o<=C)return y=y.slice(0,o),M(!0)}}return M()}for(var x=e.indexOf(r,d),S=e.indexOf(i,d),O=RegExp(p(h)+p(t),"g"),T=e.indexOf(t,d);;)if(e[d]!==t){if(n&&0===E.length&&e.substring(d,d+_)===n){if(-1===S)return M();d=S+g,S=e.indexOf(i,d),x=e.indexOf(r,d)}else{if(-1!==x&&(x<S||-1===S)){if(!(x<T)){E.push(e.substring(d,x)),d=x+m,x=e.indexOf(r,d);continue}var D=q(x,T,S);if(D&&void 0!==D.nextDelim){x=D.nextDelim,T=D.quoteSearch,E.push(e.substring(d,x)),d=x+m,x=e.indexOf(r,d);continue}}if(-1===S)break;if(E.push(e.substring(d,S)),j(S+g),v&&(Z(),f))return M();if(o&&y.length>=o)return M(!0)}}else for(T=d,d++;;){if(-1===(T=e.indexOf(t,T+1)))return l||k.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:y.length,index:d}),z();if(T===c-1)return z(e.substring(d,T).replace(O,t));if(t!==h||e[T+1]!==h){if(t===h||0===T||e[T-1]!==h){-1!==x&&x<T+1&&(x=e.indexOf(r,T+1)),-1!==S&&S<T+1&&(S=e.indexOf(i,T+1));var I=F(-1===S?x:Math.min(x,S));if(e[T+1+I]===r){E.push(e.substring(d,T).replace(O,t)),e[d=T+1+I+m]!==t&&(T=e.indexOf(t,d)),x=e.indexOf(r,d),S=e.indexOf(i,d);break}var A=F(S);if(e.substring(T+1+A,T+1+A+g)===i){if(E.push(e.substring(d,T).replace(O,t)),j(T+1+A+g),x=e.indexOf(r,d),T=e.indexOf(t,d),v&&(Z(),f))return M();if(o&&y.length>=o)return M(!0);break}k.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:y.length,index:d}),T++}}else T++}return z();function L(e){y.push(e),w=d}function F(t){var r=0;if(-1!==t){var i=e.substring(T+1,t);i&&""===i.trim()&&(r=i.length)}return r}function z(t){return l||(void 0===t&&(t=e.substring(d)),E.push(t),d=c,L(E),v&&Z()),M()}function j(t){d=t,L(E),E=[],S=e.indexOf(i,d)}function M(e){return{data:y,errors:k,meta:{delimiter:r,linebreak:i,aborted:f,truncated:!!e,cursor:w+(a||0)}}}function Z(){s(M()),y=[],k=[]}function q(i,n,s){var a={nextDelim:void 0,quoteSearch:void 0},o=e.indexOf(t,n+1);if(n<i&&i<o&&(o<s||-1===s)){var u=e.indexOf(r,o);if(-1===u)return a;o<u&&(o=e.indexOf(t,o+1)),a=q(u,o,s)}else a={nextDelim:i,quoteSearch:n};return a}},this.abort=function(){f=!0},this.getCharIndex=function(){return d}}function g(e){var t=e.data,r=n[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var s={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(b(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},s),!i);a++);delete t.results}else b(r.userChunk)&&(r.userChunk(t.results,s,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=n[e];b(r.userComplete)&&r.userComplete(t),r.terminate(),delete n[e]}function v(){throw Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var r in e)t[r]=y(e[r]);return t}function k(e,t){return function(){e.apply(t,arguments)}}function b(e){return"function"==typeof e}return i&&(t.onmessage=function(e){var r=e.data;if(void 0===a.WORKER_ID&&r&&(a.WORKER_ID=r.workerId),"string"==typeof r.input)t.postMessage({workerId:a.WORKER_ID,results:a.parse(r.input,r.config),finished:!0});else if(t.File&&r.input instanceof File||r.input instanceof Object){var i=a.parse(r.input,r.config);i&&t.postMessage({workerId:a.WORKER_ID,results:i,finished:!0})}}),(h.prototype=Object.create(u.prototype)).constructor=h,(d.prototype=Object.create(u.prototype)).constructor=d,(f.prototype=Object.create(f.prototype)).constructor=f,(l.prototype=Object.create(u.prototype)).constructor=l,a},void 0!==(n=s.apply(t,[]))&&(e.exports=n)}}]);