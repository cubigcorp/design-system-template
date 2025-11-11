import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{d as r,t as p,l as c}from"./textColor-Cq70r64R.js";import{c as n}from"./color-CiwAFuFb.js";import{b as h}from"./borderColor-C_RHITEf.js";import{s as m}from"./spacing-tE1IiUFl.js";import{t as y}from"./typography-BBThIZ7c.js";import{I as T}from"./IconCheck-CKtc9n1_.js";const v=24,g=16,x=({status:e,step:i,label:l,showLabel:d=!1,orientation:o="vertical"})=>t.jsxs(j,{$orientation:o,children:[t.jsx(C,{$status:e,children:e==="Complete"?t.jsx(k,{children:t.jsx(T,{color:"white",width:16,height:16})}):i}),d&&l&&t.jsx(q,{$status:e,children:l})]}),j=r.div`
  display: flex;
  flex-direction: ${({$orientation:e})=>e==="vertical"?"column":"row"};
  align-items: center;
  gap: ${m.gap["gap-2"]};
  flex: 0 0 auto;
  width: ${({$orientation:e})=>e==="vertical"?`${v}px`:"auto"};
  margin-right: ${({$orientation:e})=>e==="horizontal"?m.gap["gap-2"]:"0"};
`,C=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${v}px;
  height: ${v}px;
  border-radius: 50%;
  flex-shrink: 0;
  ${y(void 0,"caption2","medium")}
  transition: all 0.2s ease-in-out;

  ${({$status:e})=>{switch(e){case"Complete":return c`
          background-color: ${n.gray[975]};
          color: ${n.common[100]};
          border: none;
        `;case"Active":return c`
          background-color: ${n.common[100]};
          color: ${p.light["fg-neutral-primary"]};
          border: 1px solid ${n.gray[975]};
        `;case"Inactive":default:return c`
          background-color: ${n.common[100]};
          color: ${p.light["fg-neutral-assistive"]};
          border: 1px solid ${h.light["color-border-primary"]};
        `}}}
`,q=r.span`
  ${y(void 0,"caption2","medium")}
  color: ${({$status:e})=>e==="Active"?p.light["fg-neutral-primary"]:p.light["fg-neutral-alternative"]};
  white-space: nowrap;
  width: 100%;
  text-align: center; // 컨테이너 폭 내에서 중앙 정렬
`,k=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${g}px;
  height: ${g}px;
`;x.__docgenInfo={description:"",methods:[],displayName:"ProgressTracker",props:{status:{required:!0,tsType:{name:"union",raw:'"Inactive" | "Active" | "Complete"',elements:[{name:"literal",value:'"Inactive"'},{name:"literal",value:'"Active"'},{name:"literal",value:'"Complete"'}]},description:""},step:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const $=({status:e,orientation:i="vertical"})=>t.jsx(A,{$status:e,$orientation:i}),A=r.div`
  flex: 1 1 auto;
  height: 1px;
  margin-top: 12px;
  margin-right: ${({$orientation:e})=>e==="horizontal"?m.gap["gap-2"]:"0"};
  transition: all 0.2s ease-in-out;

  ${({$status:e})=>{switch(e){case"Complete":return c`
          background-color: ${n.gray[975]};
        `;case"Active":case"Inactive":default:return c`
          background-color: ${h.light["color-border-primary"]};
        `}}}
`;$.__docgenInfo={description:"",methods:[],displayName:"StepDivider",props:{status:{required:!0,tsType:{name:"union",raw:'"Inactive" | "Active" | "Complete"',elements:[{name:"literal",value:'"Inactive"'},{name:"literal",value:'"Active"'},{name:"literal",value:'"Complete"'}]},description:""},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}}}};const z=({count:e,currentStep:i,steps:l,showLabel:d=!1,orientation:o="vertical",className:S})=>{const b=s=>s<i?"Complete":s===i?"Active":"Inactive",w=()=>{const s=[];for(let a=1;a<=e;a++){const f=b(a),u=l==null?void 0:l[a-1],I=(u==null?void 0:u.label)||"단계";s.push(t.jsxs(N,{$orientation:o,children:[t.jsx(x,{status:f,step:a,label:I,showLabel:d,orientation:o}),a<e&&t.jsx($,{status:f,orientation:o})]},a))}return s};return t.jsx(_,{className:S,$orientation:o,children:t.jsx(E,{showLabel:d,children:w()})})},_=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: ${({$orientation:e})=>e==="horizontal"?"400px":"auto"};
`,E=r.div`
  display: flex;
  align-items: ${({showLabel:e})=>e?"flex-start":"center"};
  gap: 0; // 트래커-디바이더 간격을 0으로 고정
  width: 100%;
`,N=r.div`
  display: flex;
  align-items: flex-start;
  gap: 0;
  flex: 1;

  &:last-child {
    flex: 0;
  }
`;z.__docgenInfo={description:"",methods:[],displayName:"StepIndicator",props:{count:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},steps:{required:!1,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};export{z as S};
