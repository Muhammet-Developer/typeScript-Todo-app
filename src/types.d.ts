interface TodoType {
    id: string | number;
    task: string;
    isDone: boolean;
}

interface ITodoList {
    todos: TodoType[];
    toggleTodo:ToogleFn;
    deleteTodo:deleteFn;
}
type AddFn = (text:string) => void;
type ToogleFn = (item:TodoType) => void;
type deleteFn = (id:sstring | number) => void;