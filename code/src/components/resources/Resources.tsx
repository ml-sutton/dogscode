import { currentResources } from "@/models/resource"
import { ResourceComponent } from "./Resource";

export const ResourcesComponent: React.FC = () => 
{
  const resources = currentResources;
  const resourcelines = resources.map((item, key) => <ResourceComponent resource_={item} key={key}/>)
  return (
    <>
    <div className="">
      {resourcelines}
    </div>
    </>
  )
}
