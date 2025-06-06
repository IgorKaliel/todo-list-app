import { useTaskStore } from "@/hooks/useTaskStore";
import TaskList from "../organisms/TaskList";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { useState } from "react";

const MainTemplate: React.FC = () => {
    const [newTask, setNewTask] = useState("");
    const { tasks, addTask, clearCompleted, toggleTask, deleteTask, editTask } = useTaskStore();

    const handleAdd = () => {
        if (!newTask.trim()) return;
        addTask(newTask.trim());
        setNewTask("");
    };

    return (
        <main className="relative flex min-h-screen flex-col bg-gray-50 overflow-x-hidden font-manrope">
            <div className="flex h-full flex-grow flex-col layout-container">
                <div className="flex flex-1 justify-center px-40 py-5">
                    <div className="flex max-w-[960px] flex-1 flex-col layout-content-container">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <div className="flex min-w-[18rem] flex-col gap-3">
                                <p className="text-[#101518] text-[32px] font-bold leading-tight tracking-light">To-Do List App</p>
                                <p className="text-[#5c748a] text-sm font-normal leading-normal">Manage your tasks below:</p>
                            </div>
                        </div>

                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-[10rem] flex-1">
                                <Input
                                    placeholder="New Task..."
                                    value={newTask}
                                    onChange={(e) => setNewTask(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl bg-[#eaedf1] border-none p-4 text-base font-normal leading-normal placeholder:text-[#5c748a] text-[#101518] h-14 focus:outline-0 focus:ring-0 focus:border-none"
                                />
                            </label>
                            <Button
                                onClick={handleAdd}
                                className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-200 hover:bg-blue-700"
                            >
                                Add
                            </Button>
                        </div>

                        <div className="px-4">
                            <TaskList
                                tasks={tasks}
                                onToggle={toggleTask}
                                onDelete={deleteTask}
                                onEdit={editTask}
                            />

                            {tasks.length > 0 && (
                                <Button
                                    onClick={clearCompleted}
                                    className="mt-4 font-semibold text-red-600 transition-colors duration-200 hover:text-red-800"
                                >
                                    Remove completed
                                </Button>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </main>

    );
};

export default MainTemplate;
