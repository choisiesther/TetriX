import React, { Component } from "react";

const Assembly = props => {
  // console.log(props.code);
  const asList = [];
  Object.keys(props.assembly).forEach(el => {
    // console.log(el);
    asList.push(<li>{el}</li>);
    if (el === "\.code") {
      props.assembly[el].forEach((line, i) => {
				if (line.name.indexOf('tag') === 0) asList.push(<li style={{whiteSpace: 'pre-wrap'}}>{"    "+line.name+ "  " + line.value}</li>);
				else if (line.value) asList.push(<li style={{whiteSpace: 'pre-wrap'}}>{"        "+line.name + "  " + line.value}</li>);
        else asList.push(<li style={{whiteSpace: 'pre-wrap'}}>{"        "+line.name}</li>);
      });
    } else {
      props.assembly[el][0]["\.code"].forEach((line, i) => {
				if (line.name.indexOf('tag') === 0) asList.push(<li style={{whiteSpace: 'pre-wrap'}}>{"    "+line.name+ "  " + line.value}</li>);
				else if (line.value) asList.push(<li style={{whiteSpace: 'pre-wrap'}}>{"        "+line.name+ "  " + line.value}</li>);
        else asList.push(<li style={{whiteSpace: 'pre-wrap'}}>{"        "+line.name}</li>);
      });
    }
  });
  return (
			<div className="assemblyCode">
      	<ul className="asList">{asList}</ul>
			</div>
  );
};

export default Assembly;
