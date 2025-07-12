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
