'use strict';

async function checkUploads() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  try {
    // Получаем все загруженные файлы
    const files = await app.query('plugin::upload.file').findMany({
      limit: 10,
      sort: { createdAt: 'DESC' },
    });

    console.log(`\n📁 Найдено файлов: ${files.length}\n`);
    
    files.forEach((file, index) => {
      console.log(`${index + 1}. ${file.name}`);
      console.log(`   URL: ${file.url}`);
      console.log(`   Provider: ${file.provider}`);
      console.log(`   MIME: ${file.mime}`);
      console.log(`   Size: ${(file.size / 1024).toFixed(2)} KB`);
      console.log(`   Created: ${new Date(file.createdAt).toLocaleString()}`);
      console.log('');
    });

    // Проверяем, что провайдер правильный
    const s3Files = files.filter(f => f.provider === 'aws-s3');
    console.log(`✅ Файлов с провайдером 'aws-s3': ${s3Files.length} из ${files.length}`);
    
    if (s3Files.length === files.length) {
      console.log('✅ Все файлы используют S3/MinIO провайдер!');
    } else {
      console.log('⚠️  Некоторые файлы не используют S3 провайдер');
    }

  } catch (error) {
    console.error('❌ Ошибка при проверке файлов:', error);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

checkUploads().catch((error) => {
  console.error(error);
  process.exit(1);
});

