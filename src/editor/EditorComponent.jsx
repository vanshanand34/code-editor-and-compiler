import { Box, HStack, Button, Spinner } from "@chakra-ui/react"
import { Editor } from "@monaco-editor/react"
import { LanguageSelector } from "./languageSelector";
import { DEFAULT_CODE_SNIPPETS } from "../constants";
import executeCode from "../Output/runCode";
import { useState } from "react";
import { Toaster, toaster } from "../components/ui/toaster";
import RunCodeButton from "./RunCodeButton";
import { HeaderColor } from "../styleConstants";


export default function EditorComponent(
    { language, setLanguage, value, setValue, editorRef, setOutput, setIsError, userInput }) {

    const [isLoading, setIsLoading] = useState(false);

    async function runCode() {
        setIsLoading(true);
        try {
            const sourceCode = editorRef.current.getValue();
            if (!sourceCode) return;
            const { run: result } = await executeCode(language[0], sourceCode, userInput);
            setOutput(result.output);

            setIsError(result.code == 1 ? true : false);

            toaster.create({
                title: "Success",
                description: "Code executed successfully",
                type: "success",
                duration: 3000
            });

        } catch (error) {
            toaster.create({
                title: "An error occurred",
                description: error.message || "Unable to run code",
                type: "error",
                duration: 3000
            })
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }
    function onEditorDidMount(editor, monaco) {
        monaco;
        editorRef.current = editor;
        editor.focus();
    }

    return (
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
                    bg={HeaderColor}
                    padding={3}
                    mb={6}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                >
                    <LanguageSelector value={language} setValue={setLanguage} setCodeSnippet={setValue} />

                    <RunCodeButton isLoading={isLoading} runCode={runCode} />
                </Box>

                <Editor
                    defaultLanguage="javascript"
                    language={language[0]}
                    defaultValue={DEFAULT_CODE_SNIPPETS[language[0]]}
                    onChange={(value) => setValue(value)}
                    theme="vs-dark"
                    onMount={onEditorDidMount}
                    value={value}
                    options={{
                        minimap: {
                            enabled: false
                        },
                        automaticLayout: true,
                    }}
                />
            </Box>
        </Box>
    )
}