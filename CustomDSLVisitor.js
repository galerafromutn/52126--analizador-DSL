import DSLVisitor from './generated/DSLVisitor.js';


export default class CustomDSLVisitor extends DSLVisitor {
  visitPrograma(ctx) {
    let output = '';
    for (let accion of ctx.accion()) {
      output += this.visit(accion) + '\n';
    }
    return output;
  }

  visitAccion(ctx) {
    const nombre = ctx.nombreAccion().getText();
    const comandos = ctx.comando().map(cmd => this.visit(cmd)).join('\n  ');
    return `function ${nombre}() {\n  ${comandos}\n}`;
  }

  visitComando(ctx) {
    if (ctx.ruta()) {
      return this.visit(ctx.ruta());
    } else if (ctx.mensaje()) {
      return this.visit(ctx.mensaje());
    } else if (ctx.getChild(0).getText() === 'retornar') {
      return 'return resultado;';
    } else if (ctx.getChild(0).getText() === 'usarEscaneoProfundo') {
      return 'usarEscaneoProfundo();';
    } else if (ctx.getChild(0).getText() === 'contador') {
      // Suponiendo asignación contador = valor
      const valor = ctx.valor().getText();
      return `contador = ${valor};`;
    }
    return '';
  }

  visitRuta(ctx) {
    // ctx es ruta: CADENA con comillas
    const path = ctx.CADENA().getText().replace(/"/g, '');
    return `navigate("${path}");`;
  }

  visitMensaje(ctx) {
    // ctx es mensaje: CADENA con comillas
    const message = ctx.CADENA().getText().replace(/"/g, '');
    return `console.log("${message}");`;
  }
}






