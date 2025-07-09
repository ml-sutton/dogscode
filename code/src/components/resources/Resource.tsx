import { Resource } from "@/models/resource"
import Link from "next/link"
import { ResourceTypeComponent } from "./ResourceType"

interface ResourceComponentProps 
{
  resource_: Resource
}
export const ResourceComponent:React.FC<ResourceComponentProps> = (props) =>
{

  return (
<div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200 transition hover:shadow-lg">
  <div className="display flex justify-between">
    <h1 className="text-xl font-semibold text-gray-900">{props.resource_.name}</h1>
    <div className="mt-1">
      <ResourceTypeComponent type={props.resource_.type}/>
    </div>
  </div>
  <div className="mt-4 text-gray-700 text-sm leading-6">{props.resource_.body}</div>
  <Link
    href={props.resource_.href}
    className="mt-6 inline-block rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
  >
    Find Out More
  </Link>
</div>
  )
}
