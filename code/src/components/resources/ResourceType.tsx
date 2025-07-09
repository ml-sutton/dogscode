import { ResourceType } from "@/models/resource";
interface ResourceTypeTagProps {
  type: ResourceType;
}

export const ResourceTypeComponent: React.FC<ResourceTypeTagProps> = ({type}) => 
{
  let label = "";
  let style = "";

  switch (type) {
    case ResourceType.TransHealth:
      label = "Trans Health";
      style = "bg-pink-100 text-pink-800 ring-pink-300";
      break;
    case ResourceType.Activism:
      label = "Activism";
      style = "bg-indigo-100 text-indigo-800 ring-indigo-300";
      break;
    case ResourceType.DIY:
      label = "DIY";
      style = "bg-yellow-100 text-yellow-800 ring-yellow-300";
      break;
  }

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${style}`}>
      {label}
    </span>
  );
}
