import { Form, Formik } from "formik";
import { InputControl, TextareaControl, SubmitButton } from "formik-chakra-ui";
import { Heading, Stack, useToast } from "@chakra-ui/react";
import React from "react";
import { useMutation } from "react-query";
import axios from "axios";

const addNewPost = async (title, body) => {
    try {
        const { data } = await axios.post(
            `https://gorest.co.in/public/v2/users/20/posts`,
            {
                title,
                body,
            },
            {
                headers: {
                    Authorization: "Bearer 30f397282c4e1bda8642f080dfb1787b438d7f2f6485fd2e4907486eb970682f",
                },
            }
        );
        return data;
    } catch (error) {
        throw Error(error.response.statusText);
    }
};

const CreatePost = () => {
    const toast = useToast();

    const { isLoading, data, mutateAsync } = useMutation("addNewPost", addNewPost);
    console.log(data);
    return (
        <>
            <Formik
                initialValues={{ title: "", body: "" }}
                onSubmit={async (values) => {
                    await mutateAsync({ title: values.title, body: values.body });
                }}
            >
                <Form>
                    <Stack my={"5"}>
                        <Heading fontSize={"2xl"} textAlign="center">
                            Create New Post
                        </Heading>
                        <InputControl name="title" />
                        <TextareaControl name="body" />
                        <SubmitButton>Add Post</SubmitButton>
                    </Stack>
                </Form>
            </Formik>
        </>
    );
};

export default CreatePost;
