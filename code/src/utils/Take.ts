export default function Take<T>(source: Iterable<T>, count:number): T[] 
{
  const result: T[] = [];
  let i = 0;
  for(const item of source)
  {
    if(++i>count)
    {
      break;
    }
    result.push(item);
  }

  return result;
}
