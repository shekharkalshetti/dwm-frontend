import { Calendar, Clock, CreditCard } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DepartmentTaskList } from "@/components/department-task-list";

const DepartmentPage = () => {
  return (
    <>
      <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-4">
        <div className="flex flex-row mb-4">
          <span className="text-2xl font-semibold leading-none tracking-tight">
            HR Department Overview
          </span>
        </div>
        <div className="flex w-full flex-col">
          <main className="flex flex-1 flex-col gap-4 md:gap-8">
            <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
              <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">02</div>
                  <p className="text-xs text-muted-foreground">daily tasks</p>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-01-chunk-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overdue</CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">03</div>
                  <p className="text-xs text-muted-foreground">monthly tasks</p>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-01-chunk-2">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Due today
                  </CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">01</div>
                  <p className="text-xs text-muted-foreground">daily tasks</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
              <Card
                className="xl:col-span-2 h-fit"
                x-chunk="dashboard-01-chunk-4"
              >
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Overdue task/s</TableHead>
                        <TableHead>Due date</TableHead>
                        <TableHead>Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">
                            Contractual Worker Bills Checking
                          </div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            Logistics Department
                          </div>
                        </TableCell>
                        <TableCell>2023-06-23</TableCell>
                        <TableCell>Monthly Task</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">
                            HR Report - Staff + Contractor Costing
                          </div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            HR Department
                          </div>
                        </TableCell>
                        <TableCell>2023-05-23</TableCell>
                        <TableCell>Monthly Task</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">
                            Quality Staff Recruitment
                          </div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            HR Department
                          </div>
                        </TableCell>
                        <TableCell>2023-06-23</TableCell>
                        <TableCell>One Time Task</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className="font-medium">Handing Over JD</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">
                            Finance Department
                          </div>
                        </TableCell>
                        <TableCell>2023-06-11</TableCell>
                        <TableCell>Daily Task</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-01-chunk-5">
                <CardHeader>
                  <CardTitle className="text-lg">Due today</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">
                  <div className="flex items-center gap-4">
                    <div className="grid gap-1">
                      <p className="text-sm font-medium leading-none">
                        PF/ESIC Challans verification & submission
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Administration Department
                      </p>
                    </div>
                    <div className="ml-auto font-medium text-red-500">
                      -02:32
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
      <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm sm:col-span-4">
        <DepartmentTaskList />
      </div>
    </>
  );
};

export default DepartmentPage;
