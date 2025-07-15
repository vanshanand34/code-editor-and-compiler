import { Box, Button, Spinner, Text, Textarea } from "@chakra-ui/react";

import { Toaster } from "../components/ui/toaster";
import UserInputComponent from "./InputUtil";
import OutputComponent from "./OutputUtil";

export default function Output({ output, isError, userInput, setUserInput }) {


    return (

        <Box
            width={'100%'}
            md={{ height: '80vh' }}
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

            <OutputComponent
                isError={isError}
                output={output}
            />
        </Box>
    )
}

