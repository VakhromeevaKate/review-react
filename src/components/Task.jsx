const Task = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <> {/*
        Нужно исправить: избыточная обертка фрагментом - article уже включает в себя дочерние компоненты.
        Советую обратиться к документации для изучения примеров использования фрагментов:
        https://ru.reactjs.org/docs/fragments.html
    */}
      <article className="todolist-item">
        <span className="todolist-item__text">{task.content}</span>
        <button className="todolist-item__del" onClick={handleDelete}></button>
      </article>
    </>
  );
};

export default Task;
