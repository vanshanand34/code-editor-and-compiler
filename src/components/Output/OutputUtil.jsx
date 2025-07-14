import React from "react";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import { Toaster } from "../ui/toaster";


export default function OutputComponent({ isError, isLoading, output, runCode }) {

    const formattedOutput = output
        .split('\n')
        .map(
            (outputLine, index) => <Text key={index}>{outputLine}</Text>
        );

    return (
        <Box
            color={"white"}
            overflow={'hidden'}
            border={'1px solid #333'}
            bg={'#1e1e1e'}
            borderRadius={8}
            flex={1}
        >
            <Toaster />

            <Box
                display={'flex'}
                flexDir={'column'}
                flexGrow={1}
                flexBasis={'max-content'}
                minH={0}
                maxH={'70vh'}
                overflowY={'auto'}
            >
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    padding={2}
                    px={3}
                    bg={'blackAlpha.500'}
                    top={0}
                >
                    <Text fontSize={'md'} >
                        Output
                    </Text>

                    <Button
                        variant={"outline"}
                        fontSize={'xs'}
                        md={{
                            fontSize: 'md',
                            px: 3,
                            py: 0.5
                        }}
                        paddingX={2} paddingY={0}
                        borderColor={"#fff3"}
                        color={"gray.200"}
                        _hover={{ color: "gray.600" }}
                        onClick={runCode}
                    >
                        {isLoading && <Spinner size={'sm'} animationDuration={'slowest'} />}
                        Run Code
                    </Button>
                </Box>
                <Box
                    px={2}
                    pb={24}
                    pt={2}
                    borderColor={isError ? "red.500" : "#333"}
                    color={isError ? "red.300" : "gray.100"}
                    overflowY={'auto'}
                    minH={0}
                >
                    {formattedOutput || "Click 'Run Code' to see the output here"}
                </Box>
                <Box mt={1} ></Box>
            </Box>
        </Box>
    )
}