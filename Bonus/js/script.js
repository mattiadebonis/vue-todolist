var app = new Vue({
    el: "#root",
    data: {
        // oggetto to do
        toDos: [
            {
                nome: "Portare Ragù a spasso",
                daCompletare: true
            },
            {
                nome: "Imbiancare ingresso",
                daCompletare: true
            },
            {
                nome: "Scrivere diario",
                daCompletare: false
            }
        ],
        //nuovo to do
        nuovoToDo: ""
                
    },
    methods:{
        //cancella to do
        cancellaToDo : function(indexDaRimuovere){
            this.toDos[indexDaRimuovere].daCompletare = false;
        },
        //aggiungi to do
        aggiungiToDo : function(){
            this.toDos.push({nome: this.nuovoToDo, daCompletare: true});
            this.nuovoToDo ="";
        },
        //formatta index daCompletare
        doneToDo : function(indexElemento){
            var risultato = "";
            if (this.toDos[indexElemento].daCompletare == false){
                return risultato = "done_to_do";
            }
            
        }
    }
});