import React from "react";
import LibraryProvider from "./store/Context";
import Button from "./components/Button";

function App() {
  return (
    <LibraryProvider>
      <Button text="TESTING" />
    </LibraryProvider>
  );
}

export default App;
