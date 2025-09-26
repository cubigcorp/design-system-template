import{f as t}from"./fontSize-BFAJJ5Eh.js";import{f as p}from"./fontWeight-CRwBdwgF.js";import{f as d}from"./fontFamily-CsG1KcIF.js";const e={lg:"-0.5px",md:"0px"},a={t1:["14px",{"@media (max-width: 768px)":["14px"],"@media (max-width: 375px)":["14px"]}],t2:["16px",{"@media (max-width: 768px)":["16px"],"@media (max-width: 375px)":["16px"]}],t3:["18px",{"@media (max-width: 768px)":["18px"],"@media (max-width: 375px)":["18px"]}],t4:["20px",{"@media (max-width: 768px)":["20px"],"@media (max-width: 375px)":["20px"]}],t5:["24px",{"@media (max-width: 768px)":["24px"],"@media (max-width: 375px)":["24px"]}],t6:["26px",{"@media (max-width: 768px)":["26px"],"@media (max-width: 375px)":["26px"]}],t7:["28px",{"@media (max-width: 768px)":["28px"],"@media (max-width: 375px)":["28px"]}],t8:["30px",{"@media (max-width: 768px)":["28px"],"@media (max-width: 375px)":["28px"]}],t9:["34px",{"@media (max-width: 768px)":["30px"],"@media (max-width: 375px)":["30px"]}],t10:["40px",{"@media (max-width: 768px)":["34px"],"@media (max-width: 375px)":["34px"]}],t11:["42px",{"@media (max-width: 768px)":["40px"],"@media (max-width: 375px)":["40px"]}],t12:["48px",{"@media (max-width: 768px)":["42px"],"@media (max-width: 375px)":["42px"]}],t13:["52px",{"@media (max-width: 768px)":["48px"],"@media (max-width: 375px)":["48px"]}],t14:["64px",{"@media (max-width: 768px)":["52px"],"@media (max-width: 375px)":["52px"]}],t15:["72px",{"@media (max-width: 768px)":["64px"],"@media (max-width: 375px)":["64px"]}],t16:["80px",{"@media (max-width: 768px)":["72px"],"@media (max-width: 375px)":["72px"]}],t17:["88px",{"@media (max-width: 768px)":["80px"],"@media (max-width: 375px)":["80px"]}]},x={regular:p[400],medium:p[500],semibold:p[600],bold:p[700]},m={en:d.en,ko:d.ko,sans:d.sans},o={display1:{fontSize:t.t13,letterSpacing:e.lg,lineHeight:a.t13,weights:x,families:m},display2:{fontSize:t.t14,letterSpacing:e.lg,lineHeight:a.t14,weights:x,families:m},display3:{fontSize:t.t15,letterSpacing:e.lg,lineHeight:a.t15,weights:x,families:m},display4:{fontSize:t.t16,letterSpacing:e.lg,lineHeight:a.t16,weights:x,families:m},display5:{fontSize:t.t17,letterSpacing:e.lg,lineHeight:a.t17,weights:x,families:m},title1:{fontSize:t.t9,letterSpacing:e.md,lineHeight:a.t9,weights:x,families:m},title2:{fontSize:t.t10,letterSpacing:e.lg,lineHeight:a.t10,weights:x,families:m},title3:{fontSize:t.t11,letterSpacing:e.lg,lineHeight:a.t11,weights:x,families:m},title4:{fontSize:t.t12,letterSpacing:e.lg,lineHeight:a.t12,weights:x,families:m},heading1:{fontSize:t.t6,letterSpacing:e.md,lineHeight:a.t6,weights:x,families:m},heading2:{fontSize:t.t7,letterSpacing:e.md,lineHeight:a.t7,weights:x,families:m},heading3:{fontSize:t.t8,letterSpacing:e.md,lineHeight:a.t8,weights:x,families:m},body1:{fontSize:t.t3,letterSpacing:e.md,lineHeight:a.t3,weights:x,families:m},body2:{fontSize:t.t4,letterSpacing:e.md,lineHeight:a.t4,weights:x,families:m},body3:{fontSize:t.t5,letterSpacing:e.md,lineHeight:a.t5,weights:x,families:m},caption1:{fontSize:t.t1,letterSpacing:e.md,lineHeight:a.t1,weights:x,families:m},caption2:{fontSize:t.t2,letterSpacing:e.md,lineHeight:a.t2,weights:x,families:m}},f=(n=void 0,l,g="medium")=>{const i=o[l],h=g;if(n!==void 0){const s=n==="en"?i.families.en:n==="ko"?i.families.ko:i.families.sans;return`
      font-size: ${i.fontSize[0]};
      font-weight: ${i.weights[h]};
      font-family: ${s};
      letter-spacing: ${i.letterSpacing};
      line-height: ${i.lineHeight[0]};
      
      @media (max-width: 768px) {
        font-size: ${i.fontSize[1]["@media (max-width: 768px)"][0]};
        line-height: ${i.lineHeight[1]["@media (max-width: 768px)"][0]};
      }
      
      @media (max-width: 375px) {
        font-size: ${i.fontSize[1]["@media (max-width: 375px)"][0]};
        line-height: ${i.lineHeight[1]["@media (max-width: 375px)"][0]};
      }
    `}return`
    font-size: ${i.fontSize[0]};
    font-weight: ${i.weights[h]};
    letter-spacing: ${i.letterSpacing};
    line-height: ${i.lineHeight[0]};
    

    &:lang(en),
    &[lang="en"] {
      font-family: ${i.families.en};
    }
    &:lang(ko),
    &[lang="ko"] {
      font-family: ${i.families.ko};
    }
    
    @media (max-width: 768px) {
      font-size: ${i.fontSize[1]["@media (max-width: 768px)"][0]};
      line-height: ${i.lineHeight[1]["@media (max-width: 768px)"][0]};
    }
    
    @media (max-width: 375px) {
      font-size: ${i.fontSize[1]["@media (max-width: 375px)"][0]};
      line-height: ${i.lineHeight[1]["@media (max-width: 375px)"][0]};
    }
  `},c={get heading1(){return f(void 0,"heading1")}};export{c as a,o as b,f as t};
