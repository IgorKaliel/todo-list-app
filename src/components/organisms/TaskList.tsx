import TaskSummary from "../molecules/TaskSummary";
import TaskItem from "../molecules/TaskItems";
import type { Task } from "@/types/task";

interface TaskListProps {
    tasks: Task[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newName: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete, onEdit }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.completed).length;

    return (
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <TaskSummary totalTasks={totalTasks} completedTasks={completedTasks} />

            {totalTasks === 0 ? (
                <div className="text-center mt-12 text-gray-500 flex flex-col items-center gap-4">
                    <svg
                        className="w-12 h-12 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 17v-6a2 2 0 114 0v6"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h14"
                        />
                    </svg>
                    Here you could create your tasks!
                </div>
            ) : (
                <ul className="space-y-3">
                    {tasks.map((task) => (
                        <TaskItem
                            key={task.id}
                            task={task}
                            onToggle={() => onToggle(task.id)}
                            onDelete={() => onDelete(task.id)}
                            onEdit={(newName) => onEdit(task.id, newName)}
                        />
                    ))}
                </ul>
            )}
        </div>
    );

};

export default TaskList;
