import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);

function App() {
  return <h2>Hello React developer</h2>;
}
root.render(<App />);
