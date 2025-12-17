"use client";

import { createContext, useContext, useState, useMemo } from "react";
import { ModelType, ExecutionMetrics, ResultData } from "../types";

interface AppContextType {
  model: ModelType;
  setModel: (m: ModelType) => void;

  temperature: number;
  setTemperature: (t: number) => void;

  maxTokens: number;
  setMaxTokens: (n: number) => void;

  metrics: ExecutionMetrics | null;
  setMetrics: (m: ExecutionMetrics | null) => void;

  result: ResultData | null;
  setResult: (r: ResultData | null) => void;

  resetExecution: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [model, setModel] = useState<ModelType>("gpt-4o" as ModelType);
  const [temperature, _setTemperature] = useState(0.7);
  const [maxTokens, _setMaxTokens] = useState(512);
  const [metrics, setMetrics] = useState<ExecutionMetrics | null>(null);
  const [result, setResult] = useState<ResultData | null>(null);

  const setTemperature = (t: number) =>
    _setTemperature(Math.min(1, Math.max(0, t)));

  const setMaxTokens = (n: number) =>
    _setMaxTokens(Math.min(8192, Math.max(1, n)));

  const resetExecution = () => {
    setMetrics(null);
    setResult(null);
  };

  const value = useMemo(
    () => ({
      model,
      setModel,
      temperature,
      setTemperature,
      maxTokens,
      setMaxTokens,
      metrics,
      setMetrics,
      result,
      setResult,
      resetExecution,
    }),
    [model, temperature, maxTokens, metrics, result]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
};

