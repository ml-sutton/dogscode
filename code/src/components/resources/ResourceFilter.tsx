import { ResourceType } from "@/models/resource"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

interface ResourceFilterProps 
{
  setSearchQuery:Dispatch<SetStateAction<string | undefined>>,
  setTag:Dispatch<SetStateAction<ResourceType>>,
  setPageSize: Dispatch<SetStateAction<number>>
}

function handleTagSelectElement(e:ChangeEvent<HTMLSelectElement>)
{
  const value = e.target.value;
  switch(value)
  {
    case "T":
      return ResourceType.TransHealth;
    case "D":
      return ResourceType.DIY;
    case "A":
      return ResourceType.Activism;
    default: 
      return ResourceType.Any;
  }
}


export const ResourceFilter: React.FC<ResourceFilterProps> = ({setTag,setSearchQuery,setPageSize}) => {
  
  return (
    <div className="text-black w-screen flex items-center flex-col justify-center lg:flex-row lg:justify-end py-4 px-4">
      <div className="lg:mr-auto">
        <h1 className="text-xl font-bold">Resource Search Filters</h1>
      </div>
      <div className="flex">
        <div className="">
          <input name="SearchQuery" type="text" placeholder="search term" className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-400" onChange={(e)=>setSearchQuery(e.target.value)}/>
        </div>
        <select name="selectTag" onChange={(e)=>setTag(handleTagSelectElement(e))} className="w-fit border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-400">
          <option value="">All</option>
          <option value="T">Trans health</option>
          <option value="D">DIY</option>
          <option value="A">Activism</option>
        </select>
        <select name="selectNumber" onChange={(e)=>setPageSize(+e.target.value)} className="lg:mr-4 w-fit border border-gray-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-400">
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="48">48</option>
        </select>
      </div>

    </div>
  )
}
