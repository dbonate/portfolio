# Portfolio Site - Next.js

Um site de portfólio profissional moderno e responsivo construído com Next.js, TypeScript, Tailwind CSS e Framer Motion.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional
- **Totalmente Responsivo**: Funciona perfeitamente em todos os dispositivos
- **Animações Suaves**: Transições e animações com Framer Motion
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Performance**: Otimizado para velocidade e Core Web Vitals
- **Acessibilidade**: Seguindo as melhores práticas de acessibilidade
- **Exportação Estática**: Pronto para hospedar no S3, Vercel, Netlify, etc.

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Animações
- **Lucide React** - Ícones
- **ESLint** - Linting de código

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd portfolio-site
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Abra [http://localhost:3000](http://localhost:3000) no seu navegador**

## 🏗️ Estrutura do Projeto

```
portfolio-site/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── public/
├── package.json
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Personalização

### 1. Informações Pessoais

Edite os seguintes arquivos para personalizar suas informações:

- **Header.tsx**: Nome no cabeçalho
- **Hero.tsx**: Nome, título e descrição principal
- **About.tsx**: Informações pessoais e história
- **Contact.tsx**: Informações de contato
- **Footer.tsx**: Links das redes sociais

### 2. Cores e Tema

As cores podem ser personalizadas no arquivo `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    // ... outras variações
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    // ... outras variações
  }
}
```

### 3. Conteúdo

- **Skills.tsx**: Edite as habilidades e níveis de proficiência
- **Experience.tsx**: Adicione suas experiências profissionais
- **Projects.tsx**: Inclua seus projetos com links e descrições

## 🚀 Deploy

### Para S3 (Recomendado)

1. **Build do projeto**
   ```bash
   npm run build
   ```

2. **Os arquivos estáticos serão gerados na pasta `out/`**

3. **Faça upload dos arquivos para um bucket S3**

4. **Configure o bucket para hospedagem de site estático**

### Para Vercel

1. **Conecte seu repositório ao Vercel**
2. **O deploy será automático**

### Para Netlify

1. **Conecte seu repositório ao Netlify**
2. **Configure o comando de build: `npm run build`**
3. **Configure o diretório de publicação: `out`**

## 📝 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código
- `npm run export` - Exportação estática

## 🔧 Configurações

### Next.js Config

O arquivo `next.config.js` está configurado para exportação estática:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### Tailwind CSS

Configurações personalizadas no `tailwind.config.ts` incluindo:
- Cores personalizadas
- Animações customizadas
- Fontes personalizadas

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO

O site inclui:
- Meta tags otimizadas
- Estrutura semântica HTML
- Open Graph tags
- Schema markup (pode ser adicionado)

## 🔒 Acessibilidade

- Navegação por teclado
- ARIA labels
- Contraste adequado
- Textos alternativos

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Se você tiver alguma dúvida ou precisar de ajuda, entre em contato através do formulário no site ou abra uma issue no repositório.

---

**Desenvolvido com ❤️ usando Next.js** 