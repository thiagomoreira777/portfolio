console.log("Meu JavaScript está funcionando!");

const projetoValidade = document.querySelector("#controle-validade");

if (projetoValidade) {
    projetoValidade.style.cursor = "pointer";

    projetoValidade.addEventListener("click", () => {
        window.open(
            "https://thiagomoreira777.github.io/controle-de-validade/",
            "_blank",
            "noopener,noreferrer"
        );
    });
}
