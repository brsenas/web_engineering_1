document.getElementById("mudarCor").addEventListener("click", function () {
    document.body.style.backgroundColor = "black";

});

document.getElementById("btnAdicionar").addEventListener("click", function () {
    let input = document.getElementById("digiteItem");
    let texto = input.value.trim();

    if (texto !== "") {
        let li = document.createElement("li");
        li.textContent = texto;

        li.addEventListener("dblclick", function () {
            this.remove();
        });

        document.getElementById("lista").appendChild(li);
        input.value = "";
    } else {
        alert("Digite um item antes de adicionar!");
    }
});

fetch("http://demo8754535.mockable.io/")

    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").textContent = data.msg;
    })
    .catch(() => {
        document.getElementById("resultado").textContent = "Erro ao carregar os dados.";
    });