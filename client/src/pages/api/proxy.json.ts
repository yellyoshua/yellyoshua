import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async ({ url }) => {
  const targetUrl = url.searchParams.get('url');

  if (!targetUrl) {
    return new Response(
      JSON.stringify({ error: 'Missing "url" query parameter' }), 
      { 
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  // Validar que sea una URL válida
  try {
    new URL(targetUrl);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Invalid URL provided' }), 
      { 
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }

  try {
    const response = await fetch(targetUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    return new Response(
      JSON.stringify(data), 
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  } catch (error: any) {
    console.error('Proxy error:', error);

    return new Response(
      JSON.stringify({ 
        error: 'Failed to fetch data through proxy',
        message: error?.message || 'Unknown error'
      }), 
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};
