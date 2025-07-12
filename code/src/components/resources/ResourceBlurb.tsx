
interface ResourceBlurbProps
{
  count:number
}

export const ResourceBlurb:React.FC<ResourceBlurbProps> = ({count}) => 
{
  return (
    <div className="text-black w-screen bg-white">
      <h1>Resources</h1>
      <p>We aim to keep a growing list of records. Currently we have: {count} records with more to come. Currently a large portion of our resources are most applicable to transgender people living within Australia, but we hope to change this and have resources that can assist trans people from all over the world</p>
    </div>
  )
}
