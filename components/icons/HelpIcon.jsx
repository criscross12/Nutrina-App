import * as React from "react";

function HelpIcon({ fill = "#FFFFFF", ...rest }) {
  return (
    <svg class="h-8 w-8 text-white"  
    viewBox="0 0 24 24"  
    fill="none"  
    stroke="currentColor"  
    stroke-width="2"  
    stroke-linecap="round"  
    stroke-linejoin="round">  
    <circle cx="12" cy="12" r="10" />  
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />  
    <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export default HelpIcon;
