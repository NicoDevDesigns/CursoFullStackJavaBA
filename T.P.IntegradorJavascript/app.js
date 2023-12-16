document.addEventListener("DOMContentLoaded", function () {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correo = document.getElementById("correo");
    const resumen = document.getElementById("resumen");
    const total = document.getElementById("total");
    const totalTexto = document.getElementById("textoTotal");
    const borrar = document.getElementById("borrar");
    const categoria = document.getElementById("categoria");
    const cantidad = document.getElementById("cantidad");

    let categoriaSeleccionada = "";
    let cantidadSeleccionada = 0;

    cantidad.addEventListener("change", (e) => {
        cantidadSeleccionada = e.target.value;
    });


    resumen.addEventListener("click", (e) => {
        e.preventDefault();
        if (!cantidad.value || cantidadSeleccionada === 0) {
            mostrarMensajeError("La cantidad debe ser mayor a 0.");
        } else {
            ocultarMensajeError();
            resumenTotal();
        }
    });

    borrar.addEventListener("click", (e) => {
        e.preventDefault();
        ocultarMensajeError();
        ocultarTotal();
        limpiarCampos();
    });

    const resumenTotal = () => {
        categoriaSeleccionada = categoria.value;

        switch (categoriaSeleccionada) {
            case "estudiante":
                mostrarTotal(calcularDescuento(0.8));
                break;

            case "trainee":
                mostrarTotal(calcularDescuento(0.5));
                break;

            case "junior":
                mostrarTotal(calcularDescuento(0.15));
                break;

            default:
                mostrarMensajeError("Seleccione una categoría.");
                break;
        }
    };

    const calcularDescuento = (descuento) => {
        return cantidadSeleccionada * valorTicket - cantidadSeleccionada * valorTicket * descuento;
    };

    const mostrarTotal = (totalAPagar) => {
        totalTexto.innerText = `Total a pagar: $${totalAPagar}`;
        mostrarElemento(total);
    };

    const mostrarMensajeError = (mensaje) => {
        totalTexto.innerText = mensaje;
        total.classList.remove("visually-hidden");
        totalTexto.classList.remove("bg-info");
        totalTexto.classList.add("bg-danger", "text-light");
    };

    const ocultarMensajeError = () => {
        total.classList.add("visually-hidden");
        totalTexto.classList.remove("bg-info", "bg-danger", "text-light");
        totalTexto.innerText = "";
    };

    const ocultarTotal = () => {
        total.classList.add("visually-hidden");
    };

    const limpiarCampos = () => {
        nombre.value = "";
        apellido.value = "";
        correo.value = "";
        cantidad.value = "";
        categoria.value = "";
    };

    const mostrarElemento = (elemento) => {
        elemento.classList.remove("visually-hidden");
    };

    // Otros valores que puedes necesitar
    const valorTicket = 200;
});
