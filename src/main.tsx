import { createRoot } from "react-dom/client";
import "./index.css";
import { MainPage } from "./ui/MainPage";

const rootEl = document.getElementById("root");
createRoot(rootEl!).render(<MainPage />);