import React from "react"
import { Box, Text, Textarea } from "@chakra-ui/react"
import { HeaderColor } from "../styleConstants"

export default function UserInputComponent({ userInput, setUserInput }) {
    return (
        <Box
            border={"1px solid #333"}
            borderRadius={8}
            bg={'#1e1e1e'}
            overflow={'hidden'}
        >
            <Text
                padding={2}
                pl={4}
                fontSize={'md'}
                bg={HeaderColor}
                color={"white"}
                md={{ fontSize: 'lg' }}
            >
                Input
            </Text>

            <Textarea
                minH={'15vh'}
                color={'white'}
                fontSize={'medium'}
                border={0}
                outline={0}
                verticalAlign={'top'}
                borderRadius={0}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}

            ></Textarea>

        </Box>
    )
}