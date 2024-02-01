import api from "@/api";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableRow,
  TableHeader
} from '@/components/ui/table'
import { cn } from "@/lib/utils";

export default async function MatchesTable() {
    const matches = await api.match.list()
    return (
        <Table>
  <TableHeader>
    <TableRow className="text-white">
      <TableHead className="w-[100px]">Fecha</TableHead>
      <TableHead>Equipo 1</TableHead>
      <TableHead>Equipo 2</TableHead>
      <TableHead>Goles Equipo 1</TableHead>
      <TableHead className="text-right">Goles Equipo 2</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {matches.map(({date, team1, team2, score1, score2}) => (
      <TableRow key={date} className="text-white">
        <TableCell>{date}</TableCell>
        <TableCell className="font-medium">{team1}</TableCell>
        <TableCell>{team2}</TableCell>
        <TableCell className={cn("text-left", {"font-bold text-green-500": score1 > score2})}>{score1}</TableCell>
        <TableCell className={cn("text-right", {"font-bold text-green-500": score2 > score1})}>{score2}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
    )
}