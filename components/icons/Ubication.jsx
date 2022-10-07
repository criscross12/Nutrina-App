import * as React from "react";

function Ubication({ fill = "#FFFFFF", ...rest }) {
  return (
    <svg 
    class="h-8 w-8 text-black"  
    viewBox="0 0 24 24"  
    fill="none"  
    stroke="currentColor"  
    stroke-width="2"  
    stroke-linecap="round"  
    stroke-linejoin="round">  
    <path 
    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  
    <circle 
    cx="12" 
    cy="10" 
    r="3" />
    </svg>

  );
}

export default Ubication;