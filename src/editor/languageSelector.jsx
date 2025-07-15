import { Select, Box, Portal, createListCollection } from "@chakra-ui/react";
import React from "react";
import { LANGUAGES, DEFAULT_CODE_SNIPPETS } from "../constants";


export function LanguageSelector({ value, setValue, setCodeSnippet }) {

    const language_names = Object.keys(LANGUAGES); //LANGUAGES.
    const languages_collection = [];
    for (const lang of language_names) {
        languages_collection.push({
            "label": lang,
            "value": lang
        });
    }
    const languages = createListCollection({
        items: languages_collection
    });


    return (
        <Box 
        flex={1}
        >
            <Select.Root
                className='dark'
                size={'sm'}
                md={{ size: 'md' }}
                width={"1/3"}
                cursor={'pointer'}
                onValueChange={
                    (e) => {
                        setValue(e.value)
                        setCodeSnippet(DEFAULT_CODE_SNIPPETS[e.value[0]])
                    }
                }
                value={value}
                collection={languages}
            >
                <Select.HiddenSelect />
                <Select.Control >
                    <Select.Trigger bg={'#151515'}>
                        <Select.ValueText placeholder="Select Language" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                        <Select.Indicator />
                    </Select.IndicatorGroup>
                </Select.Control>
                <Portal>
                    <Select.Positioner>
                        <Select.Content>
                            {languages_collection.map((lang) => (
                                <Select.Item item={lang} key={lang.value}>
                                    {lang.label}
                                    <Select.ItemIndicator />
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>
        </Box>
    )
}