import Hero from "@/components/layout/Hero";
import Subhero from "@/components/layout/Subhero";
import { ThemeProvider } from "@/components/theme-provider";

function Home() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Hero />
      <Subhero />
    </ThemeProvider>
  );
}

export default Home;
