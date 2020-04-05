type RouteApp = {
    method: 'POST'|'GET'|'PUT'|'DELETE'|'PATCH'|'OPTIONS',
    path: string,
    handler: (...args: any) => void
}

export default RouteApp;