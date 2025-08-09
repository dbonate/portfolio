# 🚀 Guia de Deploy no Amazon S3

Este guia irá ajudá-lo a hospedar seu site de portfólio no Amazon S3 de forma rápida e eficiente.

## 📋 Pré-requisitos

1. **Conta AWS** - Crie uma conta na AWS se ainda não tiver
2. **AWS CLI** - Instale e configure o AWS CLI
3. **Node.js** - Certifique-se de ter o Node.js instalado

## 🛠️ Configuração Inicial

### 1. Instalar Dependências

```bash
cd portfolio-site
npm install
```

### 2. Personalizar o Site

Edite os arquivos para personalizar suas informações:

- `src/components/Header.tsx` - Seu nome
- `src/components/Hero.tsx` - Título e descrição
- `src/components/About.tsx` - Informações pessoais
- `src/components/Contact.tsx` - Informações de contato
- `src/components/Projects.tsx` - Seus projetos

### 3. Testar Localmente

```bash
npm run dev
```

Acesse `http://localhost:3000` para ver o site.

## 🏗️ Deploy no S3

### Passo 1: Criar o Bucket S3

1. Acesse o [Console AWS S3](https://console.aws.amazon.com/s3/)
2. Clique em "Create bucket"
3. Escolha um nome único para o bucket (ex: `meu-portfolio-2024`)
4. Selecione a região mais próxima de você
5. Mantenha as configurações padrão
6. Clique em "Create bucket"

### Passo 2: Configurar Hospedagem Estática

1. Acesse o bucket criado
2. Vá na aba "Properties"
3. Role até "Static website hosting"
4. Clique em "Edit"
5. Selecione "Enable"
6. Configure:
   - **Index document**: `index.html`
   - **Error document**: `404.html`
7. Clique em "Save changes"

### Passo 3: Configurar Permissões

1. Vá na aba "Permissions"
2. Clique em "Edit" em "Block public access"
3. Desmarque todas as opções
4. Clique em "Save changes"
5. Vá em "Bucket policy"
6. Clique em "Edit" e adicione a seguinte política:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::SEU-BUCKET-NAME/*"
        }
    ]
}
```

**⚠️ Importante**: Substitua `SEU-BUCKET-NAME` pelo nome real do seu bucket.

### Passo 4: Build e Upload

1. **Execute o build**:
   ```bash
   npm run build
   ```

2. **Faça upload dos arquivos**:
   ```bash
   # Usando AWS CLI
   aws s3 sync out/ s3://SEU-BUCKET-NAME --delete
   
   # Ou manualmente pelo console AWS
   ```

### Passo 5: Acessar o Site

O site estará disponível em:
```
http://SEU-BUCKET-NAME.s3-website-SUA-REGIAO.amazonaws.com
```

## 🌐 Configurar Domínio Personalizado (Opcional)

### Usando Route 53

1. **Registrar domínio** no Route 53
2. **Criar hosted zone** para seu domínio
3. **Criar registro A** apontando para o bucket
4. **Configurar bucket** para aceitar o domínio

### Usando CloudFront (Recomendado)

1. **Criar distribuição CloudFront**
2. **Origin**: Seu bucket S3
3. **Alternate domain names**: Seu domínio
4. **SSL Certificate**: Solicitar certificado
5. **Configurar DNS** para apontar para CloudFront

## 🔄 Deploy Automatizado

### Usando GitHub Actions

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to S3

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build project
      run: npm run build
      
    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-east-1
        
    - name: Deploy to S3
      run: aws s3 sync out/ s3://SEU-BUCKET-NAME --delete
```

### Configurar Secrets no GitHub

1. Vá em Settings > Secrets and variables > Actions
2. Adicione:
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`

## 📊 Monitoramento

### CloudWatch

1. **Configurar logs** do CloudFront
2. **Criar dashboards** para métricas
3. **Configurar alertas** para erros

### Google Analytics

1. **Adicionar código** do Google Analytics
2. **Configurar eventos** personalizados
3. **Monitorar performance**

## 🔧 Otimizações

### Performance

1. **Compressão Gzip** no CloudFront
2. **Cache headers** adequados
3. **Minificação** de CSS/JS
4. **Otimização de imagens**

### SEO

1. **Sitemap.xml** automático
2. **robots.txt** configurado
3. **Meta tags** otimizadas
4. **Schema markup**

## 🚨 Troubleshooting

### Problemas Comuns

1. **Site não carrega**:
   - Verificar permissões do bucket
   - Confirmar configuração de hospedagem estática

2. **CSS não carrega**:
   - Verificar caminhos relativos
   - Confirmar upload de todos os arquivos

3. **Erro 403**:
   - Verificar bucket policy
   - Confirmar configuração de CORS

4. **Erro 404**:
   - Verificar arquivo index.html
   - Confirmar configuração de error document

## 📞 Suporte

Se encontrar problemas:

1. **Verifique os logs** do CloudFront
2. **Teste localmente** primeiro
3. **Consulte a documentação** da AWS
4. **Abra uma issue** no repositório

---

**🎉 Parabéns! Seu site está no ar!** 