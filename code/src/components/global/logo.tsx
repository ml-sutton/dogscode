import Link from "next/link"

interface LogoProps 
{
  style: "HEADER" | "FOOTER" | "SMALL"
}

export const Logo: React.FC<LogoProps> = (component_props: LogoProps) => 
{
  if(component_props.style==="HEADER")
  {
    return (
      <div className="flex w-screen bg-gray-800 justify-end pb-4 py-2 h-auto">
        <div className="flex py-4 lg:py-4 px-5 items-center mr-auto justify-center"> 
            <Link href="/" className="group inline-grid grid-cols-1 grid-rows-1 place-items-center">
                <div className="col-start-1 row-start-1">
                    <h1 className="col-start-1 row-start-1 text-4xl z-20 text-black ml-2 mt-1.5 group-hover:text-[#73c2fb]">&lt;DOGSCODE/&gt; </h1>
                </div>
                <div className="col-start-1 row-start-1 z-10">
                    <h1 className="text-4xl  text-white transition-all">&lt;DOGSCODE/&gt; </h1>
                </div>
                <div className="col-start-1 row-start-1 z-0">
                    <h1 className="text-4xl  text-black transition-all ml-1.25 mt-0.75 group-hover:text-[#F5A9B8] ">&lt;DOGSCODE/&gt; </h1>
                </div>
            </Link>
        </div>
      </div>
    )
  }
  if(component_props.style==="FOOTER")
  {
    return (
      <div className="flexw-screen justify-center items-center">
        <Link href="/" className="group">
          <h1 className="text-lg italic font-bold tracking-normal text-white transition-all hover:tracking-widest hover:text-xl">&lt;DOGSCODE/&gt; </h1>
        </Link>
      </div>
    )
  }
}
