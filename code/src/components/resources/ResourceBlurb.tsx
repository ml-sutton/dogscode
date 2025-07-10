
interface ResourceBlurbProps
{
  count:number
}

export const ResourceBlurb:React.FC<ResourceBlurbProps> = ({count}) => 
{
  return (
    <div className="text-black w-screen bg-white">
      <h1>Resources</h1>
      <p>{count}</p>
    </div>
  )
}
