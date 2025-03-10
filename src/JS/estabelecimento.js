
// Função para fazer uma requisição HTTP e retornar os dados como JSON
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

document.addEventListener("DOMContentLoaded", function () {
    const containerEstabelecimento = document.getElementById('container-cidade');
    const id = new URLSearchParams(window.location.search).get('id'); // Obtenha o ID do estabelecimento da URL
    console.log("ID estabelecimento:", id); // Adicionado console.log para verificar o ID

    if (id == null) {
        containerEstabelecimento.innerHTML = "<h1>404 Estabelecimento não encontrado</h1>";
    } else {
        const cidadesURL = "https://db-json-kp7o.vercel.app/cidades";
        const tipoEstabelecimentoURL = "https://db-json-kp7o.vercel.app/tipo-estabelecimento";

        // Aguardar o retorno das requisições
        Promise.all([fetchData(cidadesURL), fetchData(tipoEstabelecimentoURL)])
            .then(([cidades, tipoEstabelecimento]) => {
                const data = {
                    "cidades": cidades,
                    "tipo-estabelecimento": tipoEstabelecimento
                };

                function getCidadeNameById(id) {
                    console.log("Cidades:", data['cidades']);
                    const cidade = data['cidades'].find(cidade => cidade.id === parseInt(id));
                    return cidade ? cidade.cidade : null;
                  }

                // Função auxiliar para obter o tipo de estabelecimento pelo ID
                function getTipoEstabelecimentoById(id) {
                    const tipo = data['tipo-estabelecimento'].find(tipo => tipo.id === parseInt(id));
                    return tipo ? tipo.tipo : null;
                }

                console.log("ID:", id); // Adicionado console.log para verificar o ID

                if(Object.keys(sessionStorage).length != 0){
                  var divOriginal = document.getElementById('nomeOriginal');
                  var novaDiv = document.createElement('div');
                  var h4 = document.createElement('h4');
                  const dados = JSON.parse(sessionStorage.getItem("Dados"));
                  var i = dados.nome;
                  h4.textContent = i;
                
                  novaDiv.appendChild(h4);
                  divOriginal.parentNode.replaceChild(novaDiv, divOriginal);
                }
                
                fetch(`https://db-json-kp7o.vercel.app/estabelecimentos/${id}`)
                    .then(response => response.json())
                    .then(estabelecimento => {
                        let est = `
                <img src="${estabelecimento.foto}" style="width:100%; height:200px; object-fit:cover">
                <h2 id="top-dest">${estabelecimento.nome}</h2>
                <p>${estabelecimento.descricao}</p>
              `;
                        // Obtenha o tipo de estabelecimento pelo ID e exiba na página
                        const tipoEstabelecimento = getTipoEstabelecimentoById(estabelecimento.tipo);
                        if (tipoEstabelecimento) {
                            est += `<p>Tipo: ${tipoEstabelecimento}</p>`;
                        }

                        if (estabelecimento.email) {
                            est += `<p>E-mail: ${estabelecimento.email}</p>`;
                        }
                        if (estabelecimento.telefone) {
                            est += `<p>Telefone: ${estabelecimento.telefone}</p>`;
                        }
                        if (estabelecimento.endereco) {
                            est += `<p>Endereço: ${estabelecimento.endereco}</p>`;
                        }

                        // Obtenha o nome da cidade pelo ID e exiba na página
                        const cidade = getCidadeNameById(estabelecimento.cidade);
                        console.log("Cidade:", cidade); // Adicionado console.log para verificar a cidade
                        if (cidade) {
                            est += `<p>Cidade: ${cidade}</p>`;
                        }
                        if (estabelecimento.estado) {
                            est += `<p>Estado: ${estabelecimento.estado}</p>`;
                        }
                        if (estabelecimento.website) {
                            est += `<p>Website: <a href="${estabelecimento.website}" target="_blank">${estabelecimento.website}</a></p>`;
                        }
                        if (estabelecimento.instagram) {
                            est += `<p>Instagram: <a href="${estabelecimento.instagram}" target="_blank">${estabelecimento.instagram}</a></p>`;
                        }

                        containerEstabelecimento.innerHTML = est;
                    })
                    .catch(error => {
                        containerEstabelecimento.innerHTML = "<h1>Erro ao obter informações do estabelecimento</h1>";
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error("Erro ao obter os dados:", error);
            });
    }
});


URL = "https://db-json-kp7o.vercel.app/depoimentos";
// Validação do bootrasp no formulário
(function () {
  'use strict'
  var forms = document.querySelectorAll(".needs-validation")
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          form.classList.add('was-validated')
        } else {
          event.preventDefault();
          event.stopPropagation()
          form.classList.add('was-validated')
          // Dados necessários para o json
          //Recupera nome caso logado
          var avaValue;
          var nomeAva;
          var fotoUsuario;
          var divOriginal;
          var novaDiv;
          if(Object.keys(sessionStorage).length === 0){

            avaValue = document.querySelector('input[name="rate"]:checked').value;
            nomeAva = document.getElementById("nome_depoimento").value; 
            fotoUsuario = "";
            
          }else{
            const dadosRecuperadosString = sessionStorage.getItem('Dados');
            const dadosRecuperados = JSON.parse(dadosRecuperadosString);
            nomeAva = dadosRecuperados.nome.charAt(0).toUpperCase() + dadosRecuperados.nome.slice(1);
            fotoUsuario = dadosRecuperados.foto;
            avaValue = document.querySelector('input[name="rate"]:checked').value;

          }

          const depoimentos = {
            id: "",
            nome: nomeAva,
            avaliacao: document.getElementById("depoimento").value,
            nota: avaValue,
            foto: fotoUsuario,
          };
          // Envia os dados do formulário para arquivo json
          fetch (URL, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(depoimentos),
          })
            .then((response) => {
              if (response.ok) {
                alert("Depoimento enviado");
                location.href = "destinos.html";
              } else {
                alert("Erro ao cadastrar");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }

      }, false)
    })
})()














