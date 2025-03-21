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
        console.log(editor)
        editor.focus();
    }

    function handleLanguageChange(e) {
        const lang = e.target.value;
        setLanguage(lang);
        console.log(editorRef)
        setValue(DEFAULT_CODE_SNIPPETS[lang]);
    }

    return (
        <Box bg={'#101018'} height={'100vh'}>
            <HStack borderSpacing={4}>
                <Box width={'50%'}>
                    <LanguageSelector value={language} onChange={handleLanguageChange} />
                    <Box
                        paddingX={4}
                    >
                        <Editor
                            height={"75vh"}
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
                <Output editorRef={editorRef} language={language}/>
            </HStack>
        </Box>
    )
}