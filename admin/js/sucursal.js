let sucursales = [
    {
        "id": 1,
        "nombre": "Sucursal Central",
        "titular": "Eduardo Esteban Socorro Sanches",
        "rfc": "CUPU800825569",
        "domicilio": "Blvd. Universidad Tecnológica #225",
        "colonia": "San Carlos",
        "codigoPostal": "37670",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": "4777100020",
        "latitud": "21.06353483110673",
        "longitud": "-101.57969394332699",
        "estatus": 1



    },

    {
        "id": 2,
        "nombre": "Sucursal Centro Max",
        "titular": "Aramara Guadalupe Soto Valdivia",
        "rfc": "CUPU800825569",
        "domicilio": "Blvd. Adolfo López Mateos 2518",
        "colonia": "Jardines de Jerez",
        "codigoPostal": "37530",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": "4777717361",
        "latitud": " 21.0994063",
        "longitud": "-101.635549320748",
        "estatus": 1


    },
    {
        "id": 3,
        "nombre": "Sucursal Plaza Mayor",
        "titular": "Lesli Fernanda Fernandes Torres",
        "rfc": "CUPU800825569",
        "domicilio": "Blvd. Juan Alonso de Torres Pte. 2002",
        "colonia": "Valle del Campestre",
        "codigoPostal": " 37150",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": " 4777734916",
        "latitud": "40.9650282",
        "longitud": "-5.66405564465187",
        "estatus": 1


    },
    {
        "id": 4,
        "nombre": "Sucursal Centro",
        "titular": "Julian Vasquez Perez",
        "rfc": "CUPU800825569",
        "domicilio": "37000 5 de Mayo",
        "colonia": "Álvaro Obregón 217",
        "codigoPostal": " 37000",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": " 4777734916",
        "latitud": "40.9650282",
        "longitud": "-5.66405564465187",
        "estatus": 1


    },
    {
        "id": 5,
        "nombre": "Sucursal Centro",
        "titular": "Julian Vasquez Perez",
        "rfc": "CUPU800825569",
        "domicilio": "37000 5 de Mayo",
        "colonia": "Álvaro Obregón 217",
        "codigoPostal": " 37000",
        "ciudad": "Leon",
        "estado": "Guanajuato",
        "telefono": " 4777734916",
        "latitud": "40.9650282",
        "longitud": "-5.66405564465187",
        "estatus": 1


    }



];

//const filtrador = new mdb.Datatable(document.getElementById());


//Esta funcion nos sirve para inicializar el modulo de sucursales.
export function inicializar() {
    setDetalleSucursalVisible(false);
    fillTableSucursal();
}

//  Insert y update en el mismo metodo


export function save()
{
    //Declaramos un objecto donde guardamos los datos de la sucursal 
    let suc = null;
    let posicion = -1; //Parra saber si una sucursal ya existe o no
    let idSucursal = 0;

    //Revisamos si hay Id sucursal
    if (document.getElementById("txtIdSucursal").value.trim().length > 0)
    {
        idSucursal = parseInt(document.getElementById("txtIdSucursal").value.trim());
        posicion = buscarPosicionSucursalId(idSucursal);

        //Si posicion es mayor o igual a 0, si encontramos un empleado:
        if (posicion >= 0)
            suc = sucursales[posicion];
        else
        {
            //Si no hay un empleado con el ID descrito,
            //creamos una nueva instancia del Objecto 
            suc = new Object();
            //el id se la acabo de definir
            suc.id = idSucursal;


            //Insertamos el objecto emp dentro del arreglo de empleados
            sucursales.push(suc);

        }

        //Continuamos llenando los datos del objecto 


        //Datos de la sucursal
        suc.nombre = document.getElementById("txtNombreSucursal").value;
        suc.titular = document.getElementById("txtTitularSucursal").value;
        suc.rfc = document.getElementById("txtRfcSucrsal").value;
        suc.domicilio = document.getElementById("txtDomicilioSucursal").value;
        suc.colonia = document.getElementById("txtColoniaSucursal").value;
        suc.codigoPostal = document.getElementById("txtCodigoPostalSucursal").value;
        suc.ciudad = document.getElementById("txtCiudadSucursal").value;
        suc.estado = document.getElementById("txtEstadoSucursal").value;
        suc.estatus = document.getElementById("cmbEstatusSucursal").value;
        suc.telefono = document.getElementById("txtTelefonoSucursal").value;
        suc.latitud = document.getElementById("txtLatitudSucursal").value;
        suc.longitud = document.getElementById("txtLongitudSucrsal").value;

        //Refrescamos el catalogo de la sucursal:
        fillTableSucursal();

        Swal.fire('Movimiento Realizado', 'Datos de la Sucursal Actualizados correctamente.', 'succes');


    } 
    else
    {
        Swal.fire('Verificaci&oacute;n dedatos requerida.',
                'Debe agregar un Id de la sucursal (valor numerico).',
                'warning'
                );
    }
}

