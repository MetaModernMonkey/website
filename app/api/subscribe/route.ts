import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.EMAIL_OCTOPUS_API_KEY;
const LIST_ID = process.env.EMAIL_OCTOPUS_LIST_ID;

// CORS helper
function corsHeaders(origin: string | null) {
  const allowedOrigins = [
    /^https:\/\/([a-z0-9-]+\.)*metamodernmonkey\.com$/,
    /^http:\/\/localhost:\d+$/,
  ];

  const isAllowed = origin && allowedOrigins.some(pattern => pattern.test(origin));

  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : 'https://metamodernmonkey.com',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, {
    status: 200,
    headers: corsHeaders(request.headers.get('origin')),
  });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');

  try {
    if (!API_KEY || !LIST_ID) {
      return NextResponse.json(
        { error: 'Missing EmailOctopus configuration' },
        { status: 500, headers: corsHeaders(origin) }
      );
    }

    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400, headers: corsHeaders(origin) }
      );
    }

    const response = await fetch(
      `https://api.emailoctopus.com/lists/${LIST_ID}/contacts`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      // Handle specific EmailOctopus errors
      if (response.status === 409) {
        return NextResponse.json(
          { error: 'This email is already subscribed' },
          { status: 400, headers: corsHeaders(origin) }
        );
      }
      throw new Error(data.detail || data.title || 'Failed to subscribe');
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200, headers: corsHeaders(origin) }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500, headers: corsHeaders(origin) }
    );
  }
}
