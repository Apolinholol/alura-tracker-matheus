<template>
  <main class="container-fluid row g-0 " :class="{ 'modo-escuro': modoEscuroAtivo}">
    <!-- Alinhei o número de colunas do grid necessárias para compor apenas o tamanho da Imagem -->
    <div class="col-auto col-md-0 col-0 ">
      <BarraLateral @aoAlterarTema="trocarTema"/>
    </div>
  
    <div class="col mx-0 conteudo">
      <router-view></router-view>
    </div>
    
  </main>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';



export default defineComponent({
  name: 'App',
  components:{ BarraLateral },
  data(){
    return{
      modoEscuroAtivo: false
    }
  },
  methods:{
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
