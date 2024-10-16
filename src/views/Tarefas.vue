<template>
  <!-- -->
        <Formulario @aoSalvarTarefa="salvarTarefa" />
        <div>
          <Card v-if="tarefas.length === 0">
            <p class="pt-2 ps-2 ">Você não está muito produtivo hoje :( </p>
          </Card>

            <div class="input-group mt-3 mx-3 w-25">
              <input type="text" class="form-control" placeholder="Escreva aqui" aria-label="Username" aria-describedby="basic-addon1" v-model="filtro">
              <span class="border p-2" id="basic-addon1" :class="{'bg-dark text-light': modoEscuroAtivo, 'bg-light text-dark': !modoEscuroAtivo}" >Filtragem</span>
            </div>

          <Tarefa :key="index" v-for="(tarefa,index) in tarefas" :tarefa="tarefa" />
          
        </div>
        
     
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, ref, watchEffect } from 'vue';
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

        const filtro = ref("")
          // Funciona apenas com a memoria local, pois via API no index de tarefas é necessário digitar exatamente igual o valor
        // const tarefas = computed(() => store.state.tarefas.filter(t => 
        // !filtro.value.toUpperCase() || 
        // t.descricao.toUpperCase().includes(filtro.value.toUpperCase())))


        watchEffect(()=> {
          store.dispatch(OBTER_TAREFAS,filtro.value)
        })

        return{
            tarefas: computed(() => store.state.tarefas),
            filtro,
            store
        }
      },
      data(){
        return{
          tarefaSelecionada: null as ITarefa | null ,
          modoEscuroAtivo: false
        }
      },
    methods:{
      salvarTarefa(tarefa: ITarefa): void{
        this.store.dispatch(CADASTRAR_TAREFAS,tarefa)
      },
      trocarTema(modoEscuroAtivo : boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
    
  
    }
  });
  </script>
