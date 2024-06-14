import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "./ui/badge";

const DailyTasks = () => {
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Task name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Category</TableHead>
              <TableHead className="">Attachments</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="h-2">
              <TableCell className="font-medium">Staff Attendance</TableCell>
              <TableCell>
                <Badge variant="success">Completed</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">Attendance</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow className="h-2">
              <TableCell className="font-medium">
                Contractors Attendance
              </TableCell>
              <TableCell>
                <Badge variant="success">Completed</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">Attendance</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow className="h-2">
              <TableCell className="font-medium">
                Daily Manpower Cost Report
              </TableCell>
              <TableCell>
                <Badge variant="success">Completed</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">Reports</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>View</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
            <TableRow className="h-2">
              <TableCell className="font-medium">
                Introduction & Training
              </TableCell>
              <TableCell>
                <Badge variant="destructive">Overdue</Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                New Joining Formalities
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem disabled>N/A</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          </TableBody>
          {/* </div>
                    </ScrollArea> */}
        </Table>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong> products
        </div>
      </CardFooter>
    </Card>
  );
};

export default DailyTasks;
