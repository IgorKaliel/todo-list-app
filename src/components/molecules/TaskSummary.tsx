interface TaskSummaryProps {
    totalTasks: number;
    completedTasks: number;
}

const TaskSummary: React.FC<TaskSummaryProps> = ({ totalTasks, completedTasks }) => {
    return (
        <div className="flex justify-between items-center mb-4 px-2 text-sm font-semibold text-gray-700">
            <div>
                Tasks created <span className="bg-blue-500 text-white rounded-full px-2 py-0.5 ml-2">{totalTasks}</span>
            </div>
            <div>
                Completed {" "}
                <span className="text-gray-900">
                    {completedTasks} of {totalTasks}
                </span>
            </div>
        </div>
    );
};

export default TaskSummary;
