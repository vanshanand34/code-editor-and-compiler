import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import executeCode from "./runCode";
import { useState } from "react";
import { Toaster, toaster } from "./ui/toaster";

export default function Output({ language, editorRef }) {

    const [output, setOutput] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function runCode() {
        setIsLoading(true);
        try {
            const sourceCode = editorRef.current.getValue();
            if (!sourceCode) return;
            const { run: result } = await executeCode(language, sourceCode);
            setOutput(result.output);

            setIsError(result.code == 1 ? true : false);

            toaster.create({
                title: "Success",
                description: "Code executed successfully",
                type: "success",
                duration: 3000
            });

        } catch (error) {
            toaster.create({
                title: "An error occurred",
                description: error.message || "Unable to run code",
                type: "error",
                duration: 3000
            })
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Box width={'50%'} color={"white"} p={2}>
            <Toaster />
            <Text marginBottom={2} fontSize={'lg'} paddingTop={5} >Output</Text>
            <Button
                variant={"outline"}
                marginBottom={4}
                fontSize={'smaller'}
                paddingX={2} paddingY={0.5}
                borderColor={"green"}
                color={"gray.200"}
                _hover={{ color: "green" }}
                onClick={runCode}
            >
                {isLoading && <Spinner size={'sm'} />}
                Run Code
            </Button>
            <Box
                height={"75vh"}
                p={2}
                border={"1px solid"}
                borderRadius={4}
                borderColor={isError ? "red.500" : "#333"}
                color={isError ? "red.300" : "gray.500"}
            >{
                    (
                        output.split("\n").map(
                            (outputLine, index) =>
                                <Text key={index}>{outputLine}</Text>
                        )
                    ) || "Click 'Run Code' to see the output here"}
            </Box>
        </Box>
    )
}