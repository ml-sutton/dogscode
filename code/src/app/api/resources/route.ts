import {NextApiRequest} from 'next'
// time to use github as a cms
export async function GET(request:NextApiRequest)
{
  console.log(request)
  return new Response();
}
