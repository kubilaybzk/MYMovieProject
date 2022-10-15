import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Navigation from "./Navigation";
import { RiMovie2Line } from "react-icons/ri";
import Link from "next/link";
export default function Header() {

  //Modal'ın açık kapalı olması ile ilgili durumu tutan state.
  let [isOpen, setIsOpen] = useState(false);

  //Modal'ın açık kapalı olması ile ilgili forksiyonlar .
  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      <div className="flex flex-row justify-between md:justify-start items-center gap-5 w-full p-4 max-w-[1200px] mx-auto">
        {/* Logo kısmının ayarlandığı alan. */}
       <Link href={"/"}>
       <div className="flex flex-row gap-2 cursor-pointer">
          <RiMovie2Line className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-yellow-400" />
          <span className="text-[20px] md:text-[21px] lg:text-[25px] text-yellow-300">TTMovies</span>
        </div>
       </Link>
        {/* Arama yapma kısmının oluşturulduğu alan Buton olarak ayarlanıp input görüntüsü verildi. */}
        <button
          type="button"
          className="group flex h-6 w-6 items-center justify-center sm:justify-start  md:flex-none md:rounded-lg md:py-2.5 md:pl-4 md:pr-3.5 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300  md:w-4/5 lg:w-4/5 md:h-10"
          onClick={onOpen}
        >
          <svg
            aria-hidden="true"
            className="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 dark:fill-slate-500 md:group-hover:fill-slate-400"
          >
            <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
          </svg>
          <span className="sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400">
            Arama Yap
          </span>
        </button>
      </div>
      {/* Modal'ın render olması için gerekli olan alan. */}
      {isOpen &&
        createPortal(
          <Navigation setIsOpen={setIsOpen} isOpen={isOpen}  />,
          document.body
        )}
    </>
  );
}
