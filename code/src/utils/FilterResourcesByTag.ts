import { Resource, ResourceType } from "@/models/resource";

export default function FilterResourcesByTag(_resources: Resource[],tag: ResourceType): Resource[]
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
