import React from "react";
import { Disclosure } from "@headlessui/react";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
export default function CommentList({ commentsdata }) {
  return (
    <div className=" max-w[1200px] w-full mx-auto p-4 lg:p-10">
      <span className="text-xl md:text-2xl lg:text-3xl underline font-bold">Yorumlar</span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4">
        {commentsdata.results.length>1?commentsdata.results.map((item, key) => {
          return (
            <div className="w-full px-4" key={key}>
              <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-200 px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray-300 focus:outline-none">
                        <span className="text-xs md:text-sm lg:text-base">
                          <b className="pr-4">İsim: </b>
                          {item.author}
                        </span>
                        <BiUpArrow
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-black`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                        <span className="text-xs md:text-sm lg:text-base">
                          <b className="pr-4">Yorum:</b>
                          {item.content}
                        </span>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          );
        }):<span className="text-xs md:text-sm lg:text-base">Henüz bir yorum yapılmamış</span>}
      </div>
    </div>
  );
}
