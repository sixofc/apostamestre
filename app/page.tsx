import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-10 bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6">🏆 ApostaMestre</h1>
      <p className="mb-4 text-xl">Escolha uma liga para ver os jogos:</p>
      <ul className="space-y-2">
        <li><Link href="/ligas/71">🇧🇷 Brasileirão Série A</Link></li>
        <li><Link href="/ligas/140">🇪🇸 La Liga</Link></li>
        <li><Link href="/ligas/135">🇮🇹 Serie A</Link></li>
      </ul>
    </main>
  )
}
