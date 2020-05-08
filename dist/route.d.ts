import UrlBuilder from './UrlBuilder';
declare class Router extends String {
    name: string;
    absolute?: boolean;
    ziggy: Ziggy;
    urlBuilder: UrlBuilder;
    template: string;
    urlParams: any;
    queryParams: {};
    hydrated: string;
    numericParamIndices: boolean;
    return: string;
    constructor(name: any, params: any, absolute: any, customZiggy?: any);
    normalizeParams(params: any): any;
    with(params: any): this;
    withQuery(params: any): this;
    hydrateUrl(): string;
    matchUrl(): boolean;
    constructQuery(): string;
    current(name?: string): any;
    check(name: any): boolean;
    extractParams(uri: any, template: any, delimiter: any): any;
    get params(): any;
    parse(): void;
    url(): string;
    toString(): string;
    trimParam(param: any): any;
    valueOf(): string;
}
export default function route(name: any, params: any, absolute: any, customZiggy: any): Router;
export {};
