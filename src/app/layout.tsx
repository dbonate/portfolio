import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfólio Profissional',
  description: 'Site de apresentação profissional e portfólio de projetos',
  keywords: 'portfólio, desenvolvedor, tecnologia, projetos',
  authors: [{ name: 'Seu Nome' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-secondary-900">
        {children}
      </body>
    </html>
  )
} 