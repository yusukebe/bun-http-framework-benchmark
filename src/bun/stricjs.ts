import { Router } from '@stricjs/router';

// Prepare headers
const json = { 
    headers: { 'content-type': 'application/json' } 
};
const query = {
    headers: { 'x-powered-by': 'benchmark' }
}

// Create a router and serve using Bun
export default new Router()
    // Handle GET request to `/`
    .get('/', () => new Response('Hi'))
    // Handle POST request to `/json`
    .post('/json', async req => new Response(
        JSON.stringify(await req.json()), json
    ))
    // Return 90 for requests to `/id/90` for instance
    .get('/id/:id', req => new Response(
        req.params.id + ' ' + new URLSearchParams(req.query).get('name'), query
    ))
    // Use the default 404 handler
    .use(404);
