import PromptBar from "../components/prompt/PromptInput";
import AnimatedOrb from "../components/layout/AnimatedOrb";
import StatsRow from "../components/layout/StatsRow";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <AnimatedOrb />

      <StatsRow totalCost="0.00 cents" totalWait="0.00 seconds" />
      <PromptBar />
    </main>
  );
}