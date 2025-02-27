import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root")!); /*

function App() {
  return (
    <section>
      <h2>Fun fact about React</h2>;
      <Content />
    </section>
  );
} */
root.render(<App />);
