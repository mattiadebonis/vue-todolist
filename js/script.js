var app = new Vue({
    el: "#root",
    data: {
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
        ]
    },
    methods:{
        cancellaToDo : function(indexDaRimuovere){
            this.toDos.splice(indexDaRimuovere,1)
        }
    }


});