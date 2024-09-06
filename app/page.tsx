import BookForm from './form'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Home() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: todos } = await supabase.from('books').select()
  console.log(todos)

  return (
    <main>
      <BookForm />
    </main>
  )
}
