import DeptCard from "@/components/department-card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function HomePage() {
  const HRMembers = ["Shekhar Kalshetti", "Abhishek Mulay"];

  return (
    <>
      <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-4">
        <div className="flex flex-row mb-4">
          <span className="text-xl font-semibold leading-none tracking-tight grow">
            Dashboard
          </span>
        </div>
        <ScrollArea className="h-[625px] md:h-[400px]">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <DeptCard alerts={true} title="HR" members={HRMembers} />
            <DeptCard alerts={true} title="Finance" members={HRMembers} />
            <DeptCard alerts={true} title="Logistics" members={HRMembers} />
          </div>
        </ScrollArea>
      </div>
    </>
  );
}
