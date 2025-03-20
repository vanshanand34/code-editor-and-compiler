import { Box, Button, Text } from "@chakra-ui/react";

export default function Output() {
    return (
        <Box width={'50%'} color={"white"} p={2}>
            <Text marginBottom={2} fontSize={'lg'} paddingTop={5} >Output</Text>
            <Button 
                variant={"outline"} 
                marginBottom={4}
                fontSize={'smaller'} 
                paddingX={2} paddingY={0.5} 
                borderColor={"green"}
            >
                Run Code
            </Button>
            <Box
                height={"75vh"}
                p={2}
                border={"1px solid"}
                borderRadius={4}
                borderColor={"#333"}
            ></Box>
        </Box>
    )
}