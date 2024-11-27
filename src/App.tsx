import Home from "./pages/home";
import { SurveyStoreProvider } from "./store";

function App() {
  return (
    <SurveyStoreProvider>
      <Home />
    </SurveyStoreProvider>
  );
}

export default App;
