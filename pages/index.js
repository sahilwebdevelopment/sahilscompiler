import React, { useState , useRef} from "react";
import ReactDOM from "react-dom";
import Language from "@/components/language";

import Editor from "@monaco-editor/react";


export default function Home() {
  const [value, setValue] = useState("javascript")
  const [code, setCode] = useState("");
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  return (
    <div className="bg-slate-800">
    <Language value={value} setValue={setValue}/>
      <div className="m-4 flex justify-between">
        <div className="w-1/2 mr-2"><Editor
          className="w-1/2"
          height="90vh"
          theme="vs-dark"
          defaultLanguage={value}
          defaultValue="// type something"
          onMount={handleEditorDidMount}
          value={code}
          onChange={
            (value)=>{
               setCode(value);
            }
          }
        />
        </div>
        <div className="w-1/2 ml-2 bg-zinc-900 p-3 rounded-lg shadow-lg text-white">
        hello
      </div>
      </div>
    </div>
  );
}
