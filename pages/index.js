import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import Language from "@/components/language";

import Editor from "@monaco-editor/react";
import RunCode from "@/components/RunCode";

export default function Home() {
  const [value, setValue] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("Run the code to see output")
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  return (
    <div className="bg-slate-800">
      <div className="flex md:flex-row flex-col">
        <div className="px-4 flex justify-between flex-col w-full md:w-1/2 mb-4">
          <Language value={value} setValue={setValue} />
          <div className="w-full mr-2">
            <Editor
              className="w-1/2"
              height="90vh"
              theme="vs-dark"
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
        <div className="flex w-full md:w-1/2 flex-col pt-8 md:pt-4 px-3 mb-4">
          <RunCode value={value} setValue={setValue} code={code} setCode={setCode} output={output} setOutput={setOutput}/>
          {<div className="w-full h-[90vh] mt-4 bg-zinc-900 p-3 rounded-lg shadow-lg text-white overflow-y-scroll">
            {output}
          </div>}
        </div>
      </div>
    </div>
  );
}
