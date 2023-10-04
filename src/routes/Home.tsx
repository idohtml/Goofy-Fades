import Hero from "@/components/layout/Hero";
import Pricing from "@/components/layout/Pricing";
import Subhero from "@/components/layout/Subhero";
import { ThemeProvider } from "@/components/theme-provider";

function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Hero />
      <Subhero />
      <Pricing />
    </ThemeProvider>
  );
}

export default Home;
