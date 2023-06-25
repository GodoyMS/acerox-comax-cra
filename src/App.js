import { BrowserRouter } from "react-router-dom";

import { AppRouter } from "./routes";
import { Provider } from "react-redux";
import { userStore } from "@redux/userStore";
// Design Pattern Atomic: https://medium.com/pixel-perfect/qu%C3%A9-es-el-dise%C3%B1o-at%C3%B3mico-a5cbed06688e
// Design Pattern High Order Components (HOC): https://es.legacy.reactjs.org/docs/higher-order-components.html
const App = () => (
  <>
    <Provider store={userStore}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </>
);

export default App;