export function deleteSucursal()
{
    let posicion = -1;
    let idSucursal = 0;

//Revisamos si hay in Id sucursal
    if (document.getElementById("txtIdSucursal").value.trim().length > 0)
    {
        //Recuperamos el Id de la sucursal que deseamos eliminar
        idSucursal = parseInt(document.getElementById("txtIdSucursal").value.trim());

        //Buscamos la posicion de la sucursal con ese Id

        posicion = buscarPosicionSucursalId(idSucursal);

        //Si la posicion de la sucursal existe, lo quitamos del arreglo

        if (posicion >= 0)
        {
            sucursales.splice(posicion, 1);
            Swal.fire('Movimiento realizado.', 'Registro de la Sucursal Eliminada.', 'succes');
            fillTableSucursal();

        }
        else
        {
            Swal.fire('', 'El ID de la Sucursal especificado no existe.', 'warning');
        }
    }
    else
    {
        Swal.fire('', 'Especifique in Id de la Sucursal.', 'waring');
    }
}

export function getSucursal()
{

}

//Llena la tabla de sucursales  con el arreglo
function fillTableSucursal()
{
    //Aqui vamos ir guaradando el contenido del
    //tbody de la tabla sucursal:
    let contenido = '';

// for recorremos elemento por elemento 

    for (let i = 0; i < sucursales.length; i++)
    {

        contenido += '<tr>' +
                '<td>' + sucursales[i].id + '</td>' +
                '<td>' + sucursales[i].nombre + '</td>' +
                '<td>' + sucursales[i].titular + '</td>' +
                '<td>' + sucursales[i].rfc + '</td>' +
                '<td>' +
                sucursales[i].domicilio + '' +
                sucursales[i].colonia + '' +
                '</td>' +
                '<td>' + sucursales[i].codigoPostal + '</td>' +
                '<td>' + sucursales[i].telefono + '</td>' +
                '<td>' +
                '<a href="#" class="text-info" onclick="cm.cargarDetalleSucursal(' + i + ');"><i class="bi bi-eye"></i></a>' +
                '</td>' +
                '</tr>';
    }
    
    document.getElementById("tbodySucursal").innerHTML = contenido;

}

export function cargarDetalleSucursal(posicion)
{
    //Recuperamos la sucursal en la posicion indicada:
    let suc = sucursales[posicion];

    //Lenamos las cajas de texto y demas controles con los datos 
    //de la sucursal que recuperamos previamente.

    //ID
    document.getElementById("txtIdSucursal").value = suc.id;
    //Datos de la sucursal
    document.getElementById("txtNombreSucursal").value = suc.nombre;
    document.getElementById("txtTitularSucursal").value = suc.titular;
    document.getElementById("txtRfcSucrsal").value = suc.rfc;
    document.getElementById("txtDomicilioSucursal").value = suc.domicilio;
    document.getElementById("txtColoniaSucursal").value = suc.colonia;
    document.getElementById("txtCodigoPostalSucursal").value = suc.codigoPostal;
    document.getElementById("txtCiudadSucursal").value = suc.ciudad;
    document.getElementById("txtEstadoSucursal").value = suc.estado;
    document.getElementById("cmbEstatusSucursal").value = suc.estatus;
    document.getElementById("txtTelefonoSucursal").value = suc.telefono;
    document.getElementById("txtLatitudSucursal").value = suc.latitud;
    document.getElementById("txtLongitudSucrsal").value = suc.longitud;
    
    setDetalleSucursalVisible(true);


}

export function clearForm()
{
    //ID
    document.getElementById("txtIdSucursal").value = '';
    //Datos de la sucursal
    document.getElementById("txtNombreSucursal").value = '';
    document.getElementById("txtTitularSucursal").value = '';
    document.getElementById("txtRfcSucrsal").value = '';
    document.getElementById("txtDomicilioSucursal").value = '';
    document.getElementById("txtColoniaSucursal").value = '';
    document.getElementById("txtCodigoPostalSucursal").value = '';
    document.getElementById("txtCiudadSucursal").value = '';
    document.getElementById("txtEstadoSucursal").value = '';
    document.getElementById("cmbEstatusSucursal").value = '';
    document.getElementById("txtTelefonoSucursal").value = '';
    document.getElementById("txtLatitudSucursal").value = '';
    document.getElementById("txtLongitudSucrsal").value = '';

}

//Busca la posicion de un onjecto sucursal
//con base la propieda ID y la devuelve 
//Si no se encuentra  el Id buscado 
//el metodo devuelve -1
function buscarPosicionSucursalId(id)
{

    for (let i = 0;
    i < sucursales.length; i++)
    {
        if (sucursales[i].id === id)
            return i;

    }
    return -1;
}

export function  setDetalleSucursalVisible(valor)
{
    if (valor === true)
    {
        //
        document.getElementById('divCatalogoSucursal').style.display = 'none';
        //
        document.getElementById('divDetalleSucursal').style.display = '';
        
        
    }
    else
         {
             //Ocultamos la seccion del detalle
             document.getElementById('divDetalleSucursal').style.display = 'none';
             //
             document.getElementById('divCatalogoSucursal').style.display = '';
         }
}

export function clearAndShowDetalleSucursal()
{
    clearForm();
    setDetalleSucursalVisible(true);
}

