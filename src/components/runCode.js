import axios from "axios";
import {LANGUAGES} from "./constants"

const baseURL = "https://emkc.org/api/v2/piston"


const API = axios.create({
    baseURL: baseURL
});

async function executeCode(language, sourceCode, userInput = "") {
    try {
        console.log(language, sourceCode)
        const response = await API.post("/execute", {
            language: language,
            version: LANGUAGES[language],
            files: [
                { content: sourceCode }
            ],
            stdin: userInput
        });

        return response.data;

    } catch (e) {
        console.log(e);
    }
}

export default executeCode;