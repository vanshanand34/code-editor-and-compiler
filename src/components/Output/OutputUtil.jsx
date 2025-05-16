import React from "react";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";


export default function OutputComponent({ isError, isLoading, output, runCode }) {

    const formattedOutput = output
        .split('\n')
        .map(
            (outputLine, index) => <Text key={index}>{outputLine}</Text>
        );

    return (
        <Box
            display={'flex'}
            flexDir={'column'}
            flexGrow={1}
            flexBasis={'fit-content'}
        >
            <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'space-between'}
                padding={2}
                px={3}
                bg={'blackAlpha.500'}
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
                flexGrow={1}
                p={2}
                borderColor={isError ? "red.500" : "#333"}
                color={isError ? "red.300" : "gray.100"}
            >
                {formattedOutput || "Click 'Run Code' to see the output here"}
            </Box>
        </Box>
    )
}