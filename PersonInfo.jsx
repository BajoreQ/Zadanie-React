import { useState } from "react";
import { Tel } from "./Tel";
import "./PersonInfo.css";

export function PersonInfo(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className={isExpanded ? "active" : ""}>
      <h2>{props.name}</h2>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Schowaj" : "Pokaż"}
      </button>
      {isExpanded && (
        <>
          <h3>
            Tel: <Tel tel={props.tel} />
          </h3>
          {props.city && <h3>Miasto: {props.city}</h3>}
        </>
      )}
    </li>
  );
}
