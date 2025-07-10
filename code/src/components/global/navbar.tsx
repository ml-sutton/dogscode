import React from "react";
import Link from "next/link";
import { Logo } from "./logo";
export const Navbar:React.FC = () => {
    return (
        <>
            <div className="flex w-screen bg-gray-800 justify-end border-b-4 border-emerald-900 py-2 pr-4 h-auto">
                <Logo style="HEADER" />
                <div className="hidden lg:block">
                    <ul className="flex gap-5 px-5 py-8 text-3xl">
                        <li>
                            <Link href="/projects">PROJECTS</Link>
                        </li>
                        <li>
                            <Link href="/resources">RESOURCES</Link>
                        </li>
                        <li>
                            <Link href="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>

                <div className="block lg:hidden ">
                  <input type="checkbox" id="hamburger-toggle" className="peer hidden" />
                  <div className="flex justify-center items-center p-8">
                    <label htmlFor="hamburger-toggle" className="flex flex-col w-8 h-6 justify-between cursor-pointer z-50 relative px-1">
                      <span className="block h-1 bg-white rounded transition-all peer-checked:rotate-45 peer-checked:translate-y-2"></span>
                      <span className="block h-1 bg-white rounded transition-all peer-checked:opacity-0"></span>
                      <span className="block h-1 bg-white rounded transition-all peer-checked:-rotate-45 peer-checked:-translate-y-2"></span>
                    </label>
                  </div>
                  <div className="peer-checked:block hidden mt-4 bg-gray-800 shadow-lg rounded-lg w-full absolute left-0 z-40">
                    <ul className="flex flex-col gap-5 px-5 py-8 text-2xl">
                      <li>
                        <a href="/projects" className="hover:text-blue-600 transition">PROJECTS</a>
                      </li>
                      <li>
                        <a href="/resources" className="hover:text-blue-600 transition">RESOURCES</a>
                      </li>
                      <li>
                        <a href="/contact" className="hover:text-blue-600 transition">CONTACT</a>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>  
        </>
    );
}
