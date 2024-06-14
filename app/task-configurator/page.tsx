import { DepartmentTaskList } from "@/components/department-task-list";
import { TaskList } from "@/components/task-list";

export default async function TaskConfiguratorPage() {
  return (
    <>
      <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-4">
        <div className="flex flex-row mb-2">
          <span className="text-2xl font-semibold leading-none tracking-tight grow">
            HR Department
          </span>
        </div>
        <TaskList />
      </div>
    </>
  );
}
