import { Dispatch, SetStateAction } from "react";

interface PaginatorProps
{
  count: number,
  pageSize: number,
  setPageNumber:Dispatch<SetStateAction<number>>
  selected: number;
}

export const Paginator:React.FC<PaginatorProps> = ({count,pageSize,setPageNumber,selected}) =>
{
  const pagesNeeded = Math.ceil(count/pageSize);
  const pageNumbers = Array.from({length:pagesNeeded},(_,i)=>i+1);
  return (
    <div className="w-screen text-black flex justify-between px-6 py-4">
      <div className=""><h1 className="text-lg">Count : {count}</h1></div>
      <div className="">
        {pageNumbers.map((number, key)=>(<a className={`border-2 border-gray-300 p-2 mx-0.5 rounded-lg cursor-pointer ${number==selected?"bg-gray-200 border-gray-400":""}`}  onClick={()=>setPageNumber(number)} key={key}>{number}</a>))}
      </div>
    </div>
  )
}
