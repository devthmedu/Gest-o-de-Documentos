export const metadata = {
  title: 'Meu Site Next.js',
  description: 'Um projeto incrível feito com Next.js',
  authors: [{ name: 'Seu Nome', url: 'https://seusite.com' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0070f3', // Cor do tema (exemplo)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  )
}
