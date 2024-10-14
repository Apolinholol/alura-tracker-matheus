<template>
  <main class="container-fluid row g-0 " :class="{ 'modo-escuro': modoEscuroAtivo}">
    <!-- Alinhei o número de colunas do grid necessárias para compor apenas o tamanho da Imagem -->
    <div class="col-auto col-md-0 col-0 ">
      <BarraLateral @aoAlterarTema="trocarTema"/>
    </div>
  
    <div class="col mx-0 conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa"/>
      <div>
        <Tarefa :key="index" v-for="(tarefa,index) in tarefas" :tarefa="tarefa"/>
        <Card v-if="tarefas.length === 0">
          <p class="pt-2 ps-2 ">Você não está muito produtivo hoje :( </p>
        </Card>
      </div>
    </div>
    
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import Tarefa from './components/Tarefa.vue';
import ITarefa from './interfaces/ITarefa';
import Card from './components/Card.vue';


export default defineComponent({
  name: 'App',
  components:{ Card,BarraLateral,Formulario,Tarefa},
  data(){
    return{
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  methods:{
    salvarTarefa(tarefa: ITarefa){
      this.tarefas.push(tarefa)
    },
    trocarTema(modoEscuroAtivo : boolean){
      this.modoEscuroAtivo= modoEscuroAtivo
    }
  }

  
  });
</script>

<style>
 main{
    --bg-primario:#fff;
    --texto-primario:#000;
 }
 main.modo-escuro{
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
 }
 .conteudo{
  background-color: var(--bg-primario) ;
 }
</style>
