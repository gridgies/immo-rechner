import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') ?? 'Immobilien Rechner';
  const subtitle = searchParams.get('subtitle') ?? 'Kostenlos berechnen';

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(135deg, #f9fafb 0%, #e8f0f2 100%)',
          padding: '60px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            width: '80px',
            height: '6px',
            background: '#7099A3',
            borderRadius: '3px',
            marginBottom: '40px',
          }}
        />

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 50 ? '48px' : '56px',
            fontWeight: '800',
            color: '#111827',
            lineHeight: '1.15',
            maxWidth: '900px',
            marginBottom: '24px',
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '26px',
            color: '#6b7280',
            fontWeight: '400',
            maxWidth: '700px',
          }}
        >
          {subtitle}
        </div>

        {/* Bottom: site brand */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: '#7099A3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                background: 'white',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#111827' }}>
              immo-rechner.net
            </div>
            <div style={{ fontSize: '14px', color: '#6b7280' }}>
              Kostenloser Immobilien Rechner für Deutschland
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
