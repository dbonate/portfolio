# 🎨 Guia de Personalização

Este guia irá ajudá-lo a personalizar seu site de portfólio com suas informações e estilo.

## 📝 Informações Pessoais

### 1. Nome e Título

**Arquivo**: `src/components/Header.tsx`
```typescript
// Linha 18
<div className="text-xl font-bold text-primary-600">
  Seu Nome  // ← Altere aqui
</div>
```

**Arquivo**: `src/components/Hero.tsx`
```typescript
// Linha 25
<span className="text-primary-600">Seu Nome</span>  // ← Altere aqui

// Linha 32
Desenvolvedor Full Stack  // ← Altere aqui
```

### 2. Descrição Principal

**Arquivo**: `src/components/Hero.tsx`
```typescript
// Linha 37-40
Apaixonado por criar soluções inovadoras e experiências digitais excepcionais. 
Especializado em desenvolvimento web moderno e tecnologias emergentes.
// ← Personalize esta descrição
```

### 3. Informações de Contato

**Arquivo**: `src/components/Contact.tsx`
```typescript
// Linha 25-35
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'seu.email@exemplo.com',  // ← Altere aqui
    link: 'mailto:seu.email@exemplo.com'  // ← Altere aqui
  },
  {
    icon: Phone,
    title: 'Telefone',
    value: '+55 (11) 99999-9999',  // ← Altere aqui
    link: 'tel:+5511999999999'  // ← Altere aqui
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'São Paulo, SP - Brasil',  // ← Altere aqui
    link: '#'
  }
]
```

### 4. Redes Sociais

**Arquivo**: `src/components/Contact.tsx`
```typescript
// Linha 40-55
const socialLinks = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/seu-perfil',  // ← Altere aqui
    color: 'hover:text-blue-600'
  },
  {
    icon: Github,
    name: 'GitHub',
    url: 'https://github.com/seu-usuario',  // ← Altere aqui
    color: 'hover:text-gray-800'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    url: 'https://twitter.com/seu-usuario',  // ← Altere aqui
    color: 'hover:text-blue-400'
  }
]
```

## 🎯 Habilidades

**Arquivo**: `src/components/Skills.tsx`

Edite as categorias e níveis de proficiência:

```typescript
const skillCategories = [
  {
    icon: Code,
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },      // ← Ajuste o nível (0-100)
      { name: 'TypeScript', level: 85 }, // ← Ajuste o nível (0-100)
      // Adicione ou remova habilidades
    ]
  },
  // Adicione ou remova categorias
]
```

## 💼 Experiência Profissional

**Arquivo**: `src/components/Experience.tsx`

Edite suas experiências:

```typescript
const experiences = [
  {
    company: 'Empresa Atual',           // ← Altere aqui
    position: 'Desenvolvedor Full Stack Senior',  // ← Altere aqui
    period: '2022 - Presente',          // ← Altere aqui
    location: 'São Paulo, SP',          // ← Altere aqui
    description: 'Descrição da sua experiência...',  // ← Altere aqui
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'],  // ← Altere aqui
    link: '#'  // ← Link para o site da empresa
  },
  // Adicione mais experiências
]
```

## 🚀 Projetos

**Arquivo**: `src/components/Projects.tsx`

Edite seus projetos:

```typescript
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',        // ← Altere aqui
    description: 'Descrição do projeto...',  // ← Altere aqui
    image: '/api/placeholder/400/250',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],  // ← Altere aqui
    liveUrl: '#',  // ← Link para demo
    githubUrl: '#',  // ← Link para código
    featured: true  // ← Projeto em destaque
  },
  // Adicione mais projetos
]
```

## 🎨 Cores e Tema

**Arquivo**: `tailwind.config.ts`

Personalize as cores do tema:

```typescript
colors: {
  primary: {
    50: '#eff6ff',   // ← Cor primária mais clara
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',  // ← Cor primária principal
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',  // ← Cor primária mais escura
  },
  secondary: {
    // Cores secundárias
  }
}
```

## 📸 Imagens

### Foto de Perfil

1. **Adicione sua foto** na pasta `public/`
2. **Edite o componente Hero**:

```typescript
// Em src/components/Hero.tsx
// Substitua o placeholder por sua imagem
<div className="absolute inset-12 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full flex items-center justify-center">
  <img 
    src="/sua-foto.jpg" 
    alt="Seu Nome" 
    className="w-full h-full object-cover rounded-full"
  />
</div>
```

### Imagens dos Projetos

1. **Adicione screenshots** dos seus projetos
2. **Edite o componente Projects**:

```typescript
// Em src/components/Projects.tsx
// Substitua o placeholder por suas imagens
<div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200">
  <img 
    src="/projeto-1.jpg" 
    alt="Nome do Projeto" 
    className="w-full h-full object-cover"
  />
</div>
```

## 🔧 Configurações Avançadas

### Meta Tags

**Arquivo**: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Portfólio Profissional',  // ← Altere aqui
  description: 'Site de apresentação profissional e portfólio de projetos',  // ← Altere aqui
  keywords: 'portfólio, desenvolvedor, tecnologia, projetos',  // ← Altere aqui
  authors: [{ name: 'Seu Nome' }],  // ← Altere aqui
  viewport: 'width=device-width, initial-scale=1',
}
```

### Animações

**Arquivo**: `tailwind.config.ts`

Personalize as animações:

```typescript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'bounce-slow': 'bounce 2s infinite',
  // Adicione suas animações
},
keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  // Adicione seus keyframes
}
```

## 📱 Responsividade

O site já é responsivo, mas você pode ajustar:

- **Breakpoints**: Definidos no Tailwind CSS
- **Layout**: Componentes se adaptam automaticamente
- **Navegação**: Menu mobile automático

## 🚀 Deploy

Após personalizar:

1. **Teste localmente**:
   ```bash
   npm run dev
   ```

2. **Build para produção**:
   ```bash
   npm run build
   ```

3. **Deploy no S3**:
   ```bash
   npm run deploy-s3
   ```

## 💡 Dicas

1. **Mantenha consistência** nas cores e tipografia
2. **Use imagens otimizadas** para melhor performance
3. **Teste em diferentes dispositivos** antes do deploy
4. **Mantenha o conteúdo atualizado** regularmente
5. **Adicione analytics** para acompanhar visitantes

## 🆘 Suporte

Se precisar de ajuda:

1. **Consulte a documentação** do Next.js e Tailwind CSS
2. **Verifique os logs** de erro no console
3. **Teste componentes** individualmente
4. **Use o modo de desenvolvimento** para debug

---

**🎨 Agora é só personalizar e deixar seu toque único!** 