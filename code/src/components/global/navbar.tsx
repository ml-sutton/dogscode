import React from "react";
import Link from "next/link";
import { Logo } from "./logo";
export const Navbar:React.FC = () => {
    return (
        <>
            <div className="lg:flex w-screen bg-gray-800 justify-end border-b-4 border-emerald-900 py-2 pr-4 h-auto">
                <Logo style="HEADER" />
                <div>
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
            </div>
        </>
    );
}
