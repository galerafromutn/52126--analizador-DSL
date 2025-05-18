grammar DSL;

// Regla principal
programa         : accion+ EOF ;

// Definición de una acción
accion           : 'accion' nombreAccion '{' comando+ '}' ;

// Nombre de la acción
nombreAccion     : IDENTIFICADOR ;

// Comandos disponibles
comando : ('moverArchivo' 'a' ruta
         | 'usarEscaneoProfundo'
         | 'retornar' 'resultado'
         | 'notificar' mensaje
         | 'contador' '=' valor) ';'? ;  

ruta             : CADENA ;
mensaje          : CADENA ;

// Valor numérico 
valor            : ENTERO ;

// Identificador para nombres de acciones
IDENTIFICADOR    : LETRA (LETRA | DIGITO)* ;

// Token para cadenas entre comillas dobles
CADENA           : '"' (~["\r\n])* '"' ;

// Token para números enteros
ENTERO           : [0-9]+ ;

// Tokens base
fragment LETRA   : [a-zA-Z] ;
fragment DIGITO  : [0-9] ;

// Ignorar espacios en blanco, tabulaciones y saltos de línea
WS          : [ \t\r\n]+ -> skip;