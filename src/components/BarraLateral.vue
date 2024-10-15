<template>
    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>
        <button class="btn btn-secondary mt-5 " @click="alterarTema"> 
            {{ textoBotao }} 
        </button>
        <nav>
            <ul class="list-group mt-4 p-2 mx-5 text-start">
                <li class="list-group-item border-0 ">
                    <router-link class="link" to="/"><i class="bi bi-chevron-double-right me-2"></i>Tarefas</router-link> 
                </li>
                <li class="list-group-item border-0 ">
                    <router-link class="link" to="/projetos"><i class="bi bi-chevron-double-right me-2"></i>Projetos</router-link> 
                </li>
            </ul>
        </nav>
    </header>
</template>

<script   lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name:'BarraLateral'
    ,emits:['aoAlterarTema'],
    data() {
        return{
           modoEscuroAtivo: false
        }
    },
    computed:{
        textoBotao(){
            if(this.modoEscuroAtivo){
                return 'Desativar modo escuro'
            }
            return 'Ativar modo escuro'
        }
    },
    methods:{
        alterarTema(){
            this.modoEscuroAtivo = !this.modoEscuroAtivo
            this.$emit('aoAlterarTema', this.modoEscuroAtivo)
        }
    }
    })
</script>

<style scoped>
   header{
    padding: 1rem;
    background: #0D3B66;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    text-align: center;
}
@media only screen and(maxwidth:768px){
    header{
        padding: 2.5rem;
        height:auto;
    }
   } 
.panel li{
    margin: 8px 0;
}

.link,.list-group-item{
    text-decoration: none;
    background-color: #0D3B66;
    color: #fff;
}
.link:hover{
    color:#FAF0CA;
}
.link.router-link-active{
    color: #FAF0CA
}
</style>