import{f as e}from"./fontSize-BFAJJ5Eh.js";import{f as g}from"./fontWeight-CRwBdwgF.js";import{l as t,a as n}from"./lineHeight-aJXO3HIm.js";const h={en:'"DM Sans", sans-serif',ko:'"Pretendard", sans-serif',sans:'"Pretendard", "DM Sans", sans-serif'},a={regular:g[400],medium:g[500],semibold:g[600],bold:g[700]},l={en:h.en,ko:h.ko,sans:h.sans},p={display1:{fontSize:e.t13,letterSpacing:n.lg,lineHeight:t.t13,weights:a,families:l},display2:{fontSize:e.t14,letterSpacing:n.lg,lineHeight:t.t14,weights:a,families:l},display3:{fontSize:e.t15,letterSpacing:n.lg,lineHeight:t.t15,weights:a,families:l},display4:{fontSize:e.t16,letterSpacing:n.lg,lineHeight:t.t16,weights:a,families:l},display5:{fontSize:e.t17,letterSpacing:n.lg,lineHeight:t.t17,weights:a,families:l},title1:{fontSize:e.t9,letterSpacing:n.md,lineHeight:t.t9,weights:a,families:l},title2:{fontSize:e.t10,letterSpacing:n.lg,lineHeight:t.t10,weights:a,families:l},title3:{fontSize:e.t11,letterSpacing:n.lg,lineHeight:t.t11,weights:a,families:l},title4:{fontSize:e.t12,letterSpacing:n.lg,lineHeight:t.t12,weights:a,families:l},heading1:{fontSize:e.t6,letterSpacing:n.md,lineHeight:t.t6,weights:a,families:l},heading2:{fontSize:e.t7,letterSpacing:n.md,lineHeight:t.t7,weights:a,families:l},heading3:{fontSize:e.t8,letterSpacing:n.md,lineHeight:t.t8,weights:a,families:l},body1:{fontSize:e.t3,letterSpacing:n.md,lineHeight:t.t3,weights:a,families:l},body2:{fontSize:e.t4,letterSpacing:n.md,lineHeight:t.t4,weights:a,families:l},body3:{fontSize:e.t5,letterSpacing:n.md,lineHeight:t.t5,weights:a,families:l},caption1:{fontSize:e.t1,letterSpacing:n.md,lineHeight:t.t1,weights:a,families:l},caption2:{fontSize:e.t2,letterSpacing:n.md,lineHeight:t.t2,weights:a,families:l}},S=(s=void 0,f,m="medium")=>{const i=p[f],o=m;if(s!==void 0){const d=s==="en"?i.families.en:s==="ko"?i.families.ko:i.families.sans;return`
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
  `},z={get heading1(){return S(void 0,"heading1")}};export{z as a,p as b,S as t};
