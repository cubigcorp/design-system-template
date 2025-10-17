import{j as t}from"./jsx-runtime-Bm_hQ5rp.js";import{d as r,l}from"./styled-components.browser.esm-C_r3Obn0.js";import{c as o}from"./color-DqDZjiGS.js";import{t as m}from"./textColor-SSyLf7rE.js";import{b as h}from"./borderColor-CQKT7y1f.js";import{s as C}from"./spacing-tE1IiUFl.js";import{f as y}from"./fontWeight-CRwBdwgF.js";import{f as d}from"./fontFamily-CsG1KcIF.js";import{f as x}from"./fontSize-BFAJJ5Eh.js";import{l as v,a as $}from"./lineHeight-aJXO3HIm.js";import{I as T}from"./IconCheck-BL7gbP7r.js";const u=24,g=16,S=({status:e,step:s,label:n,showLabel:c=!1})=>t.jsxs(q,{children:[t.jsx(A,{$status:e,children:e==="Complete"?t.jsx(E,{children:t.jsx(T,{color:"white",width:16,height:16})}):s}),c&&n&&t.jsx(_,{children:n})]}),q=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${C.gap["gap-2"]};
  flex: 0 0 auto; // 고정 폭, divider와 간격 일관
  width: ${u}px; // 라벨 길이와 무관하게 컨테이너 폭을 원형 크기에 고정
`,A=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${u}px;
  height: ${u}px;
  border-radius: 50%;
  flex-shrink: 0;
  font-size: ${x.t2[0]};
  font-weight: ${y[500]};
  line-height: ${v.t2[0]};
  letter-spacing: ${$.md};
  transition: all 0.2s ease-in-out;

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${d.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${d.en};
  }

  ${({$status:e})=>{switch(e){case"Complete":return l`
          background-color: ${o.gray[975]};
          color: ${o.common[100]};
          border: none;
        `;case"Active":return l`
          background-color: ${o.common[100]};
          color: ${m.light["fg-neutral-primary"]};
          border: 1px solid ${o.gray[975]};
        `;case"Inactive":default:return l`
          background-color: ${o.common[100]};
          color: ${m.light["fg-neutral-assistive"]};
          border: 1px solid ${h.light["color-border-primary"]};
        `}}}
`,_=r.span`
  font-size: ${x.t2[0]};
  font-weight: ${y[500]};
  line-height: ${v.t2[0]};
  letter-spacing: ${$.md};
  color: ${m.light["fg-neutral-primary"]};
  white-space: nowrap;
  width: 100%;
  text-align: center; // 컨테이너 폭 내에서 중앙 정렬

  &:lang(ko),
  &[lang="ko"] {
    font-family: ${d.ko};
  }
  &:lang(en),
  &[lang="en"] {
    font-family: ${d.en};
  }
`,E=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${g}px;
  height: ${g}px;
`;S.__docgenInfo={description:"",methods:[],displayName:"ProgressTracker",props:{status:{required:!0,tsType:{name:"union",raw:'"Inactive" | "Active" | "Complete"',elements:[{name:"literal",value:'"Inactive"'},{name:"literal",value:'"Active"'},{name:"literal",value:'"Complete"'}]},description:""},step:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const b=({status:e})=>t.jsx(N,{$status:e}),N=r.div`
  flex: 1 1 auto; // 남은 공간 균등 분배
  height: 1px;
  margin: 12px 0 0 0; // 좌우 여백은 wrapper/컨테이너가 담당
  transition: all 0.2s ease-in-out;

  ${({$status:e})=>{switch(e){case"Complete":return l`
          background-color: ${o.gray[975]};
        `;case"Active":case"Inactive":default:return l`
          background-color: ${h.light["color-border-primary"]};
        `}}}
`;b.__docgenInfo={description:"",methods:[],displayName:"StepDivider",props:{status:{required:!0,tsType:{name:"union",raw:'"Inactive" | "Active" | "Complete"',elements:[{name:"literal",value:'"Inactive"'},{name:"literal",value:'"Active"'},{name:"literal",value:'"Complete"'}]},description:""}}};const z=({count:e,currentStep:s,steps:n,showLabel:c=!1,className:I})=>{const w=a=>a<s?"Complete":a===s?"Active":"Inactive",k=()=>{const a=[];for(let i=1;i<=e;i++){const f=w(i),p=n==null?void 0:n[i-1],j=(p==null?void 0:p.label)||"단계";a.push(t.jsxs(W,{children:[t.jsx(S,{status:f,step:i,label:j,showLabel:c}),i<e&&t.jsx(b,{status:f})]},i))}return a};return t.jsx(P,{className:I,children:t.jsx(R,{showLabel:c,children:k()})})},P=r.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,R=r.div`
  display: flex;
  align-items: ${({showLabel:e})=>e?"flex-start":"center"};
  gap: 0; // 트래커-디바이더 간격을 0으로 고정
  width: 100%;
`,W=r.div`
  display: flex;
  align-items: flex-start; // 라벨이 있을 때도 위에서 시작
  flex: 1;

  &:last-child {
    flex: 0; // 마지막 아이템 뒤쪽 여백 제거 (좌우 균형)
  }
`;z.__docgenInfo={description:"",methods:[],displayName:"StepIndicator",props:{count:{required:!0,tsType:{name:"number"},description:""},currentStep:{required:!0,tsType:{name:"number"},description:""},steps:{required:!1,tsType:{name:"Array",elements:[{name:"StepItem"}],raw:"StepItem[]"},description:""},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};export{z as S};
