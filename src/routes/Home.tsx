import Hero from "@/components/layout/Hero";
import Pricing from "@/components/layout/Pricing";
import Steps from "@/components/layout/Steps";
import Subhero from "@/components/layout/Subhero";
import { ThemeProvider } from "@/components/theme-provider";

function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Hero />
      <Subhero />
      <Steps />
      <Pricing />
    </ThemeProvider>
  );
}

export default Home;
