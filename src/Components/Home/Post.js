import { Container, Stack, Flex, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
    return (
        <Container maxW={"1300px"} mt="4" pb={"4"}>
            <Stack p="4" boxShadow={"md"} borderRadius="xl" border={"1px solid #ccc"}>
                <Flex justify="space-between">
                    <Text>UserId: {post.user_id}</Text>
                    <Text>PostId: {post.id}</Text>
                </Flex>
                <Heading fontSize={"2xl"}>Title: {post.title}</Heading>
                <Text>{post.body}</Text>
                <Text>{""}</Text>
                <Link style={{ color: "orange" }} to={`/post/${post.id}`}>
                    See Details
                </Link>
            </Stack>
        </Container>
    );
};

export default Post;
