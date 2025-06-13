document.addEventListener('DOMContentLoaded', function () {
        
    // --- BASE DE DADOS COM AS REGRAS ---
    const regrasDeViagem = {
        carro: {
            icone: 'directions_car',
            titulo: 'Regras para pegar a estrada de carro',
            regras: [
                { 
                    titulo: 'Documentação necessária para viagens de carro',
                    conteudo: '<ul><li>Carteira de vacinação em dia (antirrábica obrigatória).</li><li>Atestado de saúde emitido pelo veterinário em até 10 dias antes da viagem.</li><li>Identificação atualizada na coleira (nome + telefone).</li></ul>'
                },
                {
                    titulo: 'Equipamentos obrigatórios, como usar',
                    conteudo: '<ul><li>Caixa de transporte presa ao cinto ou cinto peitoral com encaixe ISOFIX no banco traseiro.</li><li>Toalha ou tapete absorvente no fundo da caixa.</li><li>Kit de limpeza: sacos plásticos, lenços umedecidos, álcool 70 %.</li></ul>'
                },
                {
                    titulo: 'Cuidados durante a viagem',
                    conteudo: '<ul><li>Faça paradas a cada 2 – 3 h para água, passeio e higiene.</li><li>Mantenha ar-condicionado suave; evite janelas totalmente abertas.</li><li>Última refeição 3 h antes de partir para reduzir enjoo.</li></ul>'
                },
                {
                    titulo: 'Chegada e acomodação',
                    conteudo: '<ul><li>Apresente o novo ambiente gradualmente; leve cama e brinquedo familiar.</li><li>Retome horários habituais de alimentação e passeios o quanto antes.</li></ul>'
                }
            ]
        },
        onibus: {
            icone: 'directions_bus',
            titulo: 'Regras para viajar de ônibus',
            regras: [
                {
                    titulo: 'Documentação necessária para viagens de ônibus',
                    conteudo: '<ul><li>Atestado de saúde (10 dias) e carteira de vacinação.</li><li>Reservar com antecedência; algumas viações exigem formulário próprio.</li></ul>'
                },
                {
                    titulo: 'Equipamentos obrigatórios, como usar',
                    conteudo: '<ul><li>Caixa até 45 × 35 × 25 cm (ou conforme regra da empresa) no colo ou no chão.</li><li>Tapete higiênico no fundo + fraldas e lenços para trocas rápidas.</li></ul>'
                },
                {
                    titulo: 'Cuidados durante a viagem',
                    conteudo: '<ul><li>Informe-se sobre paradas: desembarque apenas com autorização do motorista.</li><li>Use guia e plaquinha de identificação sempre que sair do coletivo.</li></ul>'
                },
                {
                    titulo: 'Chegada e acomodação',
                    conteudo: '<ul><li>Ofereça água fresca e passeio curto para aliviar ansiedade pós-trajeto.</li></ul>'
                }
            ]
        },
        trem: {
            icone: 'train',
            titulo: 'Regras para viajar de trem',
            regras: [
                {
                    titulo: 'Documentação necessária para viagens de trem',
                    conteudo: '<ul><li>Carteira de vacinação em dia; atestado de saúde recomendável.</li><li>Alguns sistemas pedem cadastro prévio on-line ou na bilheteria.</li></ul>'
                },
                {
                    titulo: 'Equipamentos obrigatórios, como usar',
                    conteudo: '<ul><li>Caixa rígida ou bolsa ventilada até 10 kg total.</li><li>Caixa deve ficar no colo ou aos pés do tutor, nunca sobre assentos.</li></ul>'
                },
                {
                    titulo: 'Cuidados durante a viagem',
                    conteudo: '<ul><li>Evite horários de pico; ruído excessivo pode estressar o animal.</li><li>Leve brinquedo silencioso ou petisco para distração.</li></ul>'
                },
                {
                    titulo: 'Chegada e acomodação',
                    conteudo: '<ul><li>Aguarde a plataforma esvaziar para desembarcar com segurança.</li><li>Ofereça espaço tranquilo para o pet se recompor do movimento.</li></ul>'
                }
            ]
        },
        aviao: {
            icone: 'flight',
            titulo: 'Regras para viajar de avião',
            regras: [
                {
                    titulo: 'Documentação necessária para viagens de avião',
                    conteudo: '<ul><li>Carteira de vacinação atualizada.</li><li>Atestado de saúde (10 dias).</li><li>Voos internacionais: Certificado Veterinário Internacional (CVI) + microchip.</li></ul>'
                },
                {
                    titulo: 'Equipamentos obrigatórios, como usar',
                    conteudo: '<ul><li>Cabine: bolsa flexível com base rígida que caiba sob o assento.</li><li>Porão climatizado: caixa rígida, travas metálicas, bebedouro fixo e etiqueta com contato.</li></ul>'
                },
                {
                    titulo: 'Cuidados durante a viagem',
                    conteudo: '<ul><li>Evite sedação (contraindicada pela ANAC).</li><li>Para raças braquicefálicas, prefira voos noturnos ou horários mais frescos.</li><li>Forre a caixa com tapete absorvente; não abra durante o voo.</li></ul>'
                },
                {
                    titulo: 'Chegada e acomodação',
                    conteudo: '<ul><li>Retire o pet na esteira ou no balcão de cargas assim que liberado.</li><li>Ofereça água e observe sinais de estresse ou desidratação.</li></ul>'
                }
            ]
        },
        navio: {
            icone: 'directions_boat',
            titulo: 'Regras para viajar de navio',
            regras: [
                {
                    titulo: 'Documentação necessária para viagens de navio',
                    conteudo: '<ul><li>Atestado de saúde (10 dias), carteira de vacinação e antipulgas em dia.</li><li>Confirme exigências específicas da companhia (algumas pedem exame de sorologia).</li></ul>'
                },
                {
                    titulo: 'Equipamentos obrigatórios, como usar',
                    conteudo: '<ul><li>Canil climatizado ou cabine “pet-friendly” reservada com antecedência.</li><li>Guia curta para circular em conveses autorizados + tapetes higiênicos suficientes.</li></ul>'
                },
                {
                    titulo: 'Cuidados durante a viagem',
                    conteudo: '<ul><li>Alimente-o em porções pequenas para evitar enjoo marítimo.</li><li>Jamais descarte tapetes ou resíduos ao mar; utilize lixeiras fechadas.</li></ul>'
                },
                {
                    titulo: 'Chegada e acomodação',
                    conteudo: '<ul><li>Desembarque guiado pela tripulação; cheque hidratação e temperatura corporal.</li><li>Restabeleça rotina normal de passeios assim que possível.</li></ul>'
                }
            ]
        }
    };

    // --- SELEÇÃO DOS ELEMENTOS DO HTML ---
    const transportButtons = document.querySelectorAll('.transport-option');
    const rulesBoxIcon = document.getElementById('rules-box-icon');
    const rulesBoxTitle = document.getElementById('rules-box-title');
    const accordionContainer = document.getElementById('accordion-container');

    // --- FUNÇÃO PARA ATIVAR O ACORDEÃO ---
    function inicializarAccordion() {
        const accordionItems = accordionContainer.querySelectorAll('.accordion-item');
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            header.addEventListener('click', () => {
                const isOpen = item.classList.contains('is-open');
                // Fecha todos os itens
                accordionItems.forEach(otherItem => otherItem.classList.remove('is-open'));
                // Abre o item clicado (se ele não estava aberto)
                if (!isOpen) {
                    item.classList.add('is-open');
                }
            });
        });
    }

    // --- FUNÇÃO PRINCIPAL PARA ATUALIZAR O CONTEÚDO ---
    function atualizarConteudo(tipoTransporte) {
        const data = regrasDeViagem[tipoTransporte];
        if (!data) return;

        rulesBoxIcon.textContent = data.icone;
        rulesBoxTitle.textContent = data.titulo;

        let accordionHTML = '';
        data.regras.forEach((regra, index) => {
            const isOpenClass = index === 0 ? 'is-open' : '';
            accordionHTML += `
                <div class="accordion-item ${isOpenClass}">
                    <div class="accordion-header">
                        <span>${regra.titulo}</span>
                        <span class="material-icons">expand_more</span>
                    </div>
                    <div class="accordion-content">
                        ${regra.conteudo}
                    </div>
                </div>
            `;
        });
        
        accordionContainer.innerHTML = accordionHTML;
        inicializarAccordion();
    }

    // --- ADICIONA O EVENTO DE CLIQUE AOS BOTÕES ---
    transportButtons.forEach(button => {
        button.addEventListener('click', () => {
            transportButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const tipoTransporte = button.dataset.transport;
            atualizarConteudo(tipoTransporte);
        });
    });

    // --- ESTADO INICIAL DA PÁGINA ---
    const defaultActiveButton = document.querySelector('.transport-option[data-transport="carro"]');
    if (defaultActiveButton) {
        defaultActiveButton.classList.add('active');
        atualizarConteudo('carro');
    }
});