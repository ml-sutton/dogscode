import { Resource } from "@/models/resource";

export default function FilterResourcesBySearchQuery(_resources:Resource[],searchQuery:string|undefined): Resource[]
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
