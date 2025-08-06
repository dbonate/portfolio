const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando deploy para S3...');

try {
  // 1. Build do projeto
  console.log('📦 Fazendo build do projeto...');
  execSync('npm run build', { stdio: 'inherit' });

  // 2. Verificar se a pasta out foi criada
  const outDir = path.join(__dirname, 'out');
  if (!fs.existsSync(outDir)) {
    throw new Error('Pasta out não foi criada. Verifique se o build foi executado corretamente.');
  }

  console.log('✅ Build concluído com sucesso!');
  console.log('📁 Arquivos estáticos gerados na pasta out/');
  console.log('');
  console.log('📋 Próximos passos para deploy no S3:');
  console.log('');
  console.log('1. Crie um bucket S3 para hospedar o site');
  console.log('2. Configure o bucket para hospedagem de site estático:');
  console.log('   - Vá em Properties > Static website hosting');
  console.log('   - Enable static website hosting');
  console.log('   - Index document: index.html');
  console.log('   - Error document: 404.html');
  console.log('');
  console.log('3. Faça upload dos arquivos da pasta out/ para o bucket');
  console.log('');
  console.log('4. Configure as permissões do bucket:');
  console.log('   - Vá em Permissions > Bucket policy');
  console.log('   - Adicione uma política que permita acesso público de leitura');
  console.log('');
  console.log('5. Configure um domínio personalizado (opcional):');
  console.log('   - Use Route 53 para configurar DNS');
  console.log('   - Configure CloudFront para CDN (recomendado)');
  console.log('');
  console.log('🔗 URL do site será: http://[nome-do-bucket].s3-website-[região].amazonaws.com');
  console.log('');
  console.log('💡 Dica: Use o AWS CLI para automatizar o upload:');
  console.log('   aws s3 sync out/ s3://[nome-do-bucket] --delete');

} catch (error) {
  console.error('❌ Erro durante o build:', error.message);
  process.exit(1);
} 