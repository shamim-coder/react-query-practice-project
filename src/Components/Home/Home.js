import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Heading, Spinner, Grid, useToast, Container } from "@chakra-ui/react";
import Post from "./Post";
import CreatePost from "../CreatePost/CreatePost";

const Home = () => {
    const toast = useToast();
    const getPosts = async () => {
        try {
            const { data } = await axios.get("https://gorest.co.in/public/v2/users/20/posts");
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
        <Container maxW={"1300px"} mt="4" pb={"4"}>
            <CreatePost />
            <Heading textAlign={"center"}>All Posts</Heading>
            {isLoading ? (
                <Grid placeItems={"center"} height={"100vh"}>
                    <Spinner />
                </Grid>
            ) : (
                data?.map((post) => <Post key={post.id} post={post} />)
            )}
        </Container>
    );
};

export default Home;
