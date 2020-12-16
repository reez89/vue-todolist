/* Create una todo list usando VueJS.
Funzionalitá:
La nostra todo list avrá alcune tasks di default predefinite
L'utente puó inserire nuove tasks
Cliccando sulla "X" l'utente puó cancellare una task
Se non ci sono piu task nella lista, mostrate un messaggio tipo "Nulla da fare"
Quando l'utente inserisce una task ha due modi per salvarla: o preme il pulsante add o preme il taso Enter della tastiera.
Attenzione: l'utente non deve inserire tasks vuote ma almeno un tot di caratteri.
 */

let app = new Vue({
    el:"#app",
    data:{
        inputs: [],
    },
    methods:{
    
        // inserisco nuove task
        add(){
           var text = document.querySelector('input').value;
        // impedisco all'utente di inserire qualcosa con meno di 3 caratteri.
            if(text.length <= 3){
                alert("invalid selection");
            }
        // se invece, la stringa ha piu' di 3 caratteri la pusho nell'array.
            else{
                this.inputs.push ({value : text});
        // dopo aver pushato, elimino il campo dell'input in modo da poter inserire nuovamente una Task.
                document.querySelector('input').value ='';
            }
        },
        
        // remove tasks
        remove(index){
            this.inputs.splice (index, 1)
        },
    },
    
});