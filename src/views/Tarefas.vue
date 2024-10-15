<template>
  <!-- -->
        <Formulario @aoSalvarTarefa="salvarTarefa" />
        <div>
          <Card v-if="tarefas.length === 0">
            <p class="pt-2 ps-2 ">Você não está muito produtivo hoje :( </p>
          </Card>
          <Tarefa :key="index" v-for="(tarefa,index) in tarefas" :tarefa="tarefa" />

        <div class="modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"  >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable"  >
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
          
        </div>
        
     
  </template>
  
  <script lang="ts">
  import { computed, defineComponent } from 'vue';
  import Formulario from '../components/Formulario.vue';
  import Tarefa from '../components/Tarefa.vue';
  import Card from '../components/Card.vue';
  import { useStore } from '@/store';
  import { CADASTRAR_TAREFAS, OBTER_PROJETOS, OBTER_TAREFAS } from '@/store/tipo-acoes';
import ITarefa from '@/interfaces/ITarefa';
  
  
  export default defineComponent({
    name: 'App',
    components:{ Card,Formulario,Tarefa},
    setup(){
        const store = useStore()
        store.dispatch(OBTER_TAREFAS)
        store.dispatch(OBTER_PROJETOS)
        return{
            tarefas: computed(() => store.state.tarefas),
            store
        }
      },
      data(){
        return{
          tarefaSelecionada: null as ITarefa | null
        }
      },
    methods:{
      salvarTarefa(tarefa: ITarefa): void{
        this.store.dispatch(CADASTRAR_TAREFAS,tarefa)
      },
    }
  
    
    });
  </script>
