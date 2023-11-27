import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainComponent from "./components/MainComponent";
import Container from "./components/Container";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <MainComponent />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
