import Task from './Task'

const Tasksall = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((task, index) => (
                <Task 
                key={index} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}
                />
            ))}
        </>
    )
}

export default Tasksall
