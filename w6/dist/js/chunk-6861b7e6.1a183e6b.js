(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6861b7e6"],{"0b42":function(t,c,r){var e=r("da84"),o=r("e8b5"),n=r("68ee"),a=r("861d"),i=r("b622"),s=i("species"),u=e.Array;t.exports=function(t){var c;return o(t)&&(c=t.constructor,n(c)&&(c===u||o(c.prototype))?c=void 0:a(c)&&(c=c[s],null===c&&(c=void 0))),void 0===c?u:c}},"1dde":function(t,c,r){var e=r("d039"),o=r("b622"),n=r("2d00"),a=o("species");t.exports=function(t){return n>=51||!e((function(){var c=[],r=c.constructor={};return r[a]=function(){return{foo:1}},1!==c[t](Boolean).foo}))}},"65f0":function(t,c,r){var e=r("0b42");t.exports=function(t,c){return new(e(t))(0===c?0:c)}},8418:function(t,c,r){"use strict";var e=r("a04b"),o=r("9bf2"),n=r("5c6c");t.exports=function(t,c,r){var a=e(c);a in t?o.f(t,a,n(0,r)):t[a]=r}},"99af":function(t,c,r){"use strict";var e=r("23e7"),o=r("da84"),n=r("d039"),a=r("e8b5"),i=r("861d"),s=r("7b0b"),u=r("07fa"),d=r("8418"),f=r("65f0"),b=r("1dde"),l=r("b622"),p=r("2d00"),v=l("isConcatSpreadable"),h=9007199254740991,j="Maximum allowed index exceeded",g=o.TypeError,O=p>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),w=b("concat"),x=function(t){if(!i(t))return!1;var c=t[v];return void 0!==c?!!c:a(t)},y=!O||!w;e({target:"Array",proto:!0,forced:y},{concat:function(t){var c,r,e,o,n,a=s(this),i=f(a,0),b=0;for(c=-1,e=arguments.length;c<e;c++)if(n=-1===c?a:arguments[c],x(n)){if(o=u(n),b+o>h)throw g(j);for(r=0;r<o;r++,b++)r in n&&d(i,b,n[r])}else{if(b>=h)throw g(j);d(i,b++,n)}return i.length=b,i}})},e8b5:function(t,c,r){var e=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},fd15:function(t,c,r){"use strict";r.r(c);var e=r("7a23"),o={class:"container"},n=Object(e["g"])("h2",null,"產品列表",-1),a={class:"row row-cols-1 row-cols-lg-4 g-3"},i={class:"card h-100"},s=["src"],u={class:"card-body"},d={class:"card-title"},f={class:"card-text"},b=Object(e["h"])("more");function l(t,c,r,l,p,v){var h=Object(e["x"])("router-link");return Object(e["s"])(),Object(e["f"])("div",o,[n,Object(e["g"])("div",a,[(Object(e["s"])(!0),Object(e["f"])(e["a"],null,Object(e["w"])(p.products,(function(t){return Object(e["s"])(),Object(e["f"])("div",{class:"col",key:t.id},[Object(e["g"])("div",i,[Object(e["g"])("img",{src:t.imageUrl,class:"card-img-top",alt:"",style:{width:"100%",height:"200px","object-fit":"cover"}},null,8,s),Object(e["g"])("div",u,[Object(e["g"])("h5",d,Object(e["z"])(t.title),1),Object(e["g"])("p",f,Object(e["z"])(t.category),1),Object(e["i"])(h,{to:"/product/".concat(t.id),class:"btn btn-primary"},{default:Object(e["C"])((function(){return[b]})),_:2},1032,["to"])])])])})),128))])])}r("99af");var p={data:function(){return{products:[]}},methods:{getProducts:function(){var t=this;this.$http.get("".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("sally_hexschool","/products")).then((function(c){t.products=c.data.products}))}},mounted:function(){this.getProducts()}},v=r("6b0d"),h=r.n(v);const j=h()(p,[["render",l]]);c["default"]=j}}]);
//# sourceMappingURL=chunk-6861b7e6.1a183e6b.js.map