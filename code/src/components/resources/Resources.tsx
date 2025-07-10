"use client"
import { currentResources, Resource, ResourceType } from "@/models/resource"
import { ResourceComponent } from "./Resource";
import { useState } from "react";
import { ResourceFilter } from "./ResourceFilter";
import { ResourceBlurb } from "./ResourceBlurb";
import { Paginator } from "./paginator";
import PaginateResources from "@/utils/PaginateResources";
import FilterResources from "@/utils/FilterResources";





export const ResourcesComponent: React.FC = () => 
{
  // const res = fetch("/api/resources") //This will be important soon.
  const resources = currentResources;
  const [searchFilter,setSearchFilter] = useState<string|undefined>();
  const [tagFilter,setTagFilter] = useState<ResourceType>(ResourceType.Any);
  const [pageSize, setPageSize] = useState<number>(12);
  const [pageNumber,setPageNumber] = useState<number>(1);
  const filteredResources = FilterResources(resources,tagFilter,searchFilter)
  const resourcelines = PaginateResources(filteredResources,pageSize,pageNumber).map((item, key) => <ResourceComponent resource_={item} key={key}/>)
  return (
    <>
      <ResourceBlurb count={resources.length}/>
      <ResourceFilter setSearchQuery={setSearchFilter} setTag={setTagFilter} setPageSize={setPageSize} />
      <div className="mt-2">
        {resourcelines}
      </div>
      <Paginator selected={pageNumber} pageSize={pageSize} count={filteredResources.length} setPageNumber={setPageNumber}/>
    </>
  )
}
