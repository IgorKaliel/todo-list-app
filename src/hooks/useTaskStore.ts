import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Task } from "@/types/task";

interface TaskStore {
    tasks: Task[];
    addTask: (name: string) => void;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
    clearCompleted: () => void;
    editTask: (id: string, newName: string) => void;
}

export const useTaskStore = create<TaskStore>()(
    persist(
        (set) => ({
            tasks: [],

            addTask: (name) =>
                set((state) => ({
                    tasks: [
                        ...state.tasks,
                        {
                            id: crypto.randomUUID(),
                            name,
                            completed: false,
                        },
                    ],
                })),

            toggleTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === id ? { ...task, completed: !task.completed } : task
                    ),
                })),

            deleteTask: (id) =>
                set((state) => ({
                    tasks: state.tasks.filter((task) => task.id !== id),
                })),

            clearCompleted: () =>
                set((state) => ({
                    tasks: state.tasks.filter((task) => !task.completed),
                })),

            editTask: (id, newName) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === id ? { ...task, name: newName } : task
                    ),
                })),
        }),
        {
            name: "todo-storage", // key localStorage
        }
    )
);
