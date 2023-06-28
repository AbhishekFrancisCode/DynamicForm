export interface CountryDto {
    data: Daum[]
    links: Link[]
    metadata: Metadata
  }
  
  export interface Daum {
    code: string
    currencyCodes: string[]
    name: string
    wikiDataId: string
  }
  
  export interface Link {
    rel: string
    href: string
  }
  
  export interface Metadata {
    currentOffset: number
    totalCount: number
  }