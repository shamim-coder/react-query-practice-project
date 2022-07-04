import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import { ReactQueryDevtools } from "react-query/devtools";
import SinglePost from "./Components/Home/SinglePost";
import Header from "./Components/Header/Header";

const App = () => {
    const queryClient = new QueryClient();
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/post/:id" element={<SinglePost />} />
                </Routes>
                <ReactQueryDevtools />
            </QueryClientProvider>
        </ChakraProvider>
    );
};

export default App;
