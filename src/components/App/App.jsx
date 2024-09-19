import { Button } from "../styled";
import { Status } from "../ui/status/Status";
import { GlobalStyle } from "./styles";
export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Status type="done" />
    </>
  );
};
