import Image from 'next/image'
import NotesList from './components/notes-list'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="m-10 text-center">
        <p>Hello World</p>
        <NotesList />
      </div>
    </main>
  )
}
