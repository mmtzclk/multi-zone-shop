"use client";

import { LiaLongArrowAltLeftSolid } from "react-icons/lia";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-white border-b border-black/10">
        <div className="container-block flex items-center justify-between gap-6 lg:gap-10 py-4 lg:py-6">
          <div className="flex items-center gap-12">
            <button
              onClick={() => history.back()}
              className="flex items-center gap-2 font-medium text-lg lg:text-xl"
            >
              <LiaLongArrowAltLeftSolid className="size-5 lg:size-6" />
              <span>Back</span>
            </button>
            <a href="/">
              <img src="/logo.svg" className="w-32 lg:w-40" alt="Logo" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
