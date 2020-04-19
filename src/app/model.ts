export class Model{
    user;
    items;
    constructor(){
        this.user="Şeyma";
        this.items=[

            new ToDoItem("Breakfast",true),
            new ToDoItem("Cinema",false),
            new ToDoItem("Spor",false),
            new ToDoItem("Study",false),
              ]
    }
}


export class ToDoItem{
    description;
    action;
    constructor(description,action){
        this.description=description;
        this.action=action;
    }

}