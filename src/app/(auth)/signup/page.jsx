import React from "react";
import { handleRegister } from "@/lib/action";

function SignupPage() {
  return (
    <main className=" bg-slate-950 flex justify-center  items-center w-full   h-full-minus-200">
      <form action={handleRegister} className=" bg-slate-700 px-3 py-5 rounded w-96">
        <div className=" flex flex-col gap-1 justify-start mb-2">
          <label
            htmlFor=" "
            className=" text-xl capitalize font-mono text-gray-300"
          >
            {" "}
            name
          </label>
          <input
            type="text"
            placeholder="jhon.."
            name="name"
            className=" px-3 py-3 outline-none focus:ring-0 border-none bg-slate-800"
          />
        </div>
        <div className=" flex flex-col gap-1 justify-start mb-2 ">
          <label
            htmlFor=""
            className=" text-xl capitalize font-mono text-gray-300"
          >
            email name
          </label>
          <input
            type="email"
            placeholder="jhon@example.com.."
            name="email"
            className=" px-3 py-3 outline-none focus:ring-0 border-none bg-slate-800"
          />
        </div>
        <div className=" flex flex-col gap-1 justify-start ">
          <label
            htmlFor=""
            className=" text-xl capitalize font-mono text-gray-300"
          >
            password
          </label>
          <input
            type="password"
            placeholder="******"
            name="password"
            className=" px-3 py-3 outline-none focus:ring-0 border-none bg-slate-800"
          />
        </div>
        <div className="w-full">
          <button  type="submit" className=" w-full mt-3 py-4 border-none outline-none bg-slate-950 text-white capitalize text-xl">register</button>
        </div>
      </form>
    </main>
  );
}

export default SignupPage;
