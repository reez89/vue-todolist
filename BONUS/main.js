/* Istruzioni Bonus (da mettere in una cartella bonus):
* L'utente vuole poter modificare una task giá inserita  ---ok
* ma vuole anche poter indicare che la task é stata completata ---ok
* inoltre se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate"
* ah non é finita, dice che quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile e venga spostata in una colonna tipo "cestino"
* si, l'utente é un ropi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino"
Il nostro utente per ora sembra non avere altre richieste... ma chissá se dopo gli viene in mente che vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha  cancellata per sbaglio... */

let app = new Vue({
    el:"#app",
    data:{
        show: true,
        inputs: [],
        inputsCompleted: [],
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
                this.show = false;
        // dopo aver pushato, elimino il campo dell'input in modo da poter inserire nuovamente una Task.
                document.querySelector('input').value ='';
            }
        },
        
        // remove tasks
        remove(index){
            this.inputs.splice (index, 1)
            if (this.inputs.length === 0){
            this.show = true;
        }
        },

        // modify tasks
        modify(index){
            let inputs = document.getElementsByClassName('tasksInput');
            for(let i = 0; i < inputs.length; i++) {
            inputs[index].disabled = false;
            }
        },
        // task completata
        taskCompleted(index){
            let taskInput = document.getElementsByClassName('tasksInput');
            for(let i = 0; i < taskInput.length; i++){
                taskInput[index].classList.add("completed");
                var newTaskCompleted = document.querySelector('.completed').value
            }
            if(taskInput){
                this.inputsCompleted.push ({value : newTaskCompleted});
            }
        },
        // premendo il cestino, tutte le task vengono elminate.
        removeAll(){
            this.inputs.splice (this.inputs)
            this.show = true;
        }
    }

});