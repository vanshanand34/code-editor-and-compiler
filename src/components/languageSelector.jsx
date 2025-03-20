import { NativeSelect, Box, Text } from "@chakra-ui/react";
import React from "react";

export function LanguageSelector({ value, onChange }) {

    const languages = ["javascript", "typescript", "python", "cpp"]

    return (
        <Box padding={4} >
            <Text padding={2} color={'gray.300'} >Language:</Text>
            <NativeSelect.Root size="sm" width={"1/3"} padding={1} variant={'subtle'}>
                <NativeSelect.Field
                    value={value}
                    onChange={onChange}
                    bg={'gray.800'}
                    color={"white"}
                >
                    {
                        languages.map(lang => (
                            <option 
                                value={lang} 
                                key={lang}
                                style={{ backgroundColor: '#27272a' }}
                            >
                                {lang}
                            </option>
                        ))
                    }
                </NativeSelect.Field>
                <NativeSelect.Indicator />
            </NativeSelect.Root>
        </Box>
    )
}