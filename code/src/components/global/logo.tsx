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
      <div className="lg:flex w-screen bg-gray-800 justify-end  py-2 h-auto">
        <div className="py-8 px-5 items-center mr-auto justify-center"> 
            <Link href="/" className="group">
                <div className="absolute">
                    <h1 className="text-4xl z-20 text-black ml-2 mt-1.5 group-hover:text-[#73c2fb]">&lt;DOGSCODE/&gt; </h1>
                </div>
                <div className="absolute z-10">
                    <h1 className="text-4xl  text-white transition-all">&lt;DOGSCODE/&gt; </h1>
                </div>
                <div className="absolute p-0 z-0">
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
      <div className="flex w-screen justify-center items-center">
        <Link href="/" className="group">
          <h1 className="text-lg italic font-bold tracking-normal text-white transition-all hover:tracking-widest hover:text-xl">&lt;DOGSCODE/&gt; </h1>
        </Link>
      </div>
    )
  }
}
