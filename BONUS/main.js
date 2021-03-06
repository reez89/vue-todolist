/* Istruzioni Bonus (da mettere in una cartella bonus):
* L'utente vuole poter modificare una task giá inserita  ---ok
* ma vuole anche poter indicare che la task é stata completata ---ok
* inoltre se una task é stata completa allora vuole che venga inserita in un'altra colonna tipo "tasks completate" --- ok
* ah non é finita, dice che quando cancella una task, non vuole che questa venga subito rimossa, ma vuole che resti visibile e venga spostata in una colonna tipo "cestino" --- ok
* si, l'utente é un ropi scatole, dice infine che vuole poter rimuovere tutte le tasks nel cestino cliccando su un pulsante tipo "svuota cestino" --- ok
* Il nostro utente per ora sembra non avere altre richieste... ma chissá se dopo gli viene in mente che vuole anche poter rimettere una task cancellata nella lista di tasks da fare, magari l'ha  cancellata per sbaglio... */

let app = new Vue({
    el:"#app",
    data:{
        show: true,
        inputs: [],
        inputsCompleted: [],
        trashHolder: [],
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
            this.trashHolder.push({value : this.inputs[index].value})
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
                var newTaskCompleted = this.inputs[index].value;
            }
            if(newTaskCompleted.length != 0){
                this.inputsCompleted.push({value : newTaskCompleted});
                this.inputs.splice(index, 1)
            }
            
        },
        // premendo il cestino, tutte le task vengono elminate.
        removeAll(){
            this.inputs.splice (this.inputs)
            this.show = true;
        },

        // premendo il cestino, rimuovo tutte le task complete.
        removeCompleted(){
            this.inputsCompleted.splice (this.inputsCompleted)
        },

        // premendo il cestino rimuovo tutte le task eliminate.
        removeTrash(){
            this.trashHolder.splice (this.trashHolder)
        },
        // premendo sulla freccia, riporto la task in quelle da fare.
        back(index){
            this.inputs.push(this.inputsCompleted[index]);
            this.inputsCompleted.splice(index,1);
        }
    },

});