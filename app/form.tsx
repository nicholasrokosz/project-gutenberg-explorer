'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { fetchBook, saveBook } from './actions'
import { useState } from 'react'
import { ObjectPrinter } from '@/components/object-printer'
import { Save } from 'lucide-react'

const formSchema = z.object({
  bookID: z.string().min(2).max(50),
})

export default function BookForm() {
  const [metadata, setMetadata] = useState()
  const [content, setContent] = useState('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  async function onSubmit({ bookID }: z.infer<typeof formSchema>) {
    const { metadata, content } = await fetchBook(bookID)
    setMetadata(metadata)
    setContent(content)
  }

  return (
    <div className="flex gap-4 items-center flex-col">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex gap-2"
        >
          <FormField
            control={form.control}
            name="bookID"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Book ID</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {metadata && (
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={() => saveBook({ content, metadata })}
            >
              <Save className="h-4 w-4" />
            </Button>
            <h2 className="text-4xl font-bold">Metadata:</h2>
          </div>
          <ObjectPrinter data={metadata} />
        </div>
      )}
    </div>
  )
}
