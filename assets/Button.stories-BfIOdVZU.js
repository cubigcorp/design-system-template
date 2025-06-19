import{j as i}from"./jsx-runtime-C521NZrc.js";import{d as A,m as Oe,f as u,l as o}from"./fontWeight-DZ4xRVKn.js";import{c as r,b as Me}from"./brandColor-CZkv5cbZ.js";import{r as H}from"./radius-DaoU83SK.js";import{b as d,t as v,n as f,p as h}from"./borderColor-DgvP3RHu.js";import{R as y}from"./iframe-BOAPPjlS.js";const g={t4:["14px",{"@media (max-width: 768px)":["14px"],"@media (max-width: 375px)":["14px"]}],t5:["16px",{"@media (max-width: 768px)":["16px"],"@media (max-width: 375px)":["14px"]}]},De=Oe`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ce=A.div`
  width: ${({size:e})=>e==="small"?"14px":e==="large"?"18px":"16px"};
  height: ${({size:e})=>e==="small"?"14px":e==="large"?"18px":"16px"};
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: ${De} 0.8s linear infinite;
  display: inline-block;
`,G=({size:e="medium"})=>i.jsx(Ce,{size:e});G.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}}}};const Ve=A.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: ${H["rounded-2"]};
  font-weight: ${u[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({size:e="medium",iconOnly:a=!1})=>{if(a)switch(e){case"small":return o`
            padding: 12px;
            width: 32px;
            height: 32px;
            svg {
              width: 16px;
              height: 16px;
            }
          `;case"large":return o`
            padding: 8px;
            width: 48px;
            height: 48px;
            svg {
              width: 24px;
              height: 24px;
            }
          `;default:return o`
            padding: 10px;
            width: 40px;
            height: 40px;
            svg {
              width: 20px;
              height: 20px;
            }
          `}switch(e){case"small":return o`
          padding: 6px 12px;
          height: 32px;
          font-size: ${g.t4[0]};
          font-weight: ${u[500]};
        `;case"large":return o`
          padding: 12px 16px;
          height: 48px;
          font-size: ${g.t5[0]};
          font-weight: ${u[500]};
        `;default:return o`
          padding: 8px 16px;
          height: 40px;
          font-size: ${g.t5[0]};
          font-weight: ${u[500]};
        `}}}

  // 색상 변형
  ${({variant:e="primary",state:a="default"})=>{const t=()=>{switch(e){case"primary":switch(a){case"hovered":return r.gray[925];case"pressed":return r.gray[900];case"focused":return r.gray[850];default:return r.gray[950]}case"secondary":switch(a){case"hovered":return r.gray[50];case"pressed":return r.gray[100];case"focused":return r.gray[200];default:return r.gray[25]}case"brand":switch(a){case"hovered":case"focused":return r.deeppurple[600];case"pressed":return r.deeppurple[400];default:return r.deeppurple[800]}case"negative":switch(a){case"hovered":case"focused":return r.red[500];case"pressed":return r.red[400];default:return r.red[600]}case"positive":switch(a){case"hovered":case"focused":return r.green[500];case"pressed":return r.green[400];default:return r.green[600]}default:return r.gray[950]}},s=()=>{switch(e){case"primary":return r.gray[800];case"secondary":return a==="focused"?d.light["color-border-focused"]:d.light["color-border-primary"];case"brand":switch(a){case"hovered":case"focused":return r.deeppurple[400];case"pressed":return r.deeppurple[300];default:return d.light["color-border-brand"]}case"negative":switch(a){case"hovered":case"focused":return r.red[400];case"pressed":return r.red[300];default:return r.red[400]}case"positive":switch(a){case"hovered":case"focused":return r.green[400];case"pressed":return r.green[300];default:return r.green[500]}default:return r.gray[800]}},n=()=>{switch(e){case"primary":return r.common[100];case"secondary":return v.light["fg-neutral-strong"];case"brand":case"negative":case"positive":return r.common[100];default:return r.common[100]}};return o`
      background-color: ${t()};
      color: ${n()};
      border: 1px solid ${s()};

      &:focus {
        outline: none;
        border-color: ${e==="secondary"?d.light["color-border-focused"]:s()};
      }
    `}}

  // 비활성화 상태
  ${({disabled:e,variant:a="primary"})=>e&&o`
      background-color: ${a==="primary"?r.gray[900]:r.gray[50]} !important;
      border-color: ${a==="primary"?r.gray[800]:d.light["color-border-primary"]} !important;
      color: ${a==="primary"?v.light["fg-neutral-alternative"]:v.light["fg-neutral-disable"]} !important;
      pointer-events: none;
      cursor: not-allowed;
    `}

  // 로딩 상태
  ${({loading:e})=>e&&o`
      cursor: wait;
      pointer-events: none;
    `}

  // 아이콘 전용 버튼
  ${({iconOnly:e,size:a="medium"})=>e&&o`
      padding: ${a==="small"?"8px":a==="large"?"12px":"10px"};
      width: ${a==="small"?"32px":a==="large"?"48px":"40px"};
    `}
`,b=({variant:e="primary",size:a="medium",state:t="default",disabled:s=!1,loading:n=!1,iconOnly:m=!1,leadingIcon:w,trailingIcon:$,label:T,onClick:S,className:B})=>{const[q,l]=y.useState(t);y.useEffect(()=>{l(t)},[t]);const j=()=>{!s&&!n&&t==="default"&&l("hovered")},I=()=>{!s&&!n&&l(t)},M=()=>{!s&&!n&&t==="default"&&l("pressed")},O=()=>{!s&&!n&&t==="default"&&l("hovered")},D=()=>{!s&&!n&&t==="default"&&l("focused")},C=()=>{!s&&!n&&l(t)};return i.jsx(Ve,{variant:e,size:a,state:t!=="default"?t:q,disabled:s,loading:n,iconOnly:m,onClick:S,className:B,onMouseEnter:j,onMouseLeave:I,onMouseDown:M,onMouseUp:O,onFocus:D,onBlur:C,children:n?i.jsx(G,{}):i.jsxs(i.Fragment,{children:[w,!m&&T,$]})})};b.__docgenInfo={description:"",methods:[],displayName:"SolidButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Fe=A.button`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: transparent;
  border-radius: ${H["rounded-2"]};
  font-weight: ${u[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // 크기 변형
  ${({size:e="medium",iconOnly:a=!1})=>{if(a)switch(e){case"small":return o`
            padding: 12px;
            width: 32px;
            height: 32px;
            svg {
              width: 16px;
              height: 16px;
            }
          `;case"large":return o`
            padding: 8px;
            width: 48px;
            height: 48px;
            svg {
              width: 24px;
              height: 24px;
            }
          `;default:return o`
            padding: 10px;
            width: 40px;
            height: 40px;
            svg {
              width: 20px;
              height: 20px;
            }
          `}switch(e){case"small":return o`
          padding: 6px 12px;
          height: 32px;
          font-size: ${g.t4[0]};
          font-weight: ${u[500]};
        `;case"large":return o`
          padding: 12px 16px;
          height: 48px;
          font-size: ${g.t5[0]};
          font-weight: ${u[500]};
        `;default:return o`
          padding: 8px 16px;
          height: 40px;
          font-size: ${g.t5[0]};
          font-weight: ${u[500]};
        `}}}

  // 색상 변형
  ${({variant:e="primary",state:a="default"})=>{const t=()=>{switch(e){case"secondary":switch(a){case"focused":return d.light["color-border-focused"];default:return d.light["color-border-primary"]}case"brand":switch(a){case"focused":return d.light["color-border-brand"];default:return r.deeppurple[200]}case"positive":switch(a){case"hovered":return r.green[400];case"pressed":return r.green[300];case"focused":return r.green[400];default:return r.green[500]}case"negative":switch(a){case"focused":return d.light["color-border-negative"];default:return r.red[200]}default:return r.blue[500]}},s=()=>{switch(e){case"secondary":return v.light["fg-neutral-strong"];case"brand":return Me.light["fg-brand-strong"];case"positive":return h.light["fg-positive-strong"];case"negative":return f.light["fg-negative-strong"];default:return r.blue[500]}},n=()=>{switch(e){case"secondary":switch(a){case"hovered":return`${r.gray[950]}0D`;case"pressed":return`${r.gray[950]}14`;case"focused":return`${r.gray[950]}1F`;default:return"transparent"}case"brand":switch(a){case"hovered":return`${r.deeppurple[800]}0D`;case"pressed":return`${r.deeppurple[800]}14`;case"focused":return`${r.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(a){case"hovered":return`${h.light["bg-positive-primary-default"]}0D`;case"pressed":return`${h.light["bg-positive-primary-default"]}14`;case"focused":return`${h.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(a){case"hovered":return`${f.light["bg-negative-primary-default"]}0D`;case"pressed":return`${f.light["bg-negative-primary-default"]}14`;case"focused":return`${f.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}};return o`
      border: 1px solid ${t()};
      color: ${s()};
      background-color: ${n()};

      &:focus {
        outline: 2px solid ${r.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:e})=>e&&o`
      border-color: ${d.light["color-border-primary"]} !important;
      color: ${v.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: ${r.gray[50]} !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:e})=>e&&o`
      cursor: wait;
      pointer-events: none;
    `}

  // 아이콘 전용 버튼
  ${({iconOnly:e,size:a="medium"})=>e&&o`
      padding: ${a==="small"?"8px":a==="large"?"12px":"10px"};
      width: ${a==="small"?"32px":a==="large"?"48px":"40px"};
    `}
`,V=({variant:e="primary",size:a="medium",state:t="default",disabled:s=!1,loading:n=!1,iconOnly:m=!1,leadingIcon:w,trailingIcon:$,label:T,onClick:S,className:B})=>{const[q,l]=y.useState(t);y.useEffect(()=>{l(t)},[t]);const j=()=>{!s&&!n&&t==="default"&&l("hovered")},I=()=>{!s&&!n&&l(t)},M=()=>{!s&&!n&&t==="default"&&l("pressed")},O=()=>{!s&&!n&&t==="default"&&l("hovered")},D=()=>{!s&&!n&&t==="default"&&l("focused")},C=()=>{!s&&!n&&l(t)};return i.jsx(Fe,{variant:e,size:a,state:t!=="default"?t:q,disabled:s,loading:n,iconOnly:m,onClick:S,className:B,onMouseEnter:j,onMouseLeave:I,onMouseDown:M,onMouseUp:O,onFocus:D,onBlur:C,children:n?i.jsx(G,{}):i.jsxs(i.Fragment,{children:[w,!m&&T,$]})})};V.__docgenInfo={description:"",methods:[],displayName:"OutlineButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ke=A.button`
  // 기본 스타일
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: transparent;
  border: none;
  border-radius: ${H["rounded-2"]};
  font-weight: ${u[500]};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  // 크기 변형
  ${({size:e="medium",iconOnly:a=!1})=>{if(a)switch(e){case"small":return o`
            padding: 12px;
            width: 32px;
            height: 32px;
            svg {
              width: 16px;
              height: 16px;
            }
          `;case"large":return o`
            padding: 8px;
            width: 48px;
            height: 48px;
            svg {
              width: 24px;
              height: 24px;
            }
          `;default:return o`
            padding: 10px;
            width: 40px;
            height: 40px;
            svg {
              width: 20px;
              height: 20px;
            }
          `}switch(e){case"small":return o`
          padding: 6px 12px;
          height: 32px;
          font-size: ${g.t4[0]};
          font-weight: ${u[500]};
        `;case"large":return o`
          padding: 12px 16px;
          height: 48px;
          font-size: ${g.t5[0]};
          font-weight: ${u[500]};
        `;default:return o`
          padding: 8px 16px;
          height: 40px;
          font-size: ${g.t5[0]};
          font-weight: ${u[500]};
        `}}}

  // 색상 변형
  ${({variant:e="primary",state:a="default"})=>{const t=()=>{switch(e){case"secondary":return v.light["fg-neutral-strong"];case"brand":return Me.light["fg-brand-strong"];case"positive":return h.light["fg-positive-strong"];case"negative":return f.light["fg-negative-strong"];default:return v.light["fg-neutral-strong"]}},s=()=>{switch(e){case"secondary":switch(a){case"hovered":return`${r.gray[950]}0D`;case"pressed":return`${r.gray[950]}14`;case"focused":return`${r.gray[950]}1F`;default:return"transparent"}case"brand":switch(a){case"hovered":return`${r.deeppurple[800]}0D`;case"pressed":return`${r.deeppurple[800]}14`;case"focused":return`${r.deeppurple[800]}1F`;default:return"transparent"}case"positive":switch(a){case"hovered":return`${h.light["bg-positive-primary-default"]}0D`;case"pressed":return`${h.light["bg-positive-primary-default"]}14`;case"focused":return`${h.light["bg-positive-primary-default"]}1F`;default:return"transparent"}case"negative":switch(a){case"hovered":return`${f.light["bg-negative-primary-default"]}0D`;case"pressed":return`${f.light["bg-negative-primary-default"]}14`;case"focused":return`${f.light["bg-negative-primary-default"]}1F`;default:return"transparent"}default:return"transparent"}},n=()=>{if(a==="focused")switch(e){case"secondary":return d.light["color-border-focused"];case"brand":return d.light["color-border-brand"];case"positive":return d.light["color-border-positive"];case"negative":return d.light["color-border-negative"];default:return"transparent"}return"transparent"};return o`
      color: ${t()};
      background-color: ${s()};
      border: 1px solid ${n()};

      &:focus {
        outline: 2px solid ${r.blue[300]};
        outline-offset: 2px;
      }
    `}}

  // 비활성화 상태
  ${({disabled:e})=>e&&o`
      color: ${v.light["fg-neutral-disable"]} !important;
      cursor: not-allowed;
      background-color: transparent !important;
      pointer-events: none;
    `}

  // 로딩 상태
  ${({loading:e})=>e&&o`
      cursor: wait;
      pointer-events: none;
    `}

  // 아이콘 전용 버튼
  ${({iconOnly:e,size:a="medium"})=>e&&o`
      padding: ${a==="small"?"8px":a==="large"?"12px":"10px"};
      width: ${a==="small"?"32px":a==="large"?"48px":"40px"};
    `}
`,F=({variant:e="secondary",size:a="medium",state:t="default",disabled:s=!1,loading:n=!1,iconOnly:m=!1,leadingIcon:w,trailingIcon:$,label:T,onClick:S,className:B})=>{const[q,l]=y.useState(t);y.useEffect(()=>{l(t)},[t]);const j=()=>{!s&&!n&&t==="default"&&l("hovered")},I=()=>{!s&&!n&&l(t)},M=()=>{!s&&!n&&t==="default"&&l("pressed")},O=()=>{!s&&!n&&t==="default"&&l("hovered")},D=()=>{!s&&!n&&t==="default"&&l("focused")},C=()=>{!s&&!n&&l(t)};return i.jsx(ke,{variant:e,size:a,state:t!=="default"?t:q,disabled:s,loading:n,iconOnly:m,onClick:S,className:B,onMouseEnter:j,onMouseLeave:I,onMouseDown:M,onMouseUp:O,onFocus:D,onBlur:C,children:n?i.jsx(G,{}):i.jsxs(i.Fragment,{children:[w,!m&&T,$]})})};F.__docgenInfo={description:"",methods:[],displayName:"TextButton",props:{variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "brand"\r
| "positive"\r
| "negative"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"brand"'},{name:"literal",value:'"positive"'},{name:"literal",value:'"negative"'}]},description:"",defaultValue:{value:'"secondary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hovered" | "pressed" | "focused"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hovered"'},{name:"literal",value:'"pressed"'},{name:"literal",value:'"focused"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ze={title:"Components/Button",component:b,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"state가 'default'일 때 마우스를 올리면(hover) 'hovered', 클릭하면(press) 'pressed', 포커스하면(focus) 'focused' 상태로 변경됩니다. state prop으로 특정 상태를 직접 지정할 수도 있습니다."}}}},x={render:e=>i.jsx(b,{...e}),args:{variant:"primary",size:"medium",state:"default",label:"Button"}},k={render:e=>i.jsx(b,{...e}),args:{...x.args,leadingIcon:i.jsx("span",{children:"🚀"})}},N={render:e=>i.jsx(b,{...e}),args:{...x.args,disabled:!0}},L={render:e=>i.jsx(b,{...e}),args:{...x.args,loading:!0}},p={render:e=>i.jsx(V,{...e}),args:{variant:"secondary",size:"medium",state:"default",label:"Button"},argTypes:{variant:{control:{type:"radio"},options:["secondary","brand","positive","negative"]}}},E={render:e=>i.jsx(V,{...e}),args:{...p.args,leadingIcon:i.jsx("span",{children:"🚀"})},argTypes:{...p.argTypes}},_={render:e=>i.jsx(V,{...e}),args:{...p.args,disabled:!0},argTypes:{...p.argTypes}},R={render:e=>i.jsx(V,{...e}),args:{...p.args,loading:!0},argTypes:{...p.argTypes}},c={render:e=>i.jsx(F,{...e}),args:{variant:"secondary",size:"medium",state:"default",label:"Button"},argTypes:{variant:{control:{type:"radio"},options:["secondary","brand","positive","negative"]}}},W={render:e=>i.jsx(F,{...e}),args:{...c.args,leadingIcon:i.jsx("span",{children:"🚀"})},argTypes:{...c.argTypes}},z={render:e=>i.jsx(F,{...e}),args:{...c.args,disabled:!0},argTypes:{...c.argTypes}},U={render:e=>i.jsx(F,{...e}),args:{...c.args,loading:!0},argTypes:{...c.argTypes}};var J,K,P;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <SolidButton {...args} />,
  args: {
    variant: "primary",
    size: "medium",
    state: "default",
    label: "Button"
  }
}`,...(P=(K=x.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var Q,X,Y;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: args => <SolidButton {...args} />,
  args: {
    ...Solid.args,
    leadingIcon: <span>🚀</span>
  }
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <SolidButton {...args} />,
  args: {
    ...Solid.args,
    disabled: true
  }
}`,...(re=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,ne;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: args => <SolidButton {...args} />,
  args: {
    ...Solid.args,
    loading: true
  }
}`,...(ne=(te=L.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,oe,ie;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args} />,
  args: {
    variant: "secondary",
    size: "medium",
    state: "default",
    label: "Button"
  },
  argTypes: {
    variant: {
      control: {
        type: "radio"
      },
      options: ["secondary", "brand", "positive", "negative"]
    }
  }
}`,...(ie=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,de,ue;E.parameters={...E.parameters,docs:{...(le=E.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    leadingIcon: <span>🚀</span>
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(ue=(de=E.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,ce,ge;_.parameters={..._.parameters,docs:{...(pe=_.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    disabled: true
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(ge=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var me,fe,he;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: args => <OutlineButton {...args} />,
  args: {
    ...Outline.args,
    loading: true
  },
  argTypes: {
    ...Outline.argTypes
  }
}`,...(he=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ve,xe,ye;c.parameters={...c.parameters,docs:{...(ve=c.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: args => <TextButton {...args} />,
  args: {
    variant: "secondary",
    size: "medium",
    state: "default",
    label: "Button"
  },
  argTypes: {
    variant: {
      control: {
        type: "radio"
      },
      options: ["secondary", "brand", "positive", "negative"]
    }
  }
}`,...(ye=(xe=c.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var be,we,$e;W.parameters={...W.parameters,docs:{...(be=W.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: args => <TextButton {...args} />,
  args: {
    ...Text.args,
    leadingIcon: <span>🚀</span>
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...($e=(we=W.parameters)==null?void 0:we.docs)==null?void 0:$e.source}}};var Te,Se,Be;z.parameters={...z.parameters,docs:{...(Te=z.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: args => <TextButton {...args} />,
  args: {
    ...Text.args,
    disabled: true
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...(Be=(Se=z.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};var qe,je,Ie;U.parameters={...U.parameters,docs:{...(qe=U.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: args => <TextButton {...args} />,
  args: {
    ...Text.args,
    loading: true
  },
  argTypes: {
    ...Text.argTypes
  }
}`,...(Ie=(je=U.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};const Ue=["Solid","SolidWithIcon","SolidDisabled","SolidLoading","Outline","OutlineWithIcon","OutlineDisabled","OutlineLoading","Text","TextWithIcon","TextDisabled","TextLoading"];export{p as Outline,_ as OutlineDisabled,R as OutlineLoading,E as OutlineWithIcon,x as Solid,N as SolidDisabled,L as SolidLoading,k as SolidWithIcon,c as Text,z as TextDisabled,U as TextLoading,W as TextWithIcon,Ue as __namedExportsOrder,ze as default};
