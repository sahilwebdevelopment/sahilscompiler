import React, { useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function Language(props) {
  let value = props.value;
  let setValue = props.setValue;
  let list = useRef();
  return (
    <div className="py-3 inline-flex justify-center flex-col">
      <div className="flex items-center">
        <div className="px-4 text-xl text-white cursor-default">Language: </div>
        <div
          className="text-xl px-3 cursor-pointer text-white bg-slate-600 h-12 flex items-center justify-center shadow-lg rounded-lg"
          onClick={() => {
            if (
              list.current.style.display == "" ||
              list.current.style.display == "none"
            ) {
              list.current.style.display = "block";
            } else {
              list.current.style.display = "none";
            }
          }}
        >
          <div className="mx-2">{value}</div>
          <IoMdArrowDropdown className="text-3xl" />
        </div>
      </div>
      <div
        ref={list}
        className="hidden absolute left-[8.5rem] cursor-pointer top-32 z-10 bg-slate-600 w-40 rounded-lg shadow-lg"
      >
        <div
          className="text-white py-2 px-4 hover:bg-slate-900 rounded-lg"
          onClick={() => {
            setValue("javascript");
            list.current.style.display = "none";
          }}
        >
          javaScript
        </div>
        <div
          className="text-white py-2 px-4 hover:bg-slate-900 rounded-lg"
          onClick={() => {
            setValue("python");
            list.current.style.display = "none";
          }}
        >
          Python
        </div>
        <div
          className="text-white py-2 px-4 hover:bg-slate-900 rounded-lg"
          onClick={() => {
            setValue("c++");
            list.current.style.display = "none";
          }}
        >
          C++
        </div>
        <div
          className="text-white py-2 px-4 hover:bg-slate-900 rounded-lg"
          onClick={() => {
            setValue("csharp");
            list.current.style.display = "none";
          }}
        >
          csharp
        </div>
      </div>
    </div>
  );
}

export default Language;
