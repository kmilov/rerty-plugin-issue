import { RetryPlugin } from '@module-federation/retry-plugin';

const retryPlugin = () =>
    RetryPlugin({
        fetch: {
            fallback(_url) {
                return 'http://localhost:8082/mf-manifest.json'
            }
        }
    });

export default retryPlugin;