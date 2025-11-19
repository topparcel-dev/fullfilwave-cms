'use strict';

async function resetSeedFlag() {
  const { createStrapi, compileStrapi } = require('@strapi/strapi');

  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'error';

  try {
    const pluginStore = app.store({
      environment: app.config.environment,
      type: 'type',
      name: 'setup',
    });
    
    await pluginStore.delete({ key: 'initHasRun' });
    console.log('✅ Seed flag reset successfully!');
    console.log('You can now run: npm run seed:example');
  } catch (error) {
    console.error('❌ Error resetting seed flag:', error);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

resetSeedFlag().catch((error) => {
  console.error(error);
  process.exit(1);
});

