let cm = null; //Current Module
async function cargarModuloSucursal()
{
    //AJAX: Asynchronous Java script Am Xml
    let respuesta = await fetch('sucursal/sucursal.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
    
    //Despues de cargar el contenido HTML, cargamos el modulo JS del empleado 
    import('./sucursal.js')
            .then(obj =>{
               cm = obj;
               cm.inicializar();
    });
}
async function cargarModuloProducto()
{
    //AJAX: Asynchronous Java script Am Xml
    let respuesta = await fetch('producto/producto.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
    import( './producto.js')
            .then(obj => {
                cm=obj;
                cm.inicializar();
                
            });

}
async function cargarModuloPedidoCompra()
{
    //AJAX: Asynchronous Java script Am Xml
    let respuesta = await fetch('pedidoCompra/pedidosCompra.html');
    let contenido = await respuesta.text();
    document.getElementById("divContenedorPrincipal").innerHTML = contenido;
}


