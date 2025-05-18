// Generated from c:/Users/PC HARD/Desktop/52126-main/52126-main/52126_analizador/DSL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import DSLVisitor from './DSLVisitor.js';

const serializedATN = [4,1,16,56,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,0,1,0,1,1,1,1,1,1,1,1,4,1,
26,8,1,11,1,12,1,27,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,3,3,45,8,3,1,3,3,3,48,8,3,1,4,1,4,1,5,1,5,1,6,1,6,1,6,0,0,7,0,2,
4,6,8,10,12,0,0,55,0,15,1,0,0,0,2,21,1,0,0,0,4,31,1,0,0,0,6,44,1,0,0,0,8,
49,1,0,0,0,10,51,1,0,0,0,12,53,1,0,0,0,14,16,3,2,1,0,15,14,1,0,0,0,16,17,
1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,19,1,0,0,0,19,20,5,0,0,1,20,1,1,0,
0,0,21,22,5,1,0,0,22,23,3,4,2,0,23,25,5,2,0,0,24,26,3,6,3,0,25,24,1,0,0,
0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,0,28,29,1,0,0,0,29,30,5,3,0,0,
30,3,1,0,0,0,31,32,5,13,0,0,32,5,1,0,0,0,33,34,5,4,0,0,34,35,5,5,0,0,35,
45,3,8,4,0,36,45,5,6,0,0,37,38,5,7,0,0,38,45,5,8,0,0,39,40,5,9,0,0,40,45,
3,10,5,0,41,42,5,10,0,0,42,43,5,11,0,0,43,45,3,12,6,0,44,33,1,0,0,0,44,36,
1,0,0,0,44,37,1,0,0,0,44,39,1,0,0,0,44,41,1,0,0,0,45,47,1,0,0,0,46,48,5,
12,0,0,47,46,1,0,0,0,47,48,1,0,0,0,48,7,1,0,0,0,49,50,5,14,0,0,50,9,1,0,
0,0,51,52,5,14,0,0,52,11,1,0,0,0,53,54,5,15,0,0,54,13,1,0,0,0,4,17,27,44,
47];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class DSLParser extends antlr4.Parser {

    static grammarFileName = "DSL.g4";
    static literalNames = [ null, "'accion'", "'{'", "'}'", "'moverArchivo'", 
                            "'a'", "'usarEscaneoProfundo'", "'retornar'", 
                            "'resultado'", "'notificar'", "'contador'", 
                            "'='", "';'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "IDENTIFICADOR", 
                             "CADENA", "ENTERO", "WS" ];
    static ruleNames = [ "programa", "accion", "nombreAccion", "comando", 
                         "ruta", "mensaje", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = DSLParser.ruleNames;
        this.literalNames = DSLParser.literalNames;
        this.symbolicNames = DSLParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, DSLParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.accion();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 19;
	        this.match(DSLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	accion() {
	    let localctx = new AccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, DSLParser.RULE_accion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(DSLParser.T__0);
	        this.state = 22;
	        this.nombreAccion();
	        this.state = 23;
	        this.match(DSLParser.T__1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.comando();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1744) !== 0));
	        this.state = 29;
	        this.match(DSLParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreAccion() {
	    let localctx = new NombreAccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, DSLParser.RULE_nombreAccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(DSLParser.IDENTIFICADOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, DSLParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 33;
	            this.match(DSLParser.T__3);
	            this.state = 34;
	            this.match(DSLParser.T__4);
	            this.state = 35;
	            this.ruta();
	            break;
	        case 6:
	            this.state = 36;
	            this.match(DSLParser.T__5);
	            break;
	        case 7:
	            this.state = 37;
	            this.match(DSLParser.T__6);
	            this.state = 38;
	            this.match(DSLParser.T__7);
	            break;
	        case 9:
	            this.state = 39;
	            this.match(DSLParser.T__8);
	            this.state = 40;
	            this.mensaje();
	            break;
	        case 10:
	            this.state = 41;
	            this.match(DSLParser.T__9);
	            this.state = 42;
	            this.match(DSLParser.T__10);
	            this.state = 43;
	            this.valor();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 46;
	            this.match(DSLParser.T__11);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruta() {
	    let localctx = new RutaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, DSLParser.RULE_ruta);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(DSLParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mensaje() {
	    let localctx = new MensajeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, DSLParser.RULE_mensaje);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(DSLParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, DSLParser.RULE_valor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(DSLParser.ENTERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

DSLParser.EOF = antlr4.Token.EOF;
DSLParser.T__0 = 1;
DSLParser.T__1 = 2;
DSLParser.T__2 = 3;
DSLParser.T__3 = 4;
DSLParser.T__4 = 5;
DSLParser.T__5 = 6;
DSLParser.T__6 = 7;
DSLParser.T__7 = 8;
DSLParser.T__8 = 9;
DSLParser.T__9 = 10;
DSLParser.T__10 = 11;
DSLParser.T__11 = 12;
DSLParser.IDENTIFICADOR = 13;
DSLParser.CADENA = 14;
DSLParser.ENTERO = 15;
DSLParser.WS = 16;

DSLParser.RULE_programa = 0;
DSLParser.RULE_accion = 1;
DSLParser.RULE_nombreAccion = 2;
DSLParser.RULE_comando = 3;
DSLParser.RULE_ruta = 4;
DSLParser.RULE_mensaje = 5;
DSLParser.RULE_valor = 6;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(DSLParser.EOF, 0);
	};

	accion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AccionContext);
	    } else {
	        return this.getTypedRuleContext(AccionContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_accion;
    }

	nombreAccion() {
	    return this.getTypedRuleContext(NombreAccionContext,0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreAccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_nombreAccion;
    }

	IDENTIFICADOR() {
	    return this.getToken(DSLParser.IDENTIFICADOR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitNombreAccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_comando;
    }

	ruta() {
	    return this.getTypedRuleContext(RutaContext,0);
	};

	mensaje() {
	    return this.getTypedRuleContext(MensajeContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RutaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_ruta;
    }

	CADENA() {
	    return this.getToken(DSLParser.CADENA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitRuta(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MensajeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_mensaje;
    }

	CADENA() {
	    return this.getToken(DSLParser.CADENA, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitMensaje(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = DSLParser.RULE_valor;
    }

	ENTERO() {
	    return this.getToken(DSLParser.ENTERO, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof DSLVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




DSLParser.ProgramaContext = ProgramaContext; 
DSLParser.AccionContext = AccionContext; 
DSLParser.NombreAccionContext = NombreAccionContext; 
DSLParser.ComandoContext = ComandoContext; 
DSLParser.RutaContext = RutaContext; 
DSLParser.MensajeContext = MensajeContext; 
DSLParser.ValorContext = ValorContext; 
