import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { Container, Stack, Flex, Text, Heading, Spinner, Grid, Button, useToast } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const SinglePost = () => {
    const toast = useToast();
    const { id } = useParams();
    const navigate = useNavigate();

    const getPosts = async () => {
        try {
            const { data } = await axios.get(`https://gorest.co.in/public/v2/posts/${id}`);

            return data;
        } catch (error) {
            throw Error("unable to fetch posts");
        }
    };

    const pageId = parseInt(id);

    const { data, isLoading } = useQuery(["post", pageId], () => getPosts(pageId), {
        onError: (error) => {
            toast({ status: "error", title: error.message });
        },
    });

    return (
        <Container maxW={"1300px"} mt="4" pb={"4"}>
            <Flex mb={"5"} justify="space-between">
                <Button onClick={() => navigate(`/post/${pageId - 1}`)} colorScheme="orange">
                    Previous
                </Button>
                <Button onClick={() => navigate(`/post/${pageId + 1}`)} colorScheme="green">
                    Next
                </Button>
            </Flex>
            {isLoading ? (
                <Grid placeItems={"center"} height={"100vh"}>
                    <Spinner />
                </Grid>
            ) : (
                <Stack p="4" boxShadow={"md"} borderRadius="xl" border={"1px solid #ccc"}>
                    <Flex justify="space-between">
                        <Text>UserId: {data?.user_id}</Text>
                        <Text>PostId: {data?.id}</Text>
                    </Flex>
                    <Heading fontSize={"2xl"}>Title: {data?.title}</Heading>
                    <Text>{data?.body}</Text>
                    <Text>{""}</Text>
                </Stack>
            )}
        </Container>
    );
};

export default SinglePost;
