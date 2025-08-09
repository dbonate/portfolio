import type { Metadata, Viewport } from 'next' // 1. Adicionado 'Viewport'
import './globals.css'

// 2. Metadados agora usam suas variáveis de ambiente!
export const metadata: Metadata = {
  title: `Portfólio de ${process.env.NEXT_PUBLIC_NAME_COMPLETO || 'Desenvolvedor'}`,
  description: process.env.NEXT_PUBLIC_DESCRIPTION || 'Site de apresentação profissional e portfólio de projetos',
  keywords: 'portfólio, desenvolvedor, devops, platform engineer, sre, cloud, aws, gcp',
  authors: [{ name: process.env.NEXT_PUBLIC_NAME_COMPLETO || 'Seu Nome' }],
  // A linha 'viewport' foi REMOVIDA daqui
}

// 3. Objeto 'viewport' adicionado separadamente
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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