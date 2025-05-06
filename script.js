document.addEventListener("DOMContentLoaded", function() {
    // Menu interativo
    document.getElementById("menuButton").addEventListener("click", function() {
        const menuOptions = document.getElementById("menuOptions");
        menuOptions.classList.toggle("hidden");
    });

    // Adiciona um novo link de plataforma à lista
    document.getElementById("addLinkButton").addEventListener("click", function() {
        // Pega os valores inseridos nos campos de nome e link
        const platformName = document.getElementById("platformName").value;
        const platformLink = document.getElementById("platformLink").value;

        // Verifica se ambos os campos foram preenchidos
        if (platformName && platformLink) {
            // Cria uma nova div para a plataforma
            const platformDiv = document.createElement("div");
            platformDiv.classList.add("platform");

            // Cria o título da plataforma
            const platformTitle = document.createElement("h3");
            platformTitle.textContent = platformName;

            // Cria o link da plataforma
            const platformAnchor = document.createElement("a");
            platformAnchor.href = platformLink;
            platformAnchor.target = "_blank";
            platformAnchor.textContent = `Acessar ${platformName}`;

            // Adiciona o título e o link à nova div
            platformDiv.appendChild(platformTitle);
            platformDiv.appendChild(platformAnchor);

            // Adiciona a nova plataforma à lista
            document.getElementById("platformsList").appendChild(platformDiv);

            // Limpa os campos de entrada
            document.getElementById("platformName").value = "";
            document.getElementById("platformLink").value = "";
        } else {
            alert("Por favor, preencha ambos os campos.");
        }
    });
});
