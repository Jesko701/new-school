import { Description } from "./components/Description";
import { EndSection } from "./components/EndSection";
import { QuoteSection } from "./components/QuoteSection";
import { StatsSection } from "./components/StatsSection";
import { Targets } from "./components/Targets";
export default function about() {
  return (
    <div className="flex flex-col items-center bg-white">
      <div className="w-full bg-white py-7 flex justify-center">
        <h1 className="text-4xl font-bold mb-8 mt-5 text-black">About Us</h1>
      </div>
      <Description />
      <QuoteSection />
      <StatsSection />
      <Targets />
      <EndSection />
    </div>
  );
}
