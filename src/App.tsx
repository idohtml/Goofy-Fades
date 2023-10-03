import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
