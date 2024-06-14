import { CircleOff, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function HomePage() {
  return (
    <>
      <div className="flex flex-row">
        <span className="mt-2 text-2xl font-semibold leading-none tracking-tight grow">
          Departments
        </span>
        <Button>
          <span className="block md:hidden">
            <Plus size={20} />
          </span>
          <span className="hidden md:block">Create department</span>
        </Button>
      </div>
      <div className="text-sm text-muted-foreground max-w-lg text-balance leading-relaxed">
        Description
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center top-1/2 mb-8">
          <CircleOff className="sm:h-6 sm:w-6 md:h-8 md:w-8 mb-5" />
          <h3 className="px-10 sm:text-sm  tracking-tight text-center">
            You have not created any departments. <br />
            Click on the &quot;Create department&quot; button to begin.
          </h3>
        </div>
      </div>
    </>
  );
}
