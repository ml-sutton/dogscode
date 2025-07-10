import { Resource, ResourceType } from "@/models/resource";
import FilterResourcesBySearchQuery from "./FilterResourcesBySearchQuery";
import FilterResourcesByTag from "./FilterResourcesByTag";

export default function FilterResources(_resources: Resource[],tag:ResourceType,searchQuery:string|undefined): Resource[]
{
  const filteredByQueryResources = FilterResourcesBySearchQuery(_resources,searchQuery);
  const filteredByTagResources = FilterResourcesByTag(filteredByQueryResources,tag);
  return filteredByTagResources;
}
