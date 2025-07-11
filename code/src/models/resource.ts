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
  {
    name: "Redflag",
    href: "https://redflag.org.au/",
    type: ResourceType.Activism,
    body: "A not-for-profit left wing newspaper run by socialist alternative"
  },
  { 
    name: "Trans Justice",
    href: "https://transjustice.org.au/",
    type: ResourceType.Activism,
    body: "An Australian movement which stands up for freedom, justice and equality for all trans and gender-diverse people"
  },
  {
    name: "DIY HRT Wiki",
    href: "https://diyhrt.wiki/index",
    type: ResourceType.DIY,
    body: "Wiki full of useful information about DIY HRT."
  },
  {
    name: "The Gender Dysphoria Bible",
    href: "https://genderdysphoria.fyi/en/",
    type: ResourceType.TransHealth,
    body: "A resource that dives into gender dysphoria and the many ways that it manifests. It also talks about what it means to be transgender."
  },
  {
    name: "Equinox",
    href: "https://equinox.org.au/",
    type: ResourceType.TransHealth,
    body: "Equinox is a bulk-billed gender diverse healthcare provider operating out of Thorne Harbour Health in melbourne. "
  }
  
]
