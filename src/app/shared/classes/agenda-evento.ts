export class AgendaEvento{
  titulo!:string
  assunto!:string
  isPresencial!:boolean
  local!:string
  participantes:{id:number,nome:string}[]=[]
  descricao!:string
  data!:Date
  hora!:string | number
  semana!:number
  diaSemana!:string | number
  diaMes!:string | number
  mes!:string | number
  ano!:string | number;

  constructor(){

  }

  map(dados:Partial<AgendaEvento>):AgendaEvento{
console.log(dados)
    Object.keys(dados).forEach((key)=>{

      const k = key as keyof AgendaEvento;

      if(dados[k] !== undefined){
        (this[k] as any) = dados[k];
      }

      if(key == "data"){
        const date = new Date((dados[k] as any))
        console.log(date)
        this.hora = date.getHours();
        this.semana  = this.getWeekNumber(date);
        this.mes = date.getMonth();
        this.diaMes = date.getDate();
        this.diaSemana = date.getDay()
        this.ano = date.getFullYear();
      }



    })

    console.log(this)
    return this;

  }


getWeekNumber(date:Date){
 const dia = date.getDate();
    const primeiroDia = new Date(date.getFullYear(), date.getMonth(),1).getDay();
    return Math.ceil((dia + primeiroDia) / 7);
}



}
