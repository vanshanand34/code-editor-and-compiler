export const LANGUAGES = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    cpp: "10.1.0",
};

export const DEFAULT_CODE_SNIPPETS = {
    javascript: '\nfunction greet(name) {\n\tconsole.log("Hello " + name + "!");\n}\ngreet("Vansh");\n',
    python: '\ndef greet(name):\n\tprint("hello " + name + "!")\n\ngreet("Vansh")',
    typescript: '\nfunction greet(name: string) {\n\tconsole.log("Hello " + name + "!");\n}\ngreet("Vansh");\n',
    cpp: '\nvoid greet(string name) {\n\tcout << "hello " << name << "!" << endl;\n}\ngreet("Vansh");'
}