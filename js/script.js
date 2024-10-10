let users = JSON.parse(localStorage.getItem('user') || '[]');

function Salvar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    const user = {
        nome: nome,
        idade: idade
    };

    users.push(user); 
    localStorage.setItem('user', JSON.stringify(users));
    
    document.getElementById("nome").value = '';
    document.getElementById("idade").value = '';
    carregaUser();
}

function carregaUser() {
    const lista = document.getElementById("lista");
    lista.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `nome: ${user.nome} idade: ${user.idade}`;
        lista.appendChild(li);
    });
}

window.onload = carregaUser;