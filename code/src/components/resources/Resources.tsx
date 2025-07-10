"use client"
import { currentResources, Resource, ResourceType } from "@/models/resource"
import { ResourceComponent } from "./Resource";
import { useState } from "react";
import { ResourceFilter } from "./ResourceFilter";

function FilterResourcesByTag(_resources: Resource[],tag: ResourceType): Resource[]
{
  let filteredResources;
  switch(tag)
  {
    case ResourceType.Any:
      return _resources;
    case ResourceType.Activism:
      filteredResources = _resources.filter((resource)=>resource.type==ResourceType.Activism);
      break;
    case ResourceType.DIY:
      filteredResources = _resources.filter((resource)=>resource.type==ResourceType.DIY);
      break;
    case ResourceType.TransHealth:
      filteredResources = _resources.filter((resource)=>resource.type==ResourceType.TransHealth);
      break;
    default:
      return _resources;
      break;
  }
  return filteredResources
}


export const ResourcesComponent: React.FC = () => 
{
  const [resources,setResources] = useState<Resource[]>(currentResources);
  const [searchFilter,setSearchFilter] = useState<string|undefined>();
  const [tagFilter,setTagFilter] = useState<ResourceType>(ResourceType.Any);
  
  const resourcelines = FilterResourcesByTag(resources,tagFilter).map((item, key) => <ResourceComponent resource_={item} key={key}/>)
  return (
    <>
      <ResourceFilter setSearchQuery={setSearchFilter} setTag={setTagFilter} />
      <div className="">
        {resourcelines}
    </div>
    </>
  )
}
