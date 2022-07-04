import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Heading, Spinner, Grid, useToast } from "@chakra-ui/react";
import Post from "./Post";

const Home = () => {
    const toast = useToast();
    const getPosts = async () => {
        try {
            const { data } = await axios.get("https://gorest.co.in/public/v2/posts");

            return data;
        } catch (error) {
            throw Error("unable to fetch posts");
        }
    };

    const { data, isLoading } = useQuery("posts", getPosts, {
        onError: (error) => {
            toast({ status: "error", title: error.message });
        },
    });

    return (
        <div>
            <Heading textAlign={"center"}>All Posts</Heading>
            {isLoading ? (
                <Grid placeItems={"center"} height={"100vh"}>
                    <Spinner />
                </Grid>
            ) : (
                data?.map((post) => <Post key={post.id} post={post} />)
            )}
        </div>
    );
};

export default Home;
