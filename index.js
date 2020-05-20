//Crear instancia de Vue.js
var app =new Vue({
    
    //Elemento con el cual se va a ligar Vue.js
    // # => id
    el: '#app',
    //Informacion que se va a manipular desde Vue
    //Todas las propiedades que se van actualizar "automaticamente"
    data: {
        name: 'Vue',

        todos: [
            {
                value: 'TODO #1',
                editMode: false
            },
            {
                value: 'TODO #2',
                editMode: false
            },
            {
                value: 'TODO #3',
                editMode: false
            }

        ],
        todo: '',
    },
    //Funciones de Vue
    methods: {
        addItem() {
            //Agregar item a arreglo
            this.todos.push({
                value: this.todo,
                editMode: false
            });

            //Borrar valor del input despues de borrar
            this.todo = '';
        },
        deleteItem(index){
            //"Borrar" elemto en la posicion index
            this.todos.splice(index, 1);
        },
        editItem(index) {
            //Marcar como que se esta editando (pasar a modo edicion)
            this.todos[index].editMode = true;
        },
        saveItem(index) {
            this.todos[index].editMode = false;
        }
    }
});