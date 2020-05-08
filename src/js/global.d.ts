declare var Ziggy: Ziggy

interface Route {
    uri: string
    methods: ('GET' | 'HEAD' | 'POST' | 'DELETE')[]
    domain: null | string
}

interface Ziggy {
    namedRoutes: {
        [key: string]: Route
    }
    baseUrl: string
    baseProtocol: 'http' | 'https'
    baseDomain: string
    basePort: boolean
    defaultParameters: string[]
}
