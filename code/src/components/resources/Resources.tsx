"use client"
import { currentResources, Resource, ResourceType } from "@/models/resource"
import { ResourceComponent } from "./Resource";
import { useState } from "react";
import { ResourceFilter } from "./ResourceFilter";
import { ResourceBlurb } from "./ResourceBlurb";

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

function FilterResourcesBySearchQuery(_resources:Resource[],searchQuery:string|undefined): Resource[]
{
  if(searchQuery==undefined||searchQuery=="")
  {
    return _resources;
  }
  const filteredResources = _resources.filter((resource)=> {
    const titleContains = resource.name.toLowerCase().includes(searchQuery.toLowerCase());
    const bodyContains = resource.body.toLowerCase().includes(searchQuery.toLowerCase());
    return titleContains||bodyContains;
  })
  return filteredResources;
}
function FilterResources(_resources: Resource[],tag:ResourceType,searchQuery:string|undefined): Resource[]
{
  const filteredByQueryResources = FilterResourcesBySearchQuery(_resources,searchQuery);
  const filteredByTagResources = FilterResourcesByTag(filteredByQueryResources,tag);
  return filteredByTagResources;
}
export const ResourcesComponent: React.FC = () => 
{
  const resources = currentResources;
  const [searchFilter,setSearchFilter] = useState<string|undefined>();
  const [tagFilter,setTagFilter] = useState<ResourceType>(ResourceType.Any);
  const resourcelines = FilterResources(resources,tagFilter,searchFilter).map((item, key) => <ResourceComponent resource_={item} key={key}/>)
  return (
    <>
      <ResourceBlurb count={resourcelines.length}/>
      <ResourceFilter setSearchQuery={setSearchFilter} setTag={setTagFilter} />
      <div className="">
        {resourcelines}
      </div>
    </>
  )
}
