import { Box, Button, Spinner, Text, Textarea } from "@chakra-ui/react";
import executeCode from "./runCode";
import { useState } from "react";
import { Toaster, toaster } from "./ui/toaster";
import UserInputComponent from "./Output/InputUtil";
import OutputComponent from "./Output/OutputUtil";

export default function Output({ language, editorRef }) {

    const [output, setOutput] = useState("");
    const [userInput, setUserInput] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function runCode() {
        setIsLoading(true);
        try {
            const sourceCode = editorRef.current.getValue();
            if (!sourceCode) return;
            const { run: result } = await executeCode(language, sourceCode, userInput);
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

        <Box
            width={'100%'}
            md={{ width: '80%', height: '80vh' }}
            lg={{ width: '50%' }}
            overflow={'hidden'}
            paddingX={4}
            display={'flex'}
            flexDirection={'column'}
            gapY={4}
            height={'60vh'}
        >
            <UserInputComponent userInput={userInput} setUserInput={setUserInput} />

            {/* Output */}

            <Box
                color={"white"}
                overflow={'hidden'}
                border={'1px solid #333'}
                bg={'#1e1e1e'}
                borderRadius={8}
                flex={1}
            >
                <Toaster />

                <OutputComponent
                    isError={isError}
                    isLoading={isLoading}
                    output={output}
                    runCode={runCode}
                />
            </Box>
        </Box>
    )
}

