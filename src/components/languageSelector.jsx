import { NativeSelect, Box, Text } from "@chakra-ui/react";
import React from "react";
import { LANGUAGES } from "./constants";

export function LanguageSelector({ value, onChange }) {

    const languages = Object.entries(LANGUAGES);
    console.log(languages);

    return (
        <Box padding={0}
        >
            {/* <Text padding={2} color={'gray.300'} >Language:</Text> */}
            <NativeSelect.Root size={'sm'} width={"1/3"} padding={0} variant={'subtle'}>
                <NativeSelect.Field
                    value={value}
                    onChange={onChange}
                    bg={'gray.800'}
                    color={"white"}
                    cursor={'pointer'}

                >
                    {
                        languages.map((lang) => (
                            <option
                                value={lang[0]}
                                key={lang[0]}
                                style={{ backgroundColor: '#27272a' }}
                            >
                                {lang[0]} ({lang[1]})
                            </option>
                        ))
                    }
                </NativeSelect.Field>
                <NativeSelect.Indicator />
            </NativeSelect.Root>
        </Box >
    )
}