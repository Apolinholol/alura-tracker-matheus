import Tarefas from "@/views/Tarefas.vue"
import Projetos from "@/views/Projetos.vue"
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"
import ListaProjetos from "@/views/Projetos/ListaProjetos.vue"
import FormularioProjet from "@/views/Projetos/FormularioProjet.vue"

const rotas: RouteRecordRaw[] = [
        {
            path: '/',
            name: 'Tarefas',
            component: Tarefas
        },
        {
            path:'/projetos',
            component: Projetos,
            // Deixando explicito quais as rotas filhas
            children: [
                {
                    path: '',
                    name: 'Projetos',
                    component: ListaProjetos
                },
                {
                    path: 'novo',
                    name: 'Novo projeto',
                    component: FormularioProjet
                },
                {
                    path: '/:id',
                    name: 'Editar projeto',
                    component: FormularioProjet,
                    props:true
                },
            ]
        }
       
]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador