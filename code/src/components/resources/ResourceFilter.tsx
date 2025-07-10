import { ResourceType } from "@/models/resource"
import { ChangeEvent, Dispatch, SetStateAction } from "react"

interface ResourceFilterProps 
{
  setSearchQuery:Dispatch<SetStateAction<string | undefined>>,
  setTag:Dispatch<SetStateAction<ResourceType>>
}

function handleSelectElement(e:ChangeEvent<HTMLSelectElement>)
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


export const ResourceFilter: React.FC<ResourceFilterProps> = ({setTag,setSearchQuery}) => {
  
  return (
    <div className="text-black w-screen flex justify-center py-4 px-4">
      <div className="">
        <input name="SearchQuery" type="text" className="bg-gray-400 border-b-1" onChange={(e)=>setSearchQuery(e.target.value)}/>
      </div>
      <select name="" id="" onChange={(e)=>setTag(handleSelectElement(e))}>
        <option selected value="">All</option>
        <option value="T">Trans health</option>
        <option value="D">DIY</option>
        <option value="A">Activism</option>
      </select>
    </div>
  )
}
