import { createRoot } from "react-dom/client";
import { Hero } from "./components/Hero";

const root = createRoot(document.getElementById("root")!);

function NavBar() {
  return (
    <section>
      <ul>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </section>
  );
}

function App() {
  return (
    <section>
      <Hero />
      <NavBar />
      <h2>Fun fact about React</h2>;
    </section>
  );
}
root.render(<App />);
