export interface Card {
  id: string
  title: string
  content: string
  date: Date
  img?: string
  image_url?: string
  imgName?: string
  summary: string
  published_at?: Date
}

export interface Article {
  id: number
  title: string
  url: string
  image_url: string
  news_site: string
  summary: string
  date?: Date
  published_at: Date
  updated_at: Date
  featured: boolean
  launches: []
  events: []
}

export interface ApiResponse {
  results: Article[];
}
