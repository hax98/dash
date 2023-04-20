export default function DettaglioApiData({api}) {
    return (
    <div className="relative pl-10 m-2">
    <dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        <div class="flex flex-col pb-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Descrizione</dt>
            <dd class="text-lg font-semibold">{api.description}</dd>
        </div>
        <div class="flex flex-col py-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Provider</dt>
            <dd class="text-lg font-semibold">{api.provider}</dd>
        </div>
        <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Context</dt>
            <dd class="text-lg font-semibold">{api.context}</dd>
        </div>
        <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Type</dt>
            <dd class="text-lg font-semibold">{api.type}</dd>
        </div>
        <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Version</dt>
            <dd class="text-lg font-semibold">{api.version}</dd>
        </div>
        <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Provider</dt>
            <dd class="text-lg font-semibold">{api.provider}</dd>
        </div>
        <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Production Endpoint</dt>
            <dd class="text-lg font-semibold">{api.endpointConfig.production_endpoints.url}</dd>
        </div>
        <div class="flex flex-col pt-3">
            <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Sandbox Endpoint</dt>
            <dd class="text-lg font-semibold">{api.endpointConfig.sandbox_endpoints.url}</dd>
        </div>
    </dl>
</div>
    );
}