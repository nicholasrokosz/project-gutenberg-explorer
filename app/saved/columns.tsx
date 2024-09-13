'use client'

import { ColumnDef } from '@tanstack/react-table'

export type BookRow = {
  bookID: string
  title: string
  author: string
}

export const columns: ColumnDef<BookRow>[] = [
  {
    accessorKey: 'bookID',
    header: 'id',
  },
  {
    accessorKey: 'title',
    header: 'title',
  },
  {
    accessorKey: 'author',
    header: 'author',
  },
]
