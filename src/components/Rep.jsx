import React from "react";
import RepButton from "./RepButton";

function Rep(props) {
  return (
    <div className="rep">
      <div className="rep__info">
        <div className="rep__info-name">{props.rep.stargazers_count} ---- {props.rep.name}</div> <RepButton/>
      </div>
      <div className="rep__desctription">{props.rep.description}</div>
      {
        console.log(props)
      }
    </div>

  );
}

export default Rep;
