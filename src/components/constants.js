export const LANGUAGES = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    // cpp: "1.1.1",
};

export const DEFAULT_CODE_SNIPPETS = {
    javascript: '\nfunction greet(name) {\n\tconsole.log("Hello " + name + "!");\n}\ngreet("Vansh");\n',
    python: 'def greet(name):\n\tprint("hello " + name + "!")\n\ngreet("Vansh")',
    typescript: 'type Params = {\n\tname: string\n}\n\nfunction greet(name: Params) {\n\tconsole.log("Hello " + name + "!");\n}\ngreet("Vansh");\n',
    cpp: 'void greet(string name) {\n\tcout << "hello " << name << "!" << endl;\n}\ngreet("Vansh");'
}