import { Main } from "./src/Main";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <Main />
    </PaperProvider>
  );
}
