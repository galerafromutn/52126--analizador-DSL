import fs from 'fs';
import antlr4 from 'antlr4';
import DSLLexer from './generated/DSLLexer.js';

// Importa el parser como default para evitar el error de export 
import DSLParser from './generated/DSLParser.js';

import CustomDSLVisitor from './CustomDSLVisitor.js';

const input = fs.readFileSync('input.txt', 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new DSLLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new DSLParser(tokens);
parser.buildParseTrees = true;

const tree = parser.programa();
const visitor = new CustomDSLVisitor();
const output = visitor.visit(tree);



console.log(output);













