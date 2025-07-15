import React from "react";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import { Toaster } from "../components/ui/toaster";
import { HeaderColor } from "../styleConstants";


export default function OutputComponent({ isError, output }) {

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
                    pl={4}
                    bg={HeaderColor}
                    top={0}
                >
                    <Text fontSize={'md'} md={{ fontSize: 'lg' }}>
                        Output
                    </Text>

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