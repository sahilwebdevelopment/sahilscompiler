import React from "react";

function RunCode(props) {
  const input = props.code
  const go = props.input
  const url = "https://emkc.org/api/v2/piston/execute";
  const version = ()=>{
    if(props.value == "csharp"){
      return "6.12.0"
    }else if(props.value == "javascript"){
      return "18.15.0"
    }else if(props.value == "python"){
      return "3.10.0"
    }else if(props.value == "c++"){
      return "10.2.0"
    }
  }

  const body = {
    language: props.value,
    version: version(),
    files: [
      {
        content: input,
      },
    ],
    stdin: go
  };

  async function run() {
    try{
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    let data = await response.json();
    let output = data.run.output
    console.log(output)
    props.setOutput(output)
  }catch(e) {
    props.setOutput("some error occurred")
  }
  }
  return (
    <button
      onClick={run}
      className="text-green-500 text-xl mx-4 p-2 rounded-lg inline-block border border-green-500 w-32"
    >
      Run Code
    </button>
  );
}

export default RunCode;
