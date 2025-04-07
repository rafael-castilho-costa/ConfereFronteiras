import axios from "axios";
import listaFronteira from './minha_lista_fronteira.json' assert {type:'json'};

const estadosFronteira = [11, 12, 13, 14, 15, 16, 41, 42, 43, 50, 51]; // Códigos IBGE dos estados de fronteira

async function buscarMunicipiosDoIBGE() {
  let municipiosIBGE = [];

  for (let id of estadosFronteira) {
    try {
      const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`);
      const nomes = response.data.map((cidade) => cidade.nome);
      municipiosIBGE.push(...nomes);
    } catch (error) {
      console.error(`Erro ao buscar municípios do estado ${id}:`, error.message);
    }
  }

  return municipiosIBGE;
}

function normalizarNome(nome) {
  return nome.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

async function comparar() {
  const ibge = await buscarMunicipiosDoIBGE();
  const ibgeNormalizados = ibge.map(normalizarNome);
  const listaNormalizada = listaFronteira.map(normalizarNome);

  const divergentes = listaNormalizada.filter((cidade) => !ibgeNormalizados.includes(cidade));

  if (divergentes.length === 0) {
    console.log("✅ Todas as cidades estão com sintaxe compatível com o IBGE.");
  } else {
    console.log("⚠️ Cidades com nome/sintaxe divergente:");
    divergentes.forEach((cidade) => console.log(`- ${cidade}`));
  }
}

comparar();
