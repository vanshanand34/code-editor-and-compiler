import { Box, HStack } from "@chakra-ui/react"
import { useState, useRef } from "react";
import Output from "./Output/Output";
import EditorComponent from "./editor/EditorComponent";

export default function CodeEditor() {

    const [language, setLanguage] = useState(["javascript"]);
    const [value, setValue] = useState("");
    const editorRef = useRef(null);

    return (
        <Box minHeight={'100vh'} px={6} py={8} height={'100%'}>
            <Box
                width={'100%'}
                padding={4}
                py={6}
                color={'white'}
                textAlign={'center'}
                fontSize={'4xl'}
                fontWeight={'bold'}
            >
                Code Compiler
            </Box>

            <HStack
                borderSpacing={4}
                paddingY={6}
                display={'flex'}
                flexDir={'column'}
                alignItems={'center'}
                lg={{ flexDirection: 'row' }}
                gapY={4}
                flexBasis={'-moz-max-content'}
            >
                <EditorComponent 
                    language={language} setLanguage={setLanguage} 
                    value={value} setValue={setValue} editorRef={editorRef}/>

                <Output
                    editorRef={editorRef}
                    language={language[0]}
                />

            </HStack>
        </Box>
    )
}