import { Description } from "./components/Description";
import { QuoteSection } from "./components/QuoteSection";
import { StatsSection } from "./components/StatsSection";
export default function about() {
  return (
    <div className="flex flex-col items-center  bg-gray-100">
      <div className="w-full bg-white py-7 flex justify-center">
        <h1 className="text-4xl font-bold mb-8 mt-5 text-black">About Us</h1>
      </div>
      <Description />
      <QuoteSection />
      <StatsSection />
    </div>
  );
}
