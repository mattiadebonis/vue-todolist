var app = new Vue({
    el: "#root",
    data: {
        // oggetto to do
        toDos: [
            {
                nome: "Portare Ragù a spasso",
                completato: true
            },
            {
                nome: "Imbiancare ingresso",
                completato: true
            },
            {
                nome: "Scrivere diario",
                completato: false
            }
        ],
        //nuovo to do
        nuovoToDo: ""
                
    },
    methods:{
        //cancella to do
        cancellaToDo : function(indexDaRimuovere){
            this.toDos.splice(indexDaRimuovere,1)
        },
        //aggiungi to do
        aggiungiToDo : function(){
            this.toDos.push({nome: this.nuovoToDo, completato: true});
            this.nuovoToDo ="";
        }
    }
});