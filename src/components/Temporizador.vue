<template>

    <Cronometro :tempo-em-segundos="tempoEmSegundos"/>


    <!-- Botões de Play e Stop -->
    <div class="d-flex">
      <button class="btn  mx-3 d-flex align-items-center" style="color:white ;background-color:green;"
      @click="incializarContagem" :disabled="cronometroRodando">
        <i class="bi bi-play me-1"></i>
        <span>Play</span>
      </button>
      <button class="btn  d-flex align-items-center " style="color:black ;background-color:red;"
      @click="finalizarContagem" :disabled="!cronometroRodando">
        <i class="bi bi-stop me-1"></i>
        <span>Stop</span>
      </button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Cronometro from './Cronometro.vue';
    export default defineComponent({
        name:'AppTemporizador',
        emits:['aoTemporizadorFinalizado'],
        data(){
            return{
                tempoEmSegundos:0,
                cronometro: 0,
                cronometroRodando: false
            }
        },components:{
            Cronometro
        },
        methods:{
            incializarContagem(){
                this.cronometroRodando = true
                //Cronometro armazena o valor do intervalo para depois ser possivel dar o stop
               this.cronometro=setInterval(() => {
                    this.tempoEmSegundos +=1
                },1000)
                console.log('inicializando')
            },
            finalizarContagem(){
                
                this.cronometroRodando = false
                clearInterval(this.cronometro)
                this.$emit('aoTemporizadorFinalizado',this.tempoEmSegundos)
                this.tempoEmSegundos=0
                console.log('terminando')
            }
        },
    })
</script>