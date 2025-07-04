import { HeroSection, MainSection } from "./home";

export const metadata = {
  title: "School Project",
  description: "School landing project",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MainSection />
    </main>
  );
}
