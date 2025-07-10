import { Resource } from "@/models/resource";
import Take from "./Take";
import Skip from "./Skip";
export default function PaginateResources(_resources:Resource[],pageSize:number,pageNumber:number):Resource[]
{
  
  if(_resources.length < pageSize)
  {
    return _resources;
  }
  const skipped = (pageNumber-1) * pageSize;
  const result = Skip(_resources,skipped);
  return Take(result, pageSize);
}
