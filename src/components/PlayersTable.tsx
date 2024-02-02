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

export default async function PlayersTable() {
    const players = await api.player.list()
    return (
        <Table className="max-w-md mx-auto border border-gray-500/80">
  <TableHeader>
    <TableRow className="text-white">
      <TableHead className="">Nombre</TableHead>
      <TableHead>Partidos</TableHead>
      <TableHead className="text-right">Valoración</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {players.map(({name, matches, score}) => (
      <TableRow key={name} className="text-white">
        <TableCell>{name}</TableCell>
        <TableCell>{matches}</TableCell>
        <TableCell className={cn("text-right", {"font-bold text-green-500": score > 0})}>{score}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
    )
}