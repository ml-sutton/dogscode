"use client"
import Link from "next/link"
import { Logo } from "./logo"

export const Footer:React.FC = () =>
{
  return (
    <div className="flex flex-col w-screen bg-gray-800 justify-center items-center border-t-4 border-emerald-900 py-2 h-auto">
      <div className="text-center ">
        <Link href={"#top"} className="italic text-lg lg:transition-all lg:hover:tracking-widest lg:hover:text-xl lg:hover:font-extrabold">Go To Top</Link>
      </div>
      <div className="px-4 text-center">
        <p>&copy; 2025 Dogscode.app . Distributed under the terms of the <a className="italic underline"href="https://www.gnu.org/licenses/gpl-3.0.en.html" target="_blank" rel="noopener noreferrer">GNU General Public License v3.0</a>.</p>
      </div>
      <div className="pt-6">
        <h1 className="capitalize text-lg font-bold text-center">site map</h1>
        <div className="py-2.5">
          <ul className="flex gap-5 flex-col lg:flex-row">
            <li>
              <Link className=" text-sm italic capitalize font-bold lg:transition-all lg:hover:tracking-widest lg:hover:text-lg lg:hover:font-extrabold"href="/projects">Our Projects</Link>
            </li>
            <li>
              <Link className=" text-sm italic capitalize font-bold lg:transition-all lg:hover:tracking-widest lg:hover:text-lg lg:hover:font-extrabold"href="/resources">Resources & Support</Link>
            </li>
            <li>
              <Link className=" text-sm italic capitalize font-bold lg:transition-all lg:hover:tracking-widest lg:hover:text-lg lg:hover:font-extrabold"href="/get-involved">Get Involved</Link>
            </li>
            <li>
              <Link className=" text-sm italic capitalize font-bold lg:transition-all lg:hover:tracking-widest lg:hover:text-lg lg:hover:font-extrabold"href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className=" py-6">
        <Logo style="FOOTER"/>
      </div>
      

    </div>
  )
}
