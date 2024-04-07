import Background from "./Components/Background";
import Foreground from "./Components/Foreground";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-800 relative">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
