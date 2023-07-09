import React from "react";

export default function Wave({speedy, className}: {speedy?:string, className?:string},) {
  return (
    <svg width="100%" height="200px" fill="none" className={className}>
      <path
        fill="var(--cream)"
        d="
        M0 77 
            C 473,283
              822,-40
              1920,100 
          
          V 359 
          H 0 
          V 67
          Z">
        <animate 
          repeatCount="indefinite"  
          attributeName="d" 
          dur={speedy}
          attributeType="XML"
          values="
            M0 77 
            C 473,283
              822,-40
              1920,100 
            
            V 359 
            H 0 
            V 67 
            Z; 

            M0 107 
            C 473,-70
              1122,300
              1720,75
            
            V 359 
            H 0 
            V 67 
            Z; 

            

            M0 77 
            C 473,283
              822,-40
              1920,100
            
            V 359 
            H 0 
            V 67 
            Z
            ">
        </animate>
      </path>
      
      

    </svg>
  );
}
