import { ThemeProvider } from "styled-components";
import Todo from "./pages/Todo";
import GlobalStyles from './styles/global';

function App() {
  return (
      <>
        <GlobalStyles/>
        <Todo/>
      </>
  );
}

export default App;
