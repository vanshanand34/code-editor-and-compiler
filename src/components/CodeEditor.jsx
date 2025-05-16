import { Box, HStack } from "@chakra-ui/react"
import { Editor } from "@monaco-editor/react"
import { useState, useRef } from "react";
import { LanguageSelector } from "./languageSelector";
import { DEFAULT_CODE_SNIPPETS } from "./constants";
import Output from "./Output";

export default function CodeEditor() {

    const [language, setLanguage] = useState("javascript");
    const [value, setValue] = useState("");
    const editorRef = useRef(null);

    function onEditorDidMount(editor, monaco) {
        editorRef.current = editor;
        editor.focus();
    }

    function handleLanguageChange(e) {
        const lang = e.target.value;
        setLanguage(lang);
        console.log(editorRef)
        setValue(DEFAULT_CODE_SNIPPETS[lang]);
    }

    return (
        <Box bg={'#252525'} minHeight={'100vh'} px={6} height={'100%'}>
            <Box
                width={'100%'}
                padding={4}
                pt={6}
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
                            <LanguageSelector value={language} onChange={handleLanguageChange} />
                        </Box>

                        <Editor
                            defaultLanguage="javascript"
                            language={language}
                            defaultValue={DEFAULT_CODE_SNIPPETS[language]}
                            onChange={(value) => setValue(value)}
                            theme="vs-dark"
                            onMount={onEditorDidMount}
                            value={value}
                        />
                    </Box>
                </Box>

                <Output
                    editorRef={editorRef}
                    language={language}
                />

            </HStack>
        </Box>
    )
}