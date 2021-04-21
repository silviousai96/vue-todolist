var app = new Vue({
    
    el: '#root',
    
    data: {
        userNewTodo: '',
        todos: [
            'Fare i compiti',
            'Fare la spesa',
            'Fare il bucato'
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
        },

        deleteTodo(index) {
            this.todos.splice(0, 1);
        }
    },
});