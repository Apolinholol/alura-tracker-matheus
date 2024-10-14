<template>
        <Formulario @aoSalvarTarefa="salvarTarefa"/>
        <div>
          <Tarefa :key="index" v-for="(tarefa,index) in tarefas" :tarefa="tarefa"/>
          <Card v-if="tarefas.length === 0">
            <p class="pt-2 ps-2 ">Você não está muito produtivo hoje :( </p>
          </Card>
        </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Formulario from '../components/Formulario.vue';
  import Tarefa from '../components/Tarefa.vue';
  import Card from '../components/Card.vue';
  import ITarefa from '@/interfaces/ITarefa';
  
  
  export default defineComponent({
    name: 'App',
    components:{ Card,Formulario,Tarefa},
    data(){
      return{
        tarefas: [] as ITarefa[],
    
      }
    },
    methods:{
      salvarTarefa(tarefa: ITarefa){
        this.tarefas.push(tarefa)
      }
    }
  
    
    });
  </script>
