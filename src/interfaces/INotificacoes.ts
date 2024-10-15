export enum TipoNotificacao{
    SUCESSO,FALHA,ATENCAO
}
export default interface INotificacoes{
    titulo: string
    descricao:string
    tipo: TipoNotificacao
    id: number
}