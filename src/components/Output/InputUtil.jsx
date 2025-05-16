import React from "react"
import { Box, Text, Textarea } from "@chakra-ui/react"

export default function UserInputComponent({ userInput, setUserInput }) {
    return (
        <Box
            border={"1px solid #333"}
            borderRadius={8}
            overflow={'hidden'}
        >
            <Text
                px={3} py={4}
                fontSize={'md'}
                bg={'blackAlpha.600'}
                color={"white"}
            >
                Input
            </Text>

            <Textarea
                minH={'15vh'}
                color={'white'}
                fontSize={'medium'}
                border={0}
                verticalAlign={'top'}
                borderRadius={0}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                bg={'#1e1e1e'}

            ></Textarea>

        </Box>
    )
}