console.log('Module.js');

async function start() {
    await Promise.resolve( () => {
        console.log('Start - OK')
    });
}

start();