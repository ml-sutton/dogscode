export interface Resource
{
  name: string
  href: string
  type: ResourceType 
  body: string
}
export enum ResourceType
{
  Any,
  TransHealth,
  Activism,
  DIY
}
export const currentResources:Resource[] = [
  {
    name: "Transhub",
    href: "https://www.transhub.org.au/",
    type: ResourceType.TransHealth,
    body: "General resources for transgender individuals in Australia"
  },
  {
    name: "Injectable Estradiol Simulator",
    href: "https://transfemscience.org/misc/injectable-e2-simulator-advanced/",
    type: ResourceType.DIY,
    body: "A program that simulates how injected estrogen works within the body"
  },
  
]
