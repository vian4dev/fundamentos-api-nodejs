export function buildRoutePath(path) {
    const routeParamentsRegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParamentsRegex, '(?<$1>[a-z0-9\-_]+)')

    const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

    return pathRegex
}