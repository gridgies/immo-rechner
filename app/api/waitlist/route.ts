import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, region, budget } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'E-Mail-Adresse ist erforderlich.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Ungültige E-Mail-Adresse.' }, { status: 400 });
    }

    const supabase = await createClient();

    const { error } = await supabase
      .from('deal_agent_waitlist')
      .insert({
        email: email.toLowerCase().trim(),
        investitionsregion: region?.trim() || null,
        budget: budget?.trim() || null,
      });

    if (error) {
      // Unique constraint violation – email already registered
      if (error.code === '23505') {
        return NextResponse.json({ code: 'already_registered' }, { status: 200 });
      }
      console.error('Waitlist insert error:', error);
      return NextResponse.json({ error: 'Speichern fehlgeschlagen. Bitte versuche es erneut.' }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (err) {
    console.error('Waitlist route error:', err);
    return NextResponse.json({ error: 'Interner Fehler.' }, { status: 500 });
  }
}
