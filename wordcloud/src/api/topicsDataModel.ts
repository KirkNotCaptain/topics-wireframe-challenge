export interface Sentiment {
  negative?: number;
  neutral?: number;
  postive?: number;
}

export interface Day {
  data?: string;
  volume?: number;
} 

export interface Days extends Array<Day> {}

export interface PageType {
  blog: number,
  facebook: number,
  forum: number,
  general: number,
  image: number,
  news: number,
  review: number,
  twitter: number,
  video: number
}

export interface Query {
  id: number,
  name: string,
  volume: number
}

export interface Queries extends Array<Query>{};

export interface TopicData {
  id: string;
  label: string;
  volume: number;
  type: string;
  sentiment: Sentiment;
  sentimentScore: number;
  burst: number;
  days: Days;
  pageType: PageType;
  queries: Queries;
}
export interface TopicsData extends Array<TopicData>{};

export interface ApiTopicsData {
  topics: TopicsData ;
};