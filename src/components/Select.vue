<script setup>
import { ref } from 'vue';

// Import Quasar css
import 'quasar/src/css/index.sass';

defineProps({
  msg: String,
});

const count = ref(null);

const modelNivel = ref(null);
const modelHabilidade = ref(null);
const modelOperante = ref(null);
var alvos = ref([
  { alvo: '1 - ônibus e moto', value: false },
  { alvo: '2 - ovo e queijo', value: false },
  { alvo: '3 - dado e jogo de xadrez', value: false },
  { alvo: '4 - cama e sofá', value: false },
  { alvo: '5 - abelha e pássaro', value: false },
  { alvo: '6 - abacate e abóbora', value: false },
  { alvo: '7 - calça e camisa', value: false },
  { alvo: '8 - lanche e pizza', value: false },
  { alvo: '9 - picolé e gelo', value: false },
  { alvo: '10 - squeeze e garrafa de água', value: false },
  { alvo: '11 - banco e cadeira', value: false },
  { alvo: '12 - caixa de presente e caixa de lenço de papel', value: false },
  { alvo: '13 - pia e banheira', value: false },
  { alvo: '14 - mala e mochila', value: false },
  { alvo: '15 - binóculo e óculos', value: false },
  { alvo: '16 - rosquinha e muffin', value: false },
  { alvo: '17 - caderno de anotação e lápis ', value: false },
  { alvo: '18 - boné e chápeu ', value: false },
  { alvo: '19 - panela e frigideira', value: false },
  { alvo: '20 - moeda e cédula de dinheiro', value: false },
  { alvo: '21 - girafa e zebra', value: false },
  { alvo: '22 - martelo e furadeira', value: false },
  { alvo: '23 - chaleira e cafeteira', value: false },
  { alvo: '24 - sol e estrela', value: false },
  { alvo: '25 - árvore e flor', value: false },
  { alvo: '26 - bolo e bala', value: false },
]);
//const alvoModel = ref([false]);

const niveis = ['Nível 1', 'Nível 2', 'Nível 3'];
const operantes = ['Mando', 'Tato', 'Social', 'Ouvinte'];
const habilidades = [
  '01-a: Faz contato visual (olhar em movimento) como forma de mando por atenção ou outros reforçadores 2 vezes. Observar. ',
  '01-b: Aproxima-se de um item reforçador para indicar a presença de uma operação motivadora 2 vezes. Observar. ',
  '01-c: Puxa um adulto para ter acesso a um item reforçador 2 vezes. Observar. ',
  '01-d: Aponta ou gesticula em direção a um reforçador para obtê-lo por 2 vezes. Observar. ',
  '01-M: Emite 2 palavras, sinais ou PECS, mas pode precisar de dica ecóica, imitativa ou outras dicas, mas não dicas físicas. Testar ou Observar. ',
  '02-a: Aponta para 2 diferentes reforçadores visando obtê-los por 2 vezes. Testar ou Observar. ',
  '02-b: Acena com a cabeça ou diz “Sim” ou “Não” quando um reforçador é oferecido por 2 vezes (exceto um alvo inicial). Testar ou Observar. ',
  '02-c: Emite 2 mandos diferentes sem dicas ecóicas – pode ser com dicas verbais ou do objeto. Testar ou Observar. ',
  '02-d: Espontaneamente emite 1 mando sem dicas ecóicas ou imitativas – pode ser com dicas do objeto. Observar. ',
  '02-e: Generaliza 2 mandos conhecidos com 2 pessoas diferentes e em 2 contextos diferentes. Testar ou Observar. ',
  '02-M: Emite 4 mandos diferentes sem dicas (exceto “O que você quer) - os itens desejados podem estar presentes (ex: bola, musica, bolacha). Testar. ',
  '03-a: Emite 2 mandos espontâneos (sem dica verbal); - o objeto pode estar presente. Observar. ',
  '03-b: Emite 5 mandos sem dicas ecóicas ou imitativas – pode ser com dicas verbais ou do objeto. Observar. ',
  '03-c: Generaliza 3 mandos por 2 exemplos de itens desejados (Ex: pede “Escorregador” para 2 escorregadores diferentes). Testar ou Observar. ',
  '03-d: Emite 6 mandos diferentes sem dicas ecóicas ou imitativas – pode ser com dicas verbais ou do objeto. Testar ou Observar. ',
  '03-M: Generaliza 6 mandos entre 2 pessoas, 2 ambientes e 2 exemplos diferentes de um mesmo reforçador (ex: pedir bolhas de sabão para a mãe e para o pai, dentro e ',
  '04-a: Pede atenção 2 vezes com algum tipo de resposta identificável (Ex: tocar no braço). Observar. ',
  '04-b: Emite 2 mandos sem um objeto presente – pode ser com a pergunta “O que você quer?”. Observar. ',
  '04-c: Emite 2 mandos sem dicas verbais – pode ser com dicas do objeto. Observar. ',
  '04-d: Pede para os outros olharem para o mesmo estímulo para o qual ela está olhando em 5 vezes por dia. Observar. ',
  '04-e: Emite 1 mando para remover um item ou uma atividade indesejável (Ex: “Não”). Testar ou Observar. ',
  '04-M: Espontaneamente (sem dica verbal) emite 5 mandos. Os itens desejados podem estar presentes. Observação por tempo – 60 minutos. ',
];

function updateAlvos() {
  return 1;
}
</script>

<template>
  <div class="q-pa-sm">
    <div class="q-gutter-y-sm column" style="max-width: 500px">
      <q-select
        clearable
        filled
        v-model="modelNivel"
        :options="niveis"
        label="Nível"
      />

      <q-select
        clearable
        filled
        color="green-9"
        v-model="modelOperante"
        :options="operantes"
        label="Operante"
      />
      <q-select
        clearable
        filled
        color="purple-12"
        v-model="modelHabilidade"
        :options="habilidades"
        label="Marco / Habilidade"
        menu-shrink="true"
      />

      <q-toggle
        v-show="modelHabilidade"
        v-for="(alvo, index) in alvos"
        :label="alvo.alvo"
        v-model="alvo.value"
      />
    </div>
  </div>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>

    <a href="www.google.com">SisAba Excelsior</a>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
div {
  min-width: 600px;
}
</style>
