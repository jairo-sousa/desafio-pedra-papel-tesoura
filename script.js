const pedra_1 = document.getElementById("pedra_1");
const pedra_2 = document.getElementById("pedra_2");

const papel_1 = document.getElementById("papel_1");
const papel_2 = document.getElementById("papel_2");

const tesoura_1 = document.getElementById("tesoura_1");
const tesoura_2 = document.getElementById("tesoura_2");

const resultado = document.getElementById("resultado");

const limparSelecao = () => {
  pedra_1.style.opacity = 0.6;
  pedra_2.style.opacity = 0.6;
  papel_1.style.opacity = 0.6;
  papel_2.style.opacity = 0.6;
  tesoura_1.style.opacity = 0.6;
  tesoura_2.style.opacity = 0.6;
};

const lanceDoJogador = (mao) => {
  if (mao === "pedra") {
    pedra_1.style.opacity = 1;
  }
  if (mao === "papel") {
    papel_1.style.opacity = 1;
  }
  if (mao === "tesoura") {
    tesoura_1.style.opacity = 1;
  }
};
const lanceDoComputador = (mao) => {
  if (mao === "pedra") {
    pedra_2.style.opacity = 1;
  }
  if (mao === "papel") {
    papel_2.style.opacity = 1;
  }
  if (mao === "tesoura") {
    tesoura_2.style.opacity = 1;
  }
};

const opcoes = ["pedra", "papel", "tesoura"];
//opcoes[0] = pedra | opcoes[1] = papel| opcoes[2] = tesoura

const mostrarResultado = (mao) => {
  const aleatorio_012 = Math.floor(Math.random() * 3);
  const computador = opcoes[aleatorio_012];

  lanceDoComputador(computador);

  // CASOS DE VITÓRIA
  const pedraTesoura = mao === "pedra" && computador === "tesoura";
  const papelPedra = mao === "papel" && computador === "pedra";
  const tesouraPapel = mao === "tesoura" && computador === "papel";

  // POSSÍVEIS RESULTADOS
  const empate = computador === mao;
  const venceu = pedraTesoura || papelPedra || tesouraPapel;
  const perdeu = !empate && !venceu;

  // MOSTRAR RESULTADO
  if (empate) {
    resultado.innerText = "Empate!";
  }
  if (venceu) {
    resultado.innerText = "Você venceu!";
  }
  if (perdeu) {
    resultado.innerText = "Você perdeu!";
  }
};

const jogar = (mao) => {
  limparSelecao();

  lanceDoJogador(mao);

  mostrarResultado(mao);
};
