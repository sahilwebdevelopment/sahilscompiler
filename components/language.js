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
        <button
          className="text-xl px-3 outline-none cursor-pointer text-white bg-zinc-900 h-12 flex items-center justify-center shadow-lg rounded-lg"
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
          onBlur={() => {
              list.current.style.display = "none";
          }}
        >
          <div className="mx-2">{value}</div>
          <IoMdArrowDropdown className="text-3xl" />
        </button>
      </div>
      <div
        ref={list}
        className="hidden absolute left-[8.5rem] cursor-pointer top-32 z-10 bg-neutral-800 w-40 rounded-lg shadow-lg"
      >
        <div
          className="text-white py-2 px-4 hover:bg-zinc-900 rounded-lg"
          onMouseEnter={() => {
            setValue("javascript");
          }}
        >
          javaScript
        </div>
        <div
          className="text-white py-2 px-4 hover:bg-zinc-900 rounded-lg"
          onMouseEnter={() => {
            setValue("python");
            console.log("hovered")
          }}
        >
          Python
        </div>
        <div
          className="text-white py-2 px-4 hover:bg-zinc-900 rounded-lg"
          onMouseEnter={() => {
            setValue("c++");
          }}
        >
          C++
        </div>
        <div
          className="text-white py-2 px-4 hover:bg-zinc-900 rounded-lg"
          onMouseEnter={() => {
            setValue("csharp");
          }}
        >
          csharp
        </div>
      </div>
    </div>
  );
}

export default Language;
