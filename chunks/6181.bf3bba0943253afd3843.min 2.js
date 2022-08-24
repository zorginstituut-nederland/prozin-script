"use strict";(self.webpackChunk_patternslib_patternslib=self.webpackChunk_patternslib_patternslib||[]).push([[6181],{17311:function(n,e,o){var t=o(87537),A=o.n(t),i=o(23645),a=o.n(i)()(A());a.push([n.id,'div.pat-modal{-webkit-box-sizing:border-box;position:fixed;z-index:9998;background-color:#efefef;border:1px solid #000;width:500px;margin-left:-250px;left:50%;margin-top:1em;margin-bottom:1em}div.pat-modal .filter-bar{margin-bottom:2em}div.pat-modal .filter-bar input[type=search]{float:right;width:14em}div.pat-modal .header{color:gray;padding:.5em 1.5em;height:1em;background-color:#fff;position:relative;z-index:1}div.pat-modal .header h1,div.pat-modal .header h2,div.pat-modal .header h3,div.pat-modal .header h4{margin:0;font:16px/20px "Helvetica Neue",Arial,Helvetica,Geneva,sans-serif;letter-spacing:1px;font-weight:bold;text-align:center}div.pat-modal .header .close-panel{position:absolute;color:gray;top:9px;right:9px;line-height:22px;height:22px;width:22px;padding:0;text-indent:-1000px;overflow:hidden;margin:0;filter:none;border-style:none;border-radius:50%;background-image:none;outline:none}div.pat-modal .header .close-panel:before{content:"󢀅";text-indent:0;position:absolute;top:0;right:0;width:22px;font:normal 20px/23px fontello}div.pat-modal .panel-content{background-color:#fff;padding:1.5em;position:relative;z-index:1;overflow:hidden}div.pat-modal.max-height .panel-content{overflow:auto;position:absolute;right:0;bottom:0;left:0;top:37px;z-index:1}div.pat-modal.large{width:768px;margin-left:-384px}div.pat-modal.small{width:400px;margin-left:-200px}div.pat-modal img{max-width:100%}div.pat-modal:before{position:absolute;top:-1px;left:-1px;right:-1px;bottom:-1px;content:" ";display:block;z-index:1;border:1px #dedede solid;box-shadow:0 .1em .4em rgba(0,0,0,.2);-moz-pointer-events:none;-webkit-pointer-events:none;pointer-events:none;-webkit-animation:none}div.pat-modal .wizard-box{margin:-1.5em -1.5em -1.55em -1.5em}div.pat-modal .wizard-box .panel-body{overflow:auto;padding:1.5em;background-color:#fff;margin-bottom:0;margin-top:0}div.pat-modal .wizard-box .panel-footer{margin:0;padding:.5em 1.5em;border-top:1px solid #dedede;height:1.6em;background-color:#efefef}div.pat-modal.max-height .wizard-box{overflow:hidden}div.pat-modal.max-height .panel-body{position:absolute;top:0;bottom:51px;right:0;left:0}div.pat-modal.max-height .panel-footer{position:absolute;bottom:0;right:0;left:0}div.pat-modal:after{content:" ";display:block;position:fixed;top:-10000px;right:-10000px;bottom:-10000px;left:-10000px;background-color:rgba(255,255,255,.98);z-index:-1;opacity:.98;-moz-animation:fadeIn 1s;-webkit-animation:fadeIn 1s;animation:fadeIn 1s;-webkit-animation-fill-mode:forwards}@media only screen and (max-width: 768px){div.pat-modal{width:100% !important;height:100% !important;z-index:10000;position:fixed !important;top:0 !important;right:0 !important;bottom:0 !important;left:0 !important;max-width:inherit !important;max-height:inherit !important;margin:0 !important;border:none !important}div.pat-modal .panel-content{height:100%;padding-top:4em;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}div.pat-modal .wizard-box{overflow:hidden}div.pat-modal .header{position:absolute;top:0;left:0;right:0;z-index:2}div.pat-modal .panel-body{position:absolute;top:2em;bottom:57px;right:0;left:0}div.pat-modal .panel-footer{position:absolute;bottom:0;right:0;left:0}}',"",{version:3,sources:["webpack://./src/pat/modal/_modal.scss","webpack://./_sass/_mixins.scss"],names:[],mappings:"AAAA,cAIA,6BACI,CAAA,cACA,CAAA,YACA,CAAA,wBACA,CAAA,qBAEA,CAAA,WACA,CAAA,kBACA,CAAA,QACA,CAAA,cACA,CAAA,iBACA,CAAA,0BAEA,iBACI,CAAA,6CAEA,WACI,CAAA,UACA,CAAA,sBAIR,UACI,CAAA,kBACA,CAAA,UAEA,CAAA,qBACA,CAAA,iBACA,CAAA,SACA,CAAA,oGAEA,QAII,CAAA,iEACA,CAAA,kBAEA,CAAA,gBACA,CAAA,iBACA,CAAA,mCAGJ,iBACI,CAAA,UACA,CAAA,OACA,CAAA,SACA,CAAA,gBACA,CAAA,WACA,CAAA,UACA,CAAA,SACA,CAAA,mBACA,CAAA,eACA,CAAA,QACA,CAAA,WACA,CAAA,iBACA,CAAA,iBACA,CAAA,qBACA,CAAA,YACA,CAAA,0CAEA,YACI,CAAA,aACA,CAAA,iBACA,CAAA,KACA,CAAA,OACA,CAAA,UACA,CAAA,8BACA,CAAA,6BAKZ,qBACI,CAAA,aACA,CAAA,iBACA,CAAA,SACA,CAAA,eACA,CAAA,wCAGJ,aACI,CAAA,iBACA,CAAA,OACA,CAAA,QACA,CAAA,MACA,CAAA,QACA,CAAA,SACA,CAAA,oBAGJ,WACI,CAAA,kBACA,CAAA,oBAGJ,WACI,CAAA,kBACA,CAAA,kBAGJ,cACI,CAAA,qBAGJ,iBACI,CAAA,QACA,CAAA,SACA,CAAA,UACA,CAAA,WACA,CAAA,WACA,CAAA,aACA,CAAA,SACA,CAAA,wBACA,CAAA,qCACA,CAAA,wBACA,CAAA,2BACA,CAAA,mBACA,CAAA,sBAGA,CAAA,0BAGJ,mCACI,CAAA,sCAEA,aACI,CAAA,aACA,CAAA,qBACA,CAAA,eACA,CAAA,YACA,CAAA,wCAGJ,QACI,CAAA,kBACA,CAAA,4BACA,CAAA,YACA,CAAA,wBACA,CAAA,qCAKJ,eACI,CAAA,qCAGJ,iBACI,CAAA,KACA,CAAA,WACA,CAAA,OACA,CAAA,MACA,CAAA,uCAGJ,iBACI,CAAA,QACA,CAAA,OACA,CAAA,MACA,CAAA,oBAIR,WACI,CAAA,aACA,CAAA,cACA,CAAA,YACA,CAAA,cACA,CAAA,eACA,CAAA,aACA,CAAA,sCACA,CAAA,UACA,CAAA,WACA,CAAA,wBAEA,CAAA,2BACA,CAAA,mBACA,CAAA,oCAEA,CAAA,0CCvLA,cDER,qBAyLQ,CAAA,sBACA,CAAA,aACA,CAAA,yBACA,CAAA,gBACA,CAAA,kBACA,CAAA,mBACA,CAAA,iBACA,CAAA,4BACA,CAAA,6BACA,CAAA,mBACA,CAAA,sBACA,CAAA,6BAEA,WACI,CAAA,eACA,CAAA,0BAEA,CAAA,6BACA,CAAA,qBACA,CAAA,0BAGJ,eACI,CAAA,sBAGJ,iBACI,CAAA,KACA,CAAA,MACA,CAAA,OACA,CAAA,SACA,CAAA,0BAGJ,iBACI,CAAA,OACA,CAAA,WACA,CAAA,OACA,CAAA,MACA,CAAA,4BAGJ,iBACI,CAAA,QACA,CAAA,OACA,CAAA,MACA,CAAA",sourcesContent:['@charset "UTF-8";\n@import "../../../_sass/settings";\n@import "../../../_sass/mixins";\n\ndiv.pat-modal {\n    -webkit-box-sizing: border-box;\n    position: fixed;\n    z-index: 9998;\n    background-color: #efefef;\n    // background-clip: padding-box;\n    border: 1px solid black;\n    width: 500px;\n    margin-left: -250px;\n    left: 50%;\n    margin-top: 1em;\n    margin-bottom: 1em;\n\n    .filter-bar {\n        margin-bottom: 2em;\n\n        input[type="search"] {\n            float: right;\n            width: 14em;\n        }\n    }\n\n    .header {\n        color: gray;\n        padding: 0.5em 1.5em;\n        // border-bottom: 0.1em solid #dedede;\n        height: 1em;\n        background-color: white;\n        position: relative;\n        z-index: 1;\n\n        h1,\n        h2,\n        h3,\n        h4 {\n            margin: 0;\n            font: 16px/20px "Helvetica Neue", Arial, Helvetica, Geneva,\n                sans-serif;\n            letter-spacing: 1px;\n            font-weight: bold;\n            text-align: center;\n        }\n\n        .close-panel {\n            position: absolute;\n            color: gray;\n            top: 9px;\n            right: 9px;\n            line-height: 22px;\n            height: 22px;\n            width: 22px;\n            padding: 0;\n            text-indent: -1000px;\n            overflow: hidden;\n            margin: 0;\n            filter: none;\n            border-style: none;\n            border-radius: 50%;\n            background-image: none;\n            outline: none;\n\n            &:before {\n                content: "#{$glyph-close}";\n                text-indent: 0;\n                position: absolute;\n                top: 0;\n                right: 0;\n                width: 22px;\n                font: normal 20px/23px fontello;\n            }\n        }\n    }\n\n    .panel-content {\n        background-color: white;\n        padding: 1.5em;\n        position: relative;\n        z-index: 1;\n        overflow: hidden;\n    }\n\n    &.max-height .panel-content {\n        overflow: auto;\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        top: 37px;\n        z-index: 1;\n    }\n\n    &.large {\n        width: 768px;\n        margin-left: -384px;\n    }\n\n    &.small {\n        width: 400px;\n        margin-left: -200px;\n    }\n\n    img {\n        max-width: 100%;\n    }\n\n    &:before {\n        position: absolute;\n        top: -1px;\n        left: -1px;\n        right: -1px;\n        bottom: -1px;\n        content: " ";\n        display: block;\n        z-index: 1;\n        border: 1px #dedede solid;\n        box-shadow: 0 0.1em 0.4em rgba(0, 0, 0, 0.2);\n        -moz-pointer-events: none;\n        -webkit-pointer-events: none;\n        pointer-events: none;\n\n        // Next line is a patch for Safari which inherits the animation on :before of the spinner even if the injection class has already been removed.\n        -webkit-animation: none;\n    }\n\n    .wizard-box {\n        margin: -1.5em -1.5em -1.55em -1.5em;\n\n        .panel-body {\n            overflow: auto;\n            padding: 1.5em;\n            background-color: white;\n            margin-bottom: 0;\n            margin-top: 0;\n        }\n\n        .panel-footer {\n            margin: 0;\n            padding: 0.5em 1.5em;\n            border-top: 1px solid #dedede;\n            height: 1.6em;\n            background-color: #efefef;\n        }\n    }\n\n    &.max-height {\n        .wizard-box {\n            overflow: hidden;\n        }\n\n        .panel-body {\n            position: absolute;\n            top: 0;\n            bottom: 51px;\n            right: 0;\n            left: 0;\n        }\n\n        .panel-footer {\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            left: 0;\n        }\n    }\n\n    &:after {\n        content: " ";\n        display: block;\n        position: fixed;\n        top: -10000px;\n        right: -10000px;\n        bottom: -10000px;\n        left: -10000px;\n        background-color: rgba(255, 255, 255, 0.98);\n        z-index: -1;\n        opacity: 0.98;\n\n        -moz-animation: fadeIn 1s;\n        -webkit-animation: fadeIn 1s;\n        animation: fadeIn 1s;\n\n        -webkit-animation-fill-mode: forwards;\n    }\n\n    @include screen-size(small) {\n        width: 100% !important;\n        height: 100% !important;\n        z-index: 10000;\n        position: fixed !important;\n        top: 0 !important;\n        right: 0 !important;\n        bottom: 0 !important;\n        left: 0 !important;\n        max-width: inherit !important;\n        max-height: inherit !important;\n        margin: 0 !important;\n        border: none !important;\n\n        .panel-content {\n            height: 100%;\n            padding-top: 4em;\n\n            -moz-box-sizing: border-box;\n            -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n        }\n\n        .wizard-box {\n            overflow: hidden;\n        }\n\n        .header {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            z-index: 2;\n        }\n\n        .panel-body {\n            position: absolute;\n            top: 2em;\n            bottom: 57px;\n            right: 0;\n            left: 0;\n        }\n\n        .panel-footer {\n            position: absolute;\n            bottom: 0;\n            right: 0;\n            left: 0;\n        }\n    }\n}\n','@mixin screen-size($media) {\n    @if $media == small {\n        @media only screen and (max-width: $break-small) {\n            @content;\n        }\n    } @else if $media == small-medium {\n        @media only screen and (max-width: $break-large - 1) {\n            @content;\n        }\n    } @else if $media == medium {\n        @media only screen and (min-width: $break-small + 1) and (max-width: $break-large - 1) {\n            @content;\n        }\n    } @else if $media == medium-large {\n        @media only screen and (min-width: $break-small + 1) {\n            @content;\n        }\n    } @else if $media == large {\n        @media only screen and (min-width: $break-large) {\n            @content;\n        }\n    }\n}\n\n@mixin clear-fix() {\n    &:after {\n        content: " ";\n        display: table;\n        clear: both;\n    }\n}\n\n@mixin clear {\n    @include clear-fix();\n}\n\n@mixin box-sizing() {\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n@mixin bumper() {\n    &.sticky-supported.bumped {\n        // position: -webkit-sticky !important;\n        // position: -moz-sticky !important;\n        // position: -ms-sticky !important;\n        // position: -o-sticky !important;\n        // top: 1px!important;\n    }\n}\n\n@mixin pat-rich() {\n    @include clear();\n\n    h1,\n    h2,\n    p,\n    ul,\n    ol,\n    table,\n    dl,\n    pre {\n        margin-bottom: 2rem;\n    }\n\n    ul,\n    ol {\n        li {\n            margin-left: 0;\n            padding-left: 1.5em;\n\n            &:before {\n                content: "•";\n                float: left;\n                margin-left: -1.2em;\n            }\n\n            &[class^="icon-"]:before,\n            &[class*=" icon-"]:before {\n                line-height: inherit;\n                margin-left: -1.5em;\n            }\n        }\n    }\n\n    h1 {\n        font-weight: 600;\n        font-size: 2em;\n        line-height: 130%;\n        margin-bottom: 0.7em;\n        letter-spacing: 0.05em;\n    }\n\n    h2 {\n        font-size: 1.5em;\n        line-height: 130%;\n        letter-spacing: 0.05em;\n        font-weight: 400;\n        margin-bottom: 0.7em;\n        letter-spacing: 0.05em;\n    }\n\n    h3 {\n        font-size: 1em;\n        // line-height: 130%;\n        letter-spacing: 0.05em;\n        font-weight: 400;\n        margin-bottom: 1em;\n    }\n\n    img {\n        max-width: 100%;\n        margin: 0 auto;\n        display: block;\n\n        &.float-before {\n            margin-right: 1em;\n            float: left;\n            top: 0.2em;\n            position: relative;\n        }\n\n        &.float-after {\n            margin-left: 1em;\n            float: right;\n            top: 0.2em;\n            position: relative;\n        }\n\n        @include screen-size(large) {\n            &.medium {\n                width: 33%;\n            }\n        }\n    }\n\n    figure {\n        margin-bottom: 2em;\n\n        figcaption {\n            font-style: italic;\n            font-size: 0.7em;\n            line-height: 1.3em;\n            color: rgba(0, 0, 0, 0.3);\n            border-bottom: 1px dotted rgba(0, 0, 0, 0.3);\n            padding: 0.4em 0.7em 0.4em;\n        }\n    }\n}\n\n@mixin pat-well() {\n    color: rgba(0, 0, 0, 0.6);\n    padding: 1em;\n    border: rgba(0, 0, 0, 0.05) solid 1px;\n    background-color: #efefef;\n    margin-bottom: 2em;\n    display: block;\n\n    &.success {\n        background-color: $colour-success;\n        color: white;\n\n        a {\n            color: white;\n        }\n\n        input {\n            color: $body-font-color;\n        }\n    }\n    &.notice {\n        background-color: $colour-notice;\n    }\n    &.warning {\n        background-color: $colour-warning;\n        color: white;\n\n        a {\n            color: white;\n        }\n\n        input {\n            color: $body-font-color;\n        }\n        // select { border: white, color: white;}\n    }\n\n    &.success,\n    &.warning {\n        input,\n        textarea,\n        select {\n            background-color: rgba(0, 0, 0, 0.3);\n            outline: white 1px solid;\n        }\n\n        select {\n            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAgLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiIFsNCgk8IUVOVElUWSBuc19mbG93cyAiaHR0cDovL25zLmFkb2JlLmNvbS9GbG93cy8xLjAvIj4NCl0+DQo8c3ZnIHZlcnNpb249IjEuMSINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyINCgkgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSIxMnB4IiBoZWlnaHQ9IjEwcHgiIHZpZXdCb3g9IjAgLTEuNDk2IDEyIDEwIiBvdmVyZmxvdz0idmlzaWJsZSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIC0xLjQ5NiAxMiAxMCINCgkgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZGVmcz4NCjwvZGVmcz4NCjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMCwwIDQuMjA1LDcuMDA5IDguNDEsMCAiLz4NCjwvc3ZnPg0K);\n        }\n    }\n}\n\n@mixin pat-avatar(\n    $border-radius: 50%,\n    $border: 0.055556em solid rgba(0, 0, 0, 0.2),\n    $height: 2em,\n    $width: 2em\n) {\n    display: inline-block;\n    overflow: hidden;\n    border-radius: $border-radius;\n    border: $border;\n    height: $height;\n    width: $width;\n    img {\n        width: 100%;\n    }\n}\n\n@mixin pat-separator($height: 0.05em, $margin: 1em 10% 2em, $colour: gray) {\n    background-color: $colour;\n    height: $height;\n    border: none;\n    display: block;\n    margin: $margin;\n    clear: both;\n}\n\n@mixin pat-message() {\n    color: rgba(0, 0, 0, 0.5);\n    padding: 0.8em;\n    margin-bottom: 1em;\n    border: rgba(0, 0, 0, 0.05) solid 0.2rem;\n    background-color: #efefef;\n\n    &.success {\n        background-color: $colour-success;\n        color: darken($colour-success, 50%);\n    }\n    &.notice {\n        background-color: $colour-notice;\n    }\n    &.warning {\n        background-color: $colour-warning;\n        color: white;\n    }\n}\n'],sourceRoot:""}]),e.Z=a},23645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var o="",t=void 0!==e[5];return e[4]&&(o+="@supports (".concat(e[4],") {")),e[2]&&(o+="@media ".concat(e[2]," {")),t&&(o+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),o+=n(e),t&&(o+="}"),e[2]&&(o+="}"),e[4]&&(o+="}"),o})).join("")},e.i=function(n,o,t,A,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var r=0;r<this.length;r++){var d=this[r][0];null!=d&&(a[d]=!0)}for(var l=0;l<n.length;l++){var m=[].concat(n[l]);t&&a[m[0]]||(void 0!==i&&(void 0===m[5]||(m[1]="@layer".concat(m[5].length>0?" ".concat(m[5]):""," {").concat(m[1],"}")),m[5]=i),o&&(m[2]?(m[1]="@media ".concat(m[2]," {").concat(m[1],"}"),m[2]=o):m[2]=o),A&&(m[4]?(m[1]="@supports (".concat(m[4],") {").concat(m[1],"}"),m[4]=A):m[4]="".concat(A)),e.push(m))}},e}},87537:function(n){n.exports=function(n){var e=n[1],o=n[3];if(!o)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(A," */"),a=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([i]).join("\n")}return[e].join("\n")}},46181:function(n,e,o){o.r(e);var t=o(93379),A=o.n(t),i=o(7795),a=o.n(i),r=o(3565),d=o.n(r),l=o(19216),m=o.n(l),p=o(44589),c=o.n(p),s=o(17311),C={};C.styleTagTransform=c(),C.setAttributes=d(),C.insert=function(n){var e=document.head.querySelectorAll("*")[0];e?document.head.insertBefore(n,e):document.head.append(n)},C.domAPI=a(),C.insertStyleElement=m();A()(s.Z,C);e.default=s.Z&&s.Z.locals?s.Z.locals:void 0},93379:function(n){var e=[];function o(n){for(var o=-1,t=0;t<e.length;t++)if(e[t].identifier===n){o=t;break}return o}function t(n,t){for(var i={},a=[],r=0;r<n.length;r++){var d=n[r],l=t.base?d[0]+t.base:d[0],m=i[l]||0,p="".concat(l," ").concat(m);i[l]=m+1;var c=o(p),s={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==c)e[c].references++,e[c].updater(s);else{var C=A(s,t);t.byIndex=r,e.splice(r,0,{identifier:p,updater:C,references:1})}a.push(p)}return a}function A(n,e){var o=e.domAPI(e);o.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;o.update(n=e)}else o.remove()}}n.exports=function(n,A){var i=t(n=n||[],A=A||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var r=o(i[a]);e[r].references--}for(var d=t(n,A),l=0;l<i.length;l++){var m=o(i[l]);0===e[m].references&&(e[m].updater(),e.splice(m,1))}i=d}}},19216:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},3565:function(n,e,o){n.exports=function(n){var e=o.nc;e&&n.setAttribute("nonce",e)}},7795:function(n){n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(o){!function(n,e,o){var t="";o.supports&&(t+="@supports (".concat(o.supports,") {")),o.media&&(t+="@media ".concat(o.media," {"));var A=void 0!==o.layer;A&&(t+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),t+=o.css,A&&(t+="}"),o.media&&(t+="}"),o.supports&&(t+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,o)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},44589:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);
//# sourceMappingURL=6181.bf3bba0943253afd3843.min.js.map