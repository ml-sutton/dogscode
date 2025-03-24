import React from "react";
import Link from "next/link";
export const Navbar:React.FC = () => {
    return (
        <>
            <div className="sticky lg:flex w-screen bg-emerald-500 justify-end border-b-4 border-emerald-900 py-2 h-auto">
                <div className="py-8 px-5 items-center mr-auto justify-center"> 
                    <Link href="/" className="group">
                        <div className="absolute">
                            <h1 className="text-4xl z-20 text-black ml-1 mt-1 group-hover:text-[#73c2fb]">&lt;DOGSCODE/&gt; </h1>
                        </div>
                        <div className="absolute z-10">
                            <h1 className="text-4xl  text-white transition-all">&lt;DOGSCODE/&gt; </h1>
                        </div>
                        <div className="absolute p-0 z-0">
                            <h1 className="text-4xl  text-black transition-all ml-1.0 mt-0.5 group-hover:text-[#F5A9B8] ">&lt;DOGSCODE/&gt; </h1>
                        </div>
                    </Link>
                </div>
                <div>
                    <ul className="flex gap-5 px-5 py-8 text-3xl">
                        <li>
                            <Link href="/projects">PROJECTS</Link>
                        </li>
                        <li>
                            <Link href="/resume ">RESUME</Link>
                        </li>
                        <li>
                            <Link href="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}