import { Spinner, Button } from "@chakra-ui/react"

export default function RunCodeButton({ isLoading, runCode }) {
    return (
        <Button
            variant={"outline"}
            fontSize={'xs'}
            md={{
                fontSize: 'sm',
                px: 3,
                py: 0.5
            }}
            paddingX={2} paddingY={0}
            borderColor={"#fff32"}
            color={"gray.200"}
            bg={"#404040"}
            _hover={{ borderColor: "#fff3" }}
            onClick={runCode}
        >
            {isLoading && <Spinner size={'sm'} animationDuration={'slowest'} />}
            Run Code
        </Button>
    )
}