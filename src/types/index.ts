export type ModelType = "GPT-4" | "Claude-3" | "Custom";

export interface ExecutionMetrics {
  cost: number;
  latency: number;
  tokens: number;
}

export interface ResultData {
  title: string;
  sections: {
    heading: string;
    content: string;
  }[];
}
