<template>
    <div class="container-fluid col-md px-0 mt-0 ">
        <div class="form-group ">
          <div class="form-control d-flex align-items-center formulario" role="form" aria-label="Formulario para criacao de uma nova tarefa">
                <!-- Input de texto -->
                <input type="text" class="form-control " placeholder="Qual tarefa você deseja iniciar?"
                v-model="descricao">
                
                <!-- Seção do contador e botões -->
                <section class="mx-3 mt-2 d-flex align-items-center">
                    <Temporizador @ao-temporizador-finalizado="finalizarTarefa"/>
                </section>
          </div>
        </div>
      </div>
</template>

<script lang="ts">
import Temporizador from './Temporizador.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name:'AppFormulario',
    data() {
        return{
            descricao:""
        }
    },
    emits: ["aoSalvarTarefa"],
    methods:{
        finalizarTarefa(tempoDecorrido: number):void{
            this.$emit('aoSalvarTarefa',{
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            //Limpa o input
            this.descricao=""
        }
    },
    components:{Temporizador}
})
</script>

<style>
.formulario{
    color:var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>