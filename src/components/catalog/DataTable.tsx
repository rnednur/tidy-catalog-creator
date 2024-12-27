import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface Column {
  name: string;
  description: string;
  dataType: string;
}

const columns: Column[] = [
  { name: "L", description: "Total losses recorded by the goaltender.", dataType: "FLOAT" },
  { name: "W", description: "Total wins recorded by the goaltender.", dataType: "FLOAT" },
  { name: "GA", description: "Goals against the goaltender during the season.", dataType: "FLOAT" },
  { name: "GP", description: "Games played by the goaltender during the season.", dataType: "FLOAT" },
  { name: "SA", description: "Shots against the goaltender during the season.", dataType: "FLOAT" },
];

export const DataTable = () => {
  return (
    <div className="rounded-md border animate-fade-up">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">
              <input type="checkbox" className="rounded border-input" />
            </TableHead>
            <TableHead>Column</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Data Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {columns.map((column) => (
            <TableRow key={column.name} className="group">
              <TableCell className="w-12">
                <input type="checkbox" className="rounded border-input" />
              </TableCell>
              <TableCell className="font-medium">{column.name}</TableCell>
              <TableCell>{column.description}</TableCell>
              <TableCell className="text-right">
                <span className="px-2 py-1 text-xs rounded-full bg-accent">
                  {column.dataType}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};