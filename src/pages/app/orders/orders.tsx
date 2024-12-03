import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input
            placeholder="Nome do cliente"
            type="text"
            className="h-8 w-[320px]"
          />
        </form>
        <div className="ronded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[140px]">Total dd pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            {Array.from({ length: 10 }).map((_, i) => {
              return (
                <TableBody key={i}>
                  <TableRow>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <Search className="h-3 w-3" />
                        <label className="sr-only">Detalhes do pedido</label>
                      </Button>
                    </TableCell>
                    <TableCell className="font-mono text-xs font-medium">
                      21rfewfjklwe48wedfqty
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      há 20 minutos
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                        <span className="font-medium text-muted-foreground">
                          Pendente
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">
                      João Manuel Kicunga
                    </TableCell>
                    <TableCell className="font-medium">250.000.00kz</TableCell>
                    <TableCell>
                      <Button variant="outline" size="xs">
                        <ArrowRight className="mr-2 h-2 w-3" />
                        Aprovar
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="xs">
                        <X className="mr-2 h-2 w-3" />
                        Cancelar
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              )
            })}
          </Table>
        </div>
      </div>
    </>
  )
}
