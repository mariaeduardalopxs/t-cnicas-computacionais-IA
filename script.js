const desafios = [
  {
    categoria: "ÉTICA E APRENDIZAGEM",
    pergunta: "A IA pode fazer sua tarefa inteira?",
    historia: "Você precisa entregar um trabalho amanhã. Uma ferramenta de IA pode escrever tudo em segundos, mas o objetivo da atividade é desenvolver seu conhecimento.",
    opcoes: [
      {
        texto: "Copiar o texto inteiro e entregar como se fosse meu.",
        pontos: 0,
        retorno: "Entregar conteúdo de terceiros como próprio prejudica a aprendizagem. A autoria e as regras da escola devem ser respeitadas."
      },
      {
        texto: "Usar a IA para esclarecer dúvidas, organizar ideias e revisar meu trabalho.",
        pontos: 20,
        retorno: "Excelente! A IA pode apoiar sua aprendizagem. Você continua responsável por compreender o conteúdo e verificar as informações."
      },
      {
        texto: "Pedir uma resposta pronta e mudar algumas palavras sem conferir.",
        pontos: 5,
        retorno: "Modificar palavras não garante compreensão nem precisão. É importante verificar os fatos e elaborar uma resposta própria."
      }
    ]
  },
  {
    categoria: "PRIVACIDADE DIGITAL",
    pergunta: "Que informações você deve compartilhar?",
    historia: "Um chatbot oferece um plano de estudos personalizado, mas pede seu endereço, sua senha escolar e dados pessoais da família.",
    opcoes: [
      {
        texto: "Enviar todos os dados para receber uma resposta melhor.",
        pontos: 0,
        retorno: "Compartilhar dados desnecessários pode colocar sua privacidade em risco. Nunca forneça senhas a chatbots."
      },
      {
        texto: "Compartilhar apenas o necessário e verificar a política de privacidade.",
        pontos: 20,
        retorno: "Boa escolha! Proteja seus dados e utilize apenas as informações indispensáveis para a finalidade desejada."
      },
      {
        texto: "Usar informações pessoais de um colega para testar o chatbot.",
        pontos: 0,
        retorno: "Os dados de outras pessoas também merecem proteção. Nunca compartilhe informações sem autorização."
      }
    ]
  },
  {
    categoria: "PENSAMENTO CRÍTICO",
    pergunta: "A inteligência artificial sempre diz a verdade?",
    historia: "Uma IA apresenta uma informação histórica convincente e cita um livro. Porém, você não consegue confirmar a informação em outras fontes.",
    opcoes: [
      {
        texto: "Aceitar a resposta porque parece convincente.",
        pontos: 0,
        retorno: "Uma resposta bem escrita não é necessariamente verdadeira. A IA pode cometer erros e inventar referências."
      },
      {
        texto: "Comparar a resposta com fontes confiáveis antes de utilizá-la.",
        pontos: 20,
        retorno: "Muito bem! Verificar fontes e comparar evidências são atitudes fundamentais para evitar a desinformação."
      },
      {
        texto: "Repetir a pergunta até a ferramenta dar a mesma resposta.",
        pontos: 5,
        retorno: "A repetição não comprova a veracidade. Consulte fontes confiáveis e independentes."
      }
    ]
  },
  {
    categoria: "ÉTICA E RESPEITO",
    pergunta: "Como agir diante de uma imagem falsa?",
    historia: "Um estudante utiliza IA para criar uma imagem falsa de um colega. A imagem circula na escola e provoca comentários ofensivos.",
    opcoes: [
      {
        texto: "Compartilhar a imagem porque parece uma brincadeira.",
        pontos: 0,
        retorno: "Conteúdos falsos podem causar humilhação e danos reais. O uso da IA não torna a situação inofensiva."
      },
      {
        texto: "Não compartilhar, apoiar o colega e procurar um adulto responsável.",
        pontos: 20,
        retorno: "Atitude responsável! Interromper a circulação do conteúdo e buscar ajuda contribui para proteger a pessoa afetada."
      },
      {
        texto: "Modificar a imagem para deixá-la ainda mais convincente.",
        pontos: 0,
        retorno: "Isso pode ampliar o dano. O correto é interromper a divulgação e procurar ajuda."
      }
    ]
  },
  {
    categoria: "FUTURO DA EDUCAÇÃO",
    pergunta: "Qual escola queremos construir?",
    historia: "Sua escola pretende utilizar IA para adaptar atividades. A ferramenta pode ajudar os estudantes, mas também pode apresentar erros e reproduzir preconceitos.",
    opcoes: [
      {
        texto: "Deixar todas as decisões nas mãos da IA.",
        pontos: 0,
        retorno: "A tecnologia pode apoiar decisões, mas não substitui automaticamente a avaliação humana, a empatia e a responsabilidade."
      },
      {
        texto: "Proibir qualquer uso de IA sem discutir suas possibilidades.",
        pontos: 5,
        retorno: "Existem situações em que restrições são necessárias. Porém, aprender a avaliar criticamente a tecnologia também é importante."
      },
      {
        texto: "Experimentar com orientação dos professores e avaliar os resultados.",
        pontos: 20,
        retorno: "Ótima decisão! O uso responsável combina inovação, supervisão humana, inclusão e proteção dos dados dos estudantes."
      }
    ]
  }
];

