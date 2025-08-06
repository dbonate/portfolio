# 🔧 Configuração de Variáveis de Ambiente

## 📝 Como Usar

### 1. Crie o arquivo `.env.local` na raiz do projeto:

```bash
# Na pasta Projects/portfolio-site/
touch .env.local
```

### 2. Adicione suas informações no arquivo `.env.local`:

```env
# Informações Pessoais
NEXT_PUBLIC_NAME=Denis Bonate
NEXT_PUBLIC_TITLE=Plataform Engineer && Cloud Architect
NEXT_PUBLIC_DESCRIPTION=Apaixonado por criar soluções inovadoras e experiências digitais excepcionais. Especializado em entrega de produto por paltaforma e arquitetura cloud  tecnologias emergentes.

# Informações de Contato
NEXT_PUBLIC_EMAIL=denis.bonate@exemplo.com
NEXT_PUBLIC_PHONE=+55 (11) 99999-9999
NEXT_PUBLIC_LOCATION=São Paulo, SP - Brasil

# Redes Sociais
NEXT_PUBLIC_LINKEDIN=https://linkedin.com/in/denis-bonate
NEXT_PUBLIC_GITHUB=https://github.com/denis-bonate
NEXT_PUBLIC_TWITTER=https://twitter.com/denis-bonate

# Informações Pessoais Detalhadas
NEXT_PUBLIC_AGE=30 anos
NEXT_PUBLIC_EDUCATION=Ciência da Computação
NEXT_PUBLIC_CITY=São Paulo, SP
```

### 3. Reinicie o servidor de desenvolvimento:

```bash
# Pare o servidor (Ctrl+C)
# Depois execute:
npm run dev
```

## 🎯 Variáveis Disponíveis

| Variável | Descrição | Exemplo |
|----------|-----------|---------|
| `NEXT_PUBLIC_NAME` | Seu nome completo | Denis Bonate |
| `NEXT_PUBLIC_TITLE` | Seu cargo/título | Desenvolvedor Full Stack |
| `NEXT_PUBLIC_DESCRIPTION` | Descrição sobre você | Apaixonado por tecnologia... |
| `NEXT_PUBLIC_EMAIL` | Seu email | denis@exemplo.com |
| `NEXT_PUBLIC_PHONE` | Seu telefone | +55 (11) 99999-9999 |
| `NEXT_PUBLIC_LOCATION` | Sua localização | São Paulo, SP |
| `NEXT_PUBLIC_LINKEDIN` | Link do LinkedIn | https://linkedin.com/in/seu-perfil |
| `NEXT_PUBLIC_GITHUB` | Link do GitHub | https://github.com/seu-usuario |
| `NEXT_PUBLIC_TWITTER` | Link do Twitter | https://twitter.com/seu-usuario |
| `NEXT_PUBLIC_AGE` | Sua idade | 30 anos |
| `NEXT_PUBLIC_EDUCATION` | Sua formação | Ciência da Computação |
| `NEXT_PUBLIC_CITY` | Sua cidade | São Paulo, SP |

## 🔒 Segurança

- O arquivo `.env.local` está no `.gitignore`
- Apenas variáveis com `NEXT_PUBLIC_` são visíveis no cliente
- Nunca commite informações sensíveis

## 🚀 Deploy

Para deploy no S3, crie um arquivo `.env.production`:

```env
NEXT_PUBLIC_NAME=Denis Silva
NEXT_PUBLIC_TITLE=Desenvolvedor Full Stack
# ... outras variáveis
```

## 💡 Dicas

1. **Sempre reinicie o servidor** após alterar as variáveis
2. **Use valores padrão** para evitar erros
3. **Teste localmente** antes do deploy
4. **Mantenha backup** das suas configurações

## ✅ Teste

Após configurar, você deve ver:
- Seu nome no header e hero
- Seu cargo no título
- Suas informações de contato
- Seus links de redes sociais 