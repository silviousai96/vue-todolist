var app = new Vue({
    
    el: '#root',
    
    data: {
        userNewTodo: '',
        todos: [
            'Fare i compiti',
            'fare la spesa',
            'fare il bucato'
        ],
    },
    methods: {
       //per aggiungere un nuovo toDo nell'array della lista dei toDo
        addNewTodo() {
            //il toDo inserito dall'utente sarà inserito solo se l'input avrà almeno una lettera,
            //altrimenti non fara nulla.
            if(this.userNewTodo.length > 0) {                
                this.todos.push(this.userNewTodo); 
                this.userNewTodo = '';
            }          
        }
    },
});