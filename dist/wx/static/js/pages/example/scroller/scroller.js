var __CML__GLOBAL=require("../../../manifest.js");__CML__GLOBAL.webpackJsonp([15],{246:function(t,e,o){o(247),o(248)},247:function(t,e){},248:function(t,e,o){function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(0),c=n(i),a=o(2),r=n(a),u=o(1),l=n(u),h=function(){function t(){(0,c.default)(this,t),this.data={bottomOffset:20,scrollDirection:"vertical",panels:[],rows:[],scrollTop:0},this.computed={},this.watch={},this.methods={change:function(t){var e=t.currentTarget,o=e.dataset,n=o.idx,i=this.panels[n];i&&(i.height=200===i.height?400:200,i.width=330===i.width?730:330,i.computedStyle="height:"+i.height+"cpx;width:"+i.width+"cpx;background-color:"+i.bgc+";opacity:"+i.opacity)},randomfn:function(){for(var t=[],e=1;e<=40;e++){var o={label:e,height:200,width:730,bgc:"#69BE96",opacity:1};o.computedStyle="height:"+o.height+"cpx;width:"+o.width+"cpx;background-color:"+o.bgc+";opacity:"+o.opacity+";",t.push(o)}return t},onScroll:function(t){console.log("scroll")},onBottom:function(t){console.log("onBottom")}}}return(0,r.default)(t,[{key:"created",value:function(t){this.panels=this.randomfn();for(var e=0;e<30;e++)this.rows.push("row "+e);console.log("demo page created:",t)}},{key:"mounted",value:function(){var t=this;setTimeout(function(){t.scrollTop=2e3},2e3)}}]),t}();e.default=new h,e.default=l.default.createPage(e.default).getOptions()}},[246]);