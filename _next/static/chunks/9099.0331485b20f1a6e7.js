"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9099],{29099:function(e,n,r){r.r(n);var o=r(18391),a=r(67294),l=r(820),i=r(47736),t=function(e){return a.createElement(i.Z,(0,o.Z)({},e,{mainSize:24}),a.createElement("path",{d:"M11.499 16.124C13.7584 16.124 15.5899 14.2772 15.5899 11.999V5.12402C15.5899 2.84582 13.7584 0.999023 11.499 0.999023C9.23965 0.999023 7.40811 2.84582 7.40811 5.12402V11.999C7.40811 14.2772 9.23965 16.124 11.499 16.124ZM18.3172 9.24902H17.6354C17.2587 9.24902 16.9536 9.55668 16.9536 9.93652V11.999C16.9536 15.2131 14.2054 17.7921 10.954 17.4724C8.12019 17.1935 6.04448 14.6248 6.04448 11.7541V9.93652C6.04448 9.55668 5.73936 9.24902 5.36266 9.24902H4.68084C4.30414 9.24902 3.99902 9.55668 3.99902 9.93652V11.6621C3.99902 15.5139 6.72502 18.9475 10.4763 19.4691V20.9365H8.08993C7.71323 20.9365 7.40811 21.2442 7.40811 21.624V22.3115C7.40811 22.6914 7.71323 22.999 8.08993 22.999H14.9081C15.2848 22.999 15.5899 22.6914 15.5899 22.3115V21.624C15.5899 21.2442 15.2848 20.9365 14.9081 20.9365H12.5218V19.4855C16.1742 18.9802 18.999 15.8189 18.999 11.999V9.93652C18.999 9.55668 18.6939 9.24902 18.3172 9.24902Z"}))};t.displayName="MicIcon",t.propTypes=l.Z,n.default=t},820:function(e,n,r){var o=r(45697),a={colour:o.string,disabled:o.bool,disabledColour:o.string,fixColour:o.string,hoverColour:(0,o.oneOfType)([o.bool,o.string]),onClick:o.func,size:(0,o.oneOfType)([o.number,o.string])};n.Z=a},47736:function(e,n,r){var o,a,l,i,t=r(51174),s=r(18391),c=r(66080),u=r(67294),C=r(10367),d=["children","colour","disabled","disabledColour","hoverColour","onClick","size","translate"],b=function(e){var n=e.children,r=e.colour,o=e.disabled,a=e.disabledColour,l=e.hoverColour,i=e.onClick,t=e.size,C=e.translate,b=(0,c.Z)(e,d),f=b.mainSize;if("string"==typeof t){var v=22;switch(t){case"xxxs":v=8;break;case"xxs":v=12;break;case"xs":v=16;break;case"sm":v=20;break;case"md":v=24;break;case"lg":v=32;break;case"xl":v=36;break;case"xxl":v=40;break;case"xxxl":v=48;break;default:v=22}t=v}else t=t||22;var p=1;return f&&t!==f&&(p=Number(t/f)),u.createElement(h,(0,s.Z)({colour:r,disabled:o,disabledColour:a,hoverColour:l,onClick:i,scale:p,size:t,translate:C,xmlns:"http://www.w3.org/2000/svg"},b),n)};b.displayName="IconWrapper";var f={DEFAULT:"default",HOVER:"hover"},v=function(e,n){var r=n.colour,o=n.context,a=n.disabled,l=n.disabledColour,i=n.hoverColour,t=n.theme,s=t.ICONS,c=t.THEME_COLOUR,u=o?c.context:r||s.defaultIconColour;return e===f.DEFAULT?a&&l?l:a?s.disabledIconColour:u:e===f.HOVER&&i?(!0===i&&(i=s.hoverIconColour),a&&l?l:a?s.disabledIconColour:i||s.hoverIconColour||u):a?l||s.disabledIconColour:u},h=C.ZP.svg(o||(o=(0,t.Z)(["\n  ","\n\n  path {\n    transition: fill 0.2s ease;\n\n    fill: ",";\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"])),function(e){var n=e.size;if("number"==typeof n)return(0,C.iv)(a||(a=(0,t.Z)(["\n        height: ","px;\n        width: ","px;\n      "])),n,n)},function(e){return v(f.DEFAULT,e)},function(e){var n=e.scale,r=e.translate;return n&&(0,C.iv)(l||(l=(0,t.Z)(["\n          transform: scale(",") ",";\n        "])),n,r||"")},function(e){return v(f.HOVER,e)},function(e){var n=e.onClick,r=e.disabled;return n&&!r&&(0,C.iv)(i||(i=(0,t.Z)(["\n      cursor: pointer;\n    "])))});n.Z=b}}]);