const elemento = (id) => document.getElementById(id);

const telas = ["intro", "game", "result"];

let indice = 0;
let pontuacao = 0;
let respondeu = false;

function mostrarTela(nome) {
  telas.forEach((id) => {
    elemento(id).classList.toggle("hidden", id !== nome);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function iniciarJogo() {
  indice = 0;
  pontuacao = 0;
  respondeu = false;

  mostrarTela("game");
  mostrarDesafio();
}

function mostrarDesafio() {
  const desafio = desafios[indice];
  respondeu = false;

  elemento("category").textContent = desafio.categoria;
  elemento("counter").textContent =
    `Desafio ${indice + 1} de ${desafios.length}`;
  elemento("score").textContent = `Pontos: ${pontuacao}`;
  elemento("question").textContent = desafio.pergunta;
  elemento("story").textContent = desafio.historia;

  elemento("progress-bar").style.width =
    `${(indice / desafios.length) * 100}%`;

  elemento("feedback").classList.add("hidden");

  const area = elemento("choices");
  area.replaceChildren();

  desafio.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "choice";

    const letra = document.createElement("span");
    letra.className = "letter";
    letra.textContent = String.fromCharCode(65 + i);

    const texto = document.createElement("span");
    texto.textContent = opcao.texto;

    botao.append(letra, texto);
    botao.addEventListener("click", () => escolherResposta(i));

    area.appendChild(botao);
  });
}

function escolherResposta(opcaoIndice) {
  if (respondeu) return;

  respondeu = true;

  const desafio = desafios[indice];
  const escolha = desafio.opcoes[opcaoIndice];

  pontuacao += escolha.pontos;

  [...elemento("choices").children].forEach((botao, i) => {
    botao.disabled = true;

    if (i === opcaoIndice) {
      botao.classList.add(
        escolha.pontos === 20 ? "correct" : "incorrect"
      );
    }
  });

  elemento("score").textContent = `Pontos: ${pontuacao}`;
  elemento("feedback-title").textContent =
    escolha.pontos === 20
      ? "✓ Decisão responsável!"
      : "◇ Vamos refletir sobre essa escolha";

  elemento("feedback-text").textContent = escolha.retorno;
  elemento("feedback").classList.remove("hidden");

  elemento("next-btn").textContent =
    indice === desafios.length - 1
      ? "VER MEU RESULTADO →"
      : "PRÓXIMO DESAFIO →";

  elemento("progress-bar").style.width =
    `${((indice + 1) / desafios.length) * 100}%`;

  elemento("next-btn").focus();
}

function proximoDesafio() {
  if (!respondeu) return;

  if (indice < desafios.length - 1) {
    indice++;
    mostrarDesafio();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  const maximo = desafios.length * 20;
  const percentual = Math.round((pontuacao / maximo) * 100);

  elemento("final-score").textContent = `${percentual}/100`;
  elemento("final-bar").style.width = `${percentual}%`;

  let titulo;
  let descricao;
  let mensagem;

  if (percentual >= 80) {
    titulo = "Você está construindo um futuro consciente!";
    descricao =
      "Suas escolhas demonstram atenção à ética, à privacidade e ao pensamento crítico.";
    mensagem =
      "Continue aprendendo e incentive outras pessoas a utilizar a tecnologia com responsabilidade.";
  } else if (percentual >= 50) {
    titulo = "Você está no caminho da descoberta!";
    descricao =
      "Você já reconhece aspectos importantes da IA e pode aprofundar suas reflexões.";
    mensagem =
      "Analise as consequências das suas decisões, confira as informações e proteja os dados pessoais.";
  } else {
    titulo = "Sua jornada de aprendizagem começou!";
    descricao =
      "Cada desafio é uma oportunidade para compreender melhor as possibilidades e os riscos da IA.";
    mensagem =
      "Continue questionando, estudando e refletindo. Aprender com os desafios é parte fundamental do processo.";
  }

  elemento("result-title").textContent = titulo;
  elemento("result-description").textContent = descricao;
  elemento("result-message").textContent = mensagem;

  mostrarTela("result");
}

elemento("start-btn").addEventListener("click", iniciarJogo);
elemento("next-btn").addEventListener("click", proximoDesafio);
elemento("restart-btn").addEventListener("click", iniciarJogo);

elemento("home-btn").addEventListener("click", () => {
  mostrarTela("intro");
});
