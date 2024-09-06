'use server'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export const fetchBook = async (bookID: string) => {
  const contentURL = `https://www.gutenberg.org/files/${bookID}/${bookID}-0.txt`
  // const metadataURL = `https://www.gutenberg.org/ebooks/${bookID}`
  const metadataURL = `https://gutendex.com/books/${bookID}`

  const contentResponse = await fetch(contentURL)
  const content = await contentResponse.text()

  const metadataResponse = await fetch(metadataURL)
  const metadata = await metadataResponse.json()

  // console.log(content)
  // console.log(metadata)

  return { metadata, content }
}

export const saveBook = async ({
  content,
  metadata,
}: {
  content: string
  metadata: {
    [key: string]: string | number | Array<any> | { [key: string]: string } // TODO: fix type
  }
}) => {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { title, id: book_id, authors } = metadata
  const author = authors[0].name as string

  const { data, error } = await supabase
    .from('books')
    .upsert({
      book_id,
      title,
      author,
      content,
      metadata: JSON.stringify(metadata),
    })
    .select()
}
