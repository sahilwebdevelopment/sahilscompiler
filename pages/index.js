import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Language from "@/components/language";

import Editor from "@monaco-editor/react";
import RunCode from "@/components/RunCode";

export default function Home() {
  const [value, setValue] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("Run the code to see output")
  const [input, setInput] = useState("")
  const editorRef = useRef(null);
  const inputRef = useRef();
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function write(){
     setInput(inputRef.current.value)
  }
  return (
    <div className="bg-slate-800">
      <div className="text-xl cursor-default text-white pt-4 pb-4 pl-8 bg-slate-600">Hello I am sahil chandwani</div>
      <div className="flex md:flex-row flex-col">
        <div className="px-4 flex justify-between flex-col w-full md:w-1/2 mb-4">
          <Language value={value} setValue={setValue} />
          <div className="w-full mr-2">
            <Editor
              className="w-1/2"
              height="90vh"
              theme="vs-dark"
              language={value}
              defaultLanguage={value}
              defaultValue=""
              onMount={handleEditorDidMount}
              value={code}
              onChange={(value) => {
                setCode(value);
              }}
            />
          </div>
        </div>
        <div className="flex w-full md:w-1/2 md:h-[100vh] h-[90vh] flex-col pt-8 md:pt-0 px-3 mb-4">
          <RunCode value={value} setValue={setValue} code={code} setCode={setCode} input={input} setInput={setInput} output={output} setOutput={setOutput}/>
          {value=="python" && <textarea placeholder="Write the inputs here" type="text" ref={inputRef} onChange={write} value={input} className="w-full mt-4 h-1/2 bg-zinc-900 p-3 rounded-lg shadow-lg text-white overflow-y-scroll resize-none"></textarea>}
          {<div className="w-full mt-4 h-full bg-zinc-900 p-3 rounded-lg shadow-lg text-white overflow-y-scroll">
            {output}
          </div>}
        </div>
      </div>
    </div>
  );
}
