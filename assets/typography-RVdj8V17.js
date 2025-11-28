import{f as t}from"./fontSize-BFAJJ5Eh.js";import{f as g}from"./fontWeight-CRwBdwgF.js";import{f as s}from"./fontFamily-CsG1KcIF.js";import{l as e,a as n}from"./lineHeight-aJXO3HIm.js";const a={regular:g[400],medium:g[500],semibold:g[600],bold:g[700]},l={en:s.en,ko:s.ko,sans:s.sans},p={display1:{fontSize:t.t13,letterSpacing:n.lg,lineHeight:e.t13,weights:a,families:l},display2:{fontSize:t.t14,letterSpacing:n.lg,lineHeight:e.t14,weights:a,families:l},display3:{fontSize:t.t15,letterSpacing:n.lg,lineHeight:e.t15,weights:a,families:l},display4:{fontSize:t.t16,letterSpacing:n.lg,lineHeight:e.t16,weights:a,families:l},display5:{fontSize:t.t17,letterSpacing:n.lg,lineHeight:e.t17,weights:a,families:l},title1:{fontSize:t.t9,letterSpacing:n.md,lineHeight:e.t9,weights:a,families:l},title2:{fontSize:t.t10,letterSpacing:n.lg,lineHeight:e.t10,weights:a,families:l},title3:{fontSize:t.t11,letterSpacing:n.lg,lineHeight:e.t11,weights:a,families:l},title4:{fontSize:t.t12,letterSpacing:n.lg,lineHeight:e.t12,weights:a,families:l},heading1:{fontSize:t.t6,letterSpacing:n.md,lineHeight:e.t6,weights:a,families:l},heading2:{fontSize:t.t7,letterSpacing:n.md,lineHeight:e.t7,weights:a,families:l},heading3:{fontSize:t.t8,letterSpacing:n.md,lineHeight:e.t8,weights:a,families:l},body1:{fontSize:t.t3,letterSpacing:n.md,lineHeight:e.t3,weights:a,families:l},body2:{fontSize:t.t4,letterSpacing:n.md,lineHeight:e.t4,weights:a,families:l},body3:{fontSize:t.t5,letterSpacing:n.md,lineHeight:e.t5,weights:a,families:l},caption1:{fontSize:t.t1,letterSpacing:n.md,lineHeight:e.t1,weights:a,families:l},caption2:{fontSize:t.t2,letterSpacing:n.md,lineHeight:e.t2,weights:a,families:l}},S=(h=void 0,m,f="medium")=>{const i=p[m],o=f;if(h!==void 0){const d=h==="en"?i.families.en:h==="ko"?i.families.ko:i.families.sans;return`
      font-size: ${i.fontSize[0]};
      font-weight: ${i.weights[o]};
      font-family: ${d};
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
    font-weight: ${i.weights[o]};
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
  `},x={get heading1(){return S(void 0,"heading1")}};export{x as a,p as b,S as t};
