import React, { ReactElement } from "react";
import "../styles/HoverCard.css";

interface HoverCardProps {
  children: ReactElement;
  weeks: ReactElement;
  cancel: boolean;
}

export default function HoverCard({ children, weeks, cancel, ...rest } : HoverCardProps) {
  const [show, setShow] = React.useState<boolean>(cancel);

  return (
    <div className="occupied"
          {...rest}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}>
      <div className="hover-card" style={show ? { visibility: "visible" } : {}}>
      {children}
      </div>
      <div
  
      >
          {weeks}    
      </div>
    </div>
  );
}
