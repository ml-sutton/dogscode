
interface ResourceBlurbProps
{
  count:number
}

export const ResourceBlurb:React.FC<ResourceBlurbProps> = ({count}) => 
{
  return (
    <div className="text-black w-screen bg-white">
      <h1>Resources</h1>
      <p>We aim to keep a growing list of records. Currently we have: {count} records with more to come. </p>
    </div>
  )
}
