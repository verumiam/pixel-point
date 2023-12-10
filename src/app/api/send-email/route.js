export async function POST(request, response) {
  try {
    const email = await request.json();

    return new Response(`Email was send, ${email}`);
  } catch {
    return response.json({ error: 'Server not working' }, { status: 405 });
  }
}
