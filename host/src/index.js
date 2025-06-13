import { registerRemotes, loadRemote } from '@module-federation/enhanced/runtime';

(async () => {
    // registerRemotes([{ name: 'mfe', entry: 'http://localhost:000/mf-manifest.json' }]);
    // const remoteView = await loadRemote('mfe/app');
    const remoteView = await import('mfe/app');

    console.log(remoteView)
})();