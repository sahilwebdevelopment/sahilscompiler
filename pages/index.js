import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Language from "@/components/language";

import Editor from "@monaco-editor/react";
import RunCode from "@/components/RunCode";

export default function Home() {
  const [value, setValue] = useState("javascript");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("Run the code to see output");
  const [input, setInput] = useState("");
  const editorRef = useRef(null);
  const inputRef = useRef();
  const saveRef = useRef();
  const filesRef = useRef();
  const newRef = useRef();
  const [storage, setStorage] = useState({});
  const savedRef = useRef();
  const codesRef = useRef();
  const searchRef = useRef()
  function handleEditorDidMount(editor, monaco) {
    setCode(localStorage.getItem(localStorage.getItem("active")));
    editorRef.current = editor;
  }
  function write() {
    setInput(inputRef.current.value);
  }
  useEffect(() => {
    setStorage(localStorage);
  }, []);
  return (
    <div className="bg-neutral-800">
      <div
        className="hidden fixed h-full w-full backdrop-filter backdrop-blur-lg z-10 justify-center items-center"
        ref={saveRef}
      >
        <div className="text-white text-xl bg-neutral-800 px-4 rounded-lg">
          <div
            className="flex justify-end py-2 cursor-pointer"
            onClick={() => {
              saveRef.current.style.display = "none";
            }}
          >
            x
          </div>
          <div>Write the name of the Code:</div>
          <input
            className="my-6 outline-none rounded-md h-8 py-6 px-4 text-black text-md"
            placeholder="ex. sumCode"
          />
          <div
            className="w-28 mb-6 flex justify-center mr-4 border-green-500 border cursor-pointer py-2 rounded-lg text-green-500"
            onClick={() => {
              let name = saveRef.current.children[0].children[2].value.trim();
              if (name != "" && !Object.keys(localStorage).includes(name)) {
                localStorage.setItem(name, code);
                localStorage.setItem("active", name);
                saveRef.current.style.display = "none";
              }else if (name.toLowerCase()=="active"&& name.toLowerCase()=="ally-supports-cache") {
                alert("Name already reserved");
              } else if (Object.keys(localStorage).includes(name)) {
                alert("Name already exists");
              } else {
                alert("Not valid name");
              }
              saveRef.current.children[0].children[2].value = "";
            }}
          >
            Confirm
          </div>
        </div>
      </div>
      <div
        className="flex fixed h-full w-full backdrop-filter backdrop-blur-lg z-10 justify-center items-center"
        ref={newRef}
      >
        <div className="text-white text-xl bg-neutral-800 px-4 rounded-lg">
          <div
            className="flex justify-end py-2 cursor-pointer"
            onClick={() => {
              newRef.current.style.display = "none";
            }}
          >
            x
          </div>
          <div>Write the name of the Code:</div>
          <input
            className="my-6 outline-none rounded-md h-8 py-6 px-4 text-black text-md"
            placeholder="ex. sumCode"
          />
          <div
            className="w-28 mb-6 flex justify-center mr-4 border-green-500 border cursor-pointer py-2 rounded-lg text-green-500"
            onClick={() => {
              let name = newRef.current.children[0].children[2].value.trim();
              if (name != "" && !Object.keys(localStorage).includes(name)) {
                localStorage.setItem(name, code);
                localStorage.setItem("active", name);
                newRef.current.style.display = "none";
                setCode("")
              } else if (Object.keys(localStorage).includes(name)) {
                alert("Name already exists");
              }else if (name.toLowerCase()=="active"&& name.toLowerCase()=="ally-supports-cache") {
                alert("Name already reserved");
              }else {
                alert("Not valid name");
              }
              newRef.current.children[0].children[2].value = "";
            }}
          >
            Confirm
          </div>
        </div>
      </div>
      <div
        className="hidden fixed h-full w-full backdrop-filter backdrop-blur-lg z-10 justify-center items-center"
        ref={filesRef}
      >
        <div className="text-white text-xl bg-neutral-800 px-4 rounded-lg">
          <div
            className="flex justify-end py-2 cursor-pointer"
            onClick={() => {
              filesRef.current.style.display = "none";
            }}
          >
            x
          </div>
          <input ref={searchRef} className="text-md py-3 px-3 text-black mb-6 border-none outline-none rounded-md" onChange={()=>{
            Object.keys(storage).map((key)=>{
              if(key != "active"&&key != "ally-supports-cache"){
              document.getElementById(key).style.display = "flex"
            }})
            if(Object.keys(storage).join("").toLowerCase().includes(searchRef.current.value.toLowerCase())){
              Object.keys(storage).map((key)=>{
                if(key!="active" && key!="ally-supports-cache"){
                    if(!(key.toLowerCase().includes(searchRef.current.value.toLowerCase()))){
                      document.getElementById(key).style.display = "none"
                    }
                }
              })
            }
          }}
          />
          <div ref={codesRef}>
          {Object.keys(storage).map((key) => {
            if (key != "active" && key != "ally-supports-cache") {
              return (
                <div className="flex justify-between mb-6" id={key} key={key}>
                  <div className="text-2xl mx-3 flex items-center justify-center">{key}</div>
                  <div className="border mx-3 cursor-pointer border-green-500 text-green-500 p-4 rounded-md" onClick={()=>{
                    setCode(localStorage.getItem(key))
                    filesRef.current.style.display = "none"
                  }}>Open</div>
                </div>
              );
            }
          })}
          </div>
          <div ref={savedRef} className="m-4"></div>
        </div>
      </div>
      <div className="flex justify-between items-center  text-xl cursor-default text-white pt-4 pb-4 pl-8 bg-zinc-900">
        <div className="flex items-center ">Hello I am sahil chandwani</div>
        <div className="flex mx-4">
          <div
            className=" mx-4 border-green-500 border px-3 py-2 rounded-lg cursor-pointer text-green-500"
            onClick={() => {
              newRef.current.style.display = "flex";
            }}
          >
            New Code
          </div>
          <div
            className=" mr-4 border-green-500 border px-3 py-2 rounded-lg cursor-pointer text-green-500"
            onClick={() => {
              saveRef.current.style.display = "flex";
            }}
          >
            Save Code
          </div>
          <div
            className=" border-green-500 border px-3 py-2 rounded-lg cursor-pointer text-green-500"
            onClick={() => {
              filesRef.current.style.display = "flex";
            }}
          >
            Saved Codes
          </div>
        </div>
      </div>
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
                try {
                  let name = localStorage.getItem("active");
                  localStorage.setItem(name, value);
                } catch (e) {
                  console.log("Some error occured");
                }
              }}
            />
          </div>
        </div>
        <div className="flex w-full md:w-1/2 md:h-[100vh] h-[90vh] flex-col md:pt-0 px-3 mb-4">
          <RunCode
            value={value}
            setValue={setValue}
            code={code}
            setCode={setCode}
            input={input}
            setInput={setInput}
            output={output}
            setOutput={setOutput}
          />
          {value == "python" && (
            <textarea
              placeholder="Write the inputs here"
              type="text"
              ref={inputRef}
              onChange={write}
              value={input}
              className="w-full mt-4 h-1/2 bg-zinc-900 p-3 rounded-lg shadow-lg text-white overflow-y-scroll resize-none"
            ></textarea>
          )}
          {
            <div className="w-full mt-4 h-full bg-zinc-900 p-3 rounded-lg shadow-lg text-white overflow-y-scroll">
              {output}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
