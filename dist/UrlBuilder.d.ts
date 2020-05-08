declare class UrlBuilder {
    name: string;
    ziggy: Ziggy;
    route: Route;
    absolute?: boolean;
    domain: string;
    path: string;
    constructor(name: any, absolute: any, ziggyObject: any);
    setDomain(): string;
    construct(): string;
}
export default UrlBuilder;
