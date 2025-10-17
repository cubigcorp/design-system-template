import{j as t}from"./jsx-runtime-WsICpuy1.js";import{d as r,l as s}from"./styled-components.browser.esm-BDiU6mDK.js";import{c as a}from"./color-DqDZjiGS.js";import{t as d}from"./textColor-SSyLf7rE.js";import{b as g}from"./borderColor-CQKT7y1f.js";import{s as I}from"./spacing-tE1IiUFl.js";import{t as h}from"./typography-BBThIZ7c.js";import{I as w}from"./IconCheck-eZFJJIcy.js";const m=24,f=16,x=({status:e,step:l,label:o,showLabel:c=!1})=>t.jsxs(j,{children:[t.jsx(C,{$status:e,children:e==="Complete"?t.jsx(k,{children:t.jsx(w,{color:"white",width:16,height:16})}):l}),c&&o&&t.jsx(T,{$status:e,children:o})]}),j=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${I.gap["gap-2"]};
  flex: 0 0 auto; // 고정 폭, divider와 간격 일관
  width: ${m}px; // 라벨 길이와 무관하게 컨테이너 폭을 원형 크기에 고정
`,C=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${m}px;
  height: ${m}px;
  border-radius: 50%;
  flex-shrink: 0;
  ${h(void 0,"caption2","medium")}
  transition: all 0.2s ease-in-out;

  ${({$status:e})=>{switch(e){case"Complete":return s`
          background-color: ${a.gray[975]};
          color: ${a.common[100]};
          border: none;
        `;case"Active":return s`
          background-color: ${a.common[100]};
          color: ${d.light["fg-neutral-primary"]};
          border: 1px solid ${a.gray[975]};
        `;case"Inactive":default:return s`
          background-color: ${a.common[100]};
          color: ${d.light["fg-neutral-assistive"]};
          border: 1px solid ${g.light["color-border-primary"]};
        `}}}
`,T=r.span`
  ${h(void 0,"caption2","medium")}
  color: ${({$status:e})=>e==="Active"?d.light["fg-neutral-primary"]:d.light["fg-neutral-alternative"]};
  white-space: nowrap;
  width: 100%;
  text-align: center; // 컨테이너 폭 내에서 중앙 정렬
`,k=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${f}px;
  height: ${f}px;
`;x.__docgenInfo={description:"",methods:[],displayName:"ProgressTracker",props:{status:{required:!0,tsType:{name:"union",raw:'"Inactive" | "Active" | "Complete"',elements:[{name:"literal",value:'"Inactive"'},{name:"literal",value:'"Active"'},{name:"literal",value:'"Complete"'}]},description:""},step:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const y=({status:e})=>t.jsx(q,{$status:e}),q=r.div`
  flex: 1 1 auto; // 남은 공간 균등 분배
  height: 1px;
  margin: 12px 0 0 0; // 좌우 여백은 wrapper/컨테이너가 담당
  transition: all 0.2s ease-in-out;

  ${({$status:e})=>{switch(e){case"Complete":return s`
          background-color: ${a.gray[975]};
        `;case"Active":case"Inactive":default:return s`
          background-color: ${g.light["color-border-primary"]};
        `}}}
`;y.__docgenInfo={description:"",methods:[],displayName:"StepDivider",props:{status:{required:!0,tsType:{name:"union",raw:'"Inactive" | "Active" | "Complete"',elements:[{name:"literal",value:'"Inactive"'},{name:"literal",value:'"Active"'},{name:"literal",value:'"Complete"'}]},description:""}}};const A=({count:e,currentStep:l,steps:o,showLabel:c=!1,className:v})=>{const $=n=>n<l?"Complete":n===l?"Active":"Inactive",S=()=>{const n=[];for(let i=1;i<=e;i++){const u=$(i),p=o==null?void 0:o[i-1],b=(p==null?void 0:p.label)||"단계";n.push(t.jsxs(N,{children:[t.jsx(x,{status:u,step:i,label:b,showLabel:c}),i<e&&t.jsx(y,{status:u})]},i))}return n};return t.jsx(_,{className:v,children:t.jsx(E,{showLabel:c,children:S()})})},_=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,E=r.div`
  display: flex;
  align-items: ${({showLabel:e})=>e?"flex-start":"center"};
  gap: 0; // 트래커-디바이더 간격을 0으로 고정
  width: 100%;
`,N=r.div`
  display: flex;
  align-items: flex-start; // 라벨이 있을 때도 위에서 시작
  flex: 1;

  &:last-child {
    flex: 0; // 마지막 아이템 뒤쪽 여백 제거 (좌우 균형)
  }
`;A.__docgenInfo={description:"",methods:[],displayName:"StepIndicator",props:{count:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},steps:{required:!1,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};export{A as S};
