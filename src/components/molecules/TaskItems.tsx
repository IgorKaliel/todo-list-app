import { useState } from "react";
import type { Task } from "@/types/task";
import Checkbox from "../atoms/Checkbox";
import Button from "../atoms/Button";
import { Trash2, PenLine } from "lucide-react";

interface TaskItemProps {
    task: Task;
    onToggle: () => void;
    onDelete: () => void;
    onEdit: (newName: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isRemoving, setIsRemoving] = useState(false);

    const handleDelete = () => {
        setIsRemoving(true);
        setTimeout(() => {
            onDelete();
        }, 300);
    };

    return (
        <div
            className={`flex items-center gap-4 bg-white shadow-sm rounded-md px-4 min-h-[72px] py-2 justify-between
        transition-opacity duration-300 ${isRemoving ? "opacity-0" : "opacity-100"}`}
        >
            <div className="flex items-center gap-4 flex-grow min-w-0">
                <Checkbox checked={task.completed} onChange={onToggle} />
                {isEditing ? (
                    <input
                        className={`bg-transparent border-b border-blue-500 outline-none flex-grow text-lg ${task.completed ? "line-through text-gray-400" : "text-gray-900"
                            }`}
                        value={task.name}
                        onChange={(e) => onEdit(e.target.value)}
                        onBlur={() => setIsEditing(false)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === "Escape") setIsEditing(false);
                        }}
                        autoFocus
                    />
                ) : (
                    <span
                        className={`cursor-pointer truncate text-lg ${task.completed ? "line-through text-gray-400" : "text-gray-900"
                            }`}
                        onClick={() => setIsEditing(true)}
                        title="Clique para editar"
                    >
                        {task.name}
                    </span>
                )}
            </div>

            <div className="flex items-center gap-3">
                {!isEditing && (
                    <Button
                        onClick={() => setIsEditing(true)}
                        aria-label="Editar tarefa"
                        className="text-blue-600 hover:text-blue-800 p-2 rounded-md transition-colors duration-200"
                    >
                        <PenLine size={18} />
                    </Button>
                )}
                <Button
                    onClick={handleDelete}
                    aria-label="Excluir tarefa"
                    className="text-red-600 hover:text-red-800 p-2 rounded-md transition-colors duration-200"
                >
                    <Trash2 size={18} />
                </Button>
            </div>
        </div>
    );
};

export default TaskItem;
