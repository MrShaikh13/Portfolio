import Navbar from "./component/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;
