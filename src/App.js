import React from "react";
import { Header } from "./layout/header";
import { Main } from "./layout/main";
import { Footer } from "./layout/footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
