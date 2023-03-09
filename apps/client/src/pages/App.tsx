import Login from "pages/Login";
import "styles/index.scss";


import { Providers } from "hooks/Providers";


export const App = () => (
  <Providers>
    <Login />
  </Providers>
);
