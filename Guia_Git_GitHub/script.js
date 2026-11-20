const informacion = {
    init: {
        titulo: "git init",
        descripcion: "Inicializa un repositorio Git en la carpeta actual. Se utiliza al comenzar a controlar las versiones de un proyecto.",
        ejemplo: "git init"
    },
    status: {
        titulo: "git status",
        descripcion: "Muestra el estado de los archivos: cuáles fueron modificados, cuáles están preparados y cuáles todavía no están registrados.",
        ejemplo: "git status"
    },
    add: {
        titulo: "git add",
        descripcion: "Prepara los cambios para incluirlos en el próximo commit. El punto representa todos los archivos modificados y nuevos de la carpeta.",
        ejemplo: "git add ."
    },
    commit: {
        titulo: "git commit",
        descripcion: "Guarda en el historial una versión de los cambios que fueron preparados con git add. El mensaje explica qué se modificó.",
        ejemplo: 'git commit -m "Agrega la página principal"'
    },
    log: {
        titulo: "git log",
        descripcion: "Muestra el historial de commits del repositorio, incluyendo sus identificadores, autores, fechas y mensajes.",
        ejemplo: "git log --oneline"
    },
    clone: {
        titulo: "git clone",
        descripcion: "Copia un repositorio remoto a la computadora, incluyendo sus archivos y el historial disponible.",
        ejemplo: "git clone URL_DEL_REPOSITORIO"
    },
    pull: {
        titulo: "git pull",
        descripcion: "Obtiene los cambios del repositorio remoto y los integra en la rama local actual.",
        ejemplo: "git pull origin main"
    },
    push: {
        titulo: "git push",
        descripcion: "Envía los commits locales a un repositorio remoto, por ejemplo uno alojado en GitHub.",
        ejemplo: "git push -u origin main"
    }
};

const botonesComando = document.querySelectorAll(".comando");
const tituloComando = document.getElementById("titulo-comando");
const descripcionComando = document.getElementById("descripcion-comando");
const ejemploComando = document.getElementById("ejemplo-comando");
const aviso = document.getElementById("aviso");

botonesComando.forEach(function(boton) {
    boton.addEventListener("click", function() {
        const nombre = boton.dataset.comando;
        tituloComando.textContent = informacion[nombre].titulo;
        descripcionComando.textContent = informacion[nombre].descripcion;
        ejemploComando.textContent = informacion[nombre].ejemplo;

        botonesComando.forEach(function(elemento) {
            elemento.classList.remove("activo");
        });

        boton.classList.add("activo");
        aviso.textContent = "";
    });
});

document.getElementById("copiar").addEventListener("click", function() {
    const texto = ejemploComando.textContent;

    navigator.clipboard.writeText(texto).then(function() {
        aviso.textContent = "Comando copiado.";
    }).catch(function() {
        aviso.textContent = "No se pudo copiar automáticamente. Selecciona el comando.";
    });
});

document.querySelectorAll(".opcion").forEach(function(boton) {
    boton.addEventListener("click", function() {
        const resultado = document.getElementById("resultado");

        if (boton.dataset.respuesta === "correcta") {
            resultado.textContent = "¡Correcto! git commit registra los cambios en el historial.";
        } else {
            resultado.textContent = "Inténtalo nuevamente. Piensa qué comando crea un registro en el historial.";
        }
    });
});
