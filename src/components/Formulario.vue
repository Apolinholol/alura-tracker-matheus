<template>
    <div class="container-fluid col-md px-0 mt-0 ">
        <div class="form-group ">
          <div class="form-control d-flex align-items-center formulario" role="form" aria-label="Formulario para criacao de uma nova tarefa">
                <!-- Input de texto -->
                <input type="text" class="form-control w-50" placeholder="Qual tarefa você deseja iniciar?"
                v-model="descricao">
                
                <div>
                    <select class="form-select ms-5" v-model="idProjeto">
                        <option value="">Selecione o Projeto</option>
                            <option :value="projeto.id"
                            v-for="projeto in projetos"
                            :key="projeto.id">
                            {{projeto.nome}}
                        </option>
                    </select>
                </div>
                <!-- Seção do contador e botões -->
                <section class="mx-3 mt-2 d-flex align-items-center ms-5">
                    <Temporizador @ao-temporizador-finalizado="salvarTarefa"/>
                </section>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import { useStore } from 'vuex';
import Temporizador from './Temporizador.vue';
import { computed, defineComponent, ref } from 'vue';
import { key } from '@/store';

export default defineComponent({
    name:'AppFormulario',
    emits: ["aoSalvarTarefa"],
    components:{Temporizador},
    setup(props,{emit}){

        const store = useStore(key)


        const descricao = ref("")
        const idProjeto = ref("")
        const projetos = computed( ()=> store.state.projeto.projetos)

        const salvarTarefa = (tempoDecorrido: number):void =>{
            emit('aoSalvarTarefa',{
                duracaoEmSegundos: tempoDecorrido,
                descricao: descricao.value,
                projeto: projetos.value.find(proj => proj.id == idProjeto.value),
            }),
            //Limpa o input
            descricao.value=""
        }
        return {
            descricao,
            idProjeto,
            projetos,
            salvarTarefa
        }
    }
})
</script>

<style>
.formulario{
    color:var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>