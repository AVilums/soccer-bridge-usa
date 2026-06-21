export async function onRequestPost(context) {
  try {
    const data = await context.request.json();
    const { type, email, ...fields } = data;

    // Format the message body
    const fieldSummary = Object.entries(fields)
      .map(([key, value]) => `<b>${key}:</b> ${value}`)
      .join('<br>');

    // Send via Resend (Get a free API key at resend.com)
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Soccer Bridge USA <onboarding@resend.dev>',
        to: 'soccerbridgeusa@gmail.com',
        subject: `New Lead: ${type}`,
        html: `<p>You received a new ${type.toLowerCase()} from <b>${email}</b>:</p>${fieldSummary}`,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      return new Response(error, { status: 400 });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
