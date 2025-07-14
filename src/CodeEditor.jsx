import { Box, HStack } from "@chakra-ui/react"
import { Editor } from "@monaco-editor/react"
import { useState, useRef } from "react";
import { LanguageSelector } from "./components/languageSelector";
import { DEFAULT_CODE_SNIPPETS } from "./components/constants";
import Output from "./components/Output/Output";

export default function CodeEditor() {

    const [language, setLanguage] = useState(["javascript"]);
    const [value, setValue] = useState("");
    const editorRef = useRef(null);

    function onEditorDidMount(editor, monaco) {
        monaco;
        editorRef.current = editor;
        editor.focus();
    }

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
                <Box
                    width={'100%'}
                    lg={{ width: '50%' }}
                    height={'60vh'}
                    md={{ height: '80vh' }}
                    paddingX={4}
                >

                    <Box
                        borderRadius={'lg'}
                        overflow={'hidden'}
                        border={'1px solid #fff2'}
                        bg={'#1e1e1e'}
                        height={'100%'}
                    >
                        <Box
                            bg={'blackAlpha.500'}
                            padding={4}
                            mb={6}
                        >
                            <LanguageSelector value={language} setValue={setLanguage} setCodeSnippet={setValue}/>
                        </Box>

                        <Editor
                            defaultLanguage="javascript"
                            language={language[0]}
                            defaultValue={DEFAULT_CODE_SNIPPETS[language[0]]}
                            onChange={(value) => setValue(value)}
                            theme="vs-dark"
                            onMount={onEditorDidMount}
                            value={value}
                        />
                    </Box>
                </Box>

                <Output
                    editorRef={editorRef}
                    language={language[0]}
                />

            </HStack>
        </Box>
    )
}