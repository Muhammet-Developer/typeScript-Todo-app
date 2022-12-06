import React from 'react';
interface IListItem {
  item:TodoType;
  toggleTodo: ToogleFn;
  deleteTodo:deleteFn;
}

const TodoListItem:React.FC<IListItem> = ({item,toggleTodo,deleteTodo}) => {
  return (
    <li >
     {item.isDone ? <p onClick={()=>toggleTodo(item)} className='checked' >{item.task}</p>
      : <p onClick={()=>toggleTodo(item)}>{item.task} </p>}
      <span className="task-icons" onClick={()=> deleteTodo(item.id)}>✖️</span>
    </li>
  );
};

export default TodoListItem