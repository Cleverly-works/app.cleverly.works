"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9546],{99546:function(e,n,r){r.r(n);var o=r(1638),t=r(67294),a=r(24248),l=r(38485),i=function(e){return t.createElement(l.Z,(0,o.Z)({name:"iconDesk"},e,{mainSize:480}),t.createElement("path",{d:"M472,72H8c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h8v280c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V216h224v192h176V120h8c4.418,0,8-3.582,8-8V80C480,75.582,476.418,72,472,72z M48,392H32V120h16V392z M288,200H64v-16h224V200z M288,168H64v-48h224V168z M448,392H304v-16h144V392z M448,360H304v-48h144V360z M448,296H304v-80h144V296z M448,200H304v-80h144V200zM464,104H16V88h448V104z"}),t.createElement("rect",{x:"360",y:"136",width:"32",height:"16"}),t.createElement("rect",{x:"160",y:"136",width:"32",height:"16"}),t.createElement("rect",{x:"360",y:"232",width:"32",height:"16"}),t.createElement("rect",{x:"360",y:"328",width:"32",height:"16"}))};i.displayName="DeskIcon",i.propTypes=a.Z,n.default=i},24248:function(e,n,r){var o=r(45697),t={colour:o.string,disabled:o.bool,disabledColour:o.string,fixColour:o.string,hoverColour:(0,o.oneOfType)([o.bool,o.string]),onClick:o.func,size:(0,o.oneOfType)([o.number,o.string])};n.Z=t},38485:function(e,n,r){var o,t,a,l,i=r(19017),c=r(1638),s=r(15851),u=r(67294),h=r(87108),d=["children","colour","disabled","disabledColour","hoverColour","onClick","size","translate"],v=function(e){var n=e.children,r=e.colour,o=e.disabled,t=e.disabledColour,a=e.hoverColour,l=e.onClick,i=e.size,h=e.translate,v=(0,s.Z)(e,d),b=v.mainSize;if("string"==typeof i){var f=22;switch(i){case"xxxs":f=8;break;case"xxs":f=12;break;case"xs":f=16;break;case"sm":f=20;break;case"md":f=24;break;case"lg":f=32;break;case"xl":f=36;break;case"xxl":f=40;break;case"xxxl":f=48;break;default:f=22}i=f}else i=i||22;var x=1;return b&&i!==b&&(x=Number(i/b)),u.createElement(C,(0,c.Z)({colour:r,disabled:o,disabledColour:t,hoverColour:a,onClick:l,scale:x,size:i,translate:h,xmlns:"http://www.w3.org/2000/svg"},v),n)};v.displayName="IconWrapper";var b={DEFAULT:"default",HOVER:"hover"},f=function(e,n){var r=n.colour,o=n.context,t=n.disabled,a=n.disabledColour,l=n.hoverColour,i=n.theme,c=i.ICONS,s=i.THEME_COLOUR,u=o?s.context:r||c.defaultIconColour;return e===b.DEFAULT?t&&a?a:t?c.disabledIconColour:u:e===b.HOVER&&l?(!0===l&&(l=c.hoverIconColour),t&&a?a:t?c.disabledIconColour:l||c.hoverIconColour||u):t?a||c.disabledIconColour:u},C=h.ZP.svg(o||(o=(0,i.Z)(["\n  ","\n\n  path {\n    transition: fill 0.2s ease;\n\n    fill: ",";\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"])),function(e){var n=e.size;if("number"==typeof n)return(0,h.iv)(t||(t=(0,i.Z)(["\n        height: ","px;\n        width: ","px;\n      "])),n,n)},function(e){return f(b.DEFAULT,e)},function(e){var n=e.scale,r=e.translate;return n&&(0,h.iv)(a||(a=(0,i.Z)(["\n          transform: scale(",") ",";\n        "])),n,r||"")},function(e){return f(b.HOVER,e)},function(e){var n=e.onClick,r=e.disabled;return n&&!r&&(0,h.iv)(l||(l=(0,i.Z)(["\n      cursor: pointer;\n    "])))});n.Z=v}}]);