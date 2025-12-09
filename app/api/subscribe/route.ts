import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.EMAIL_OCTOPUS_API_KEY;
const LIST_ID = process.env.EMAIL_OCTOPUS_LIST_ID;

export async function POST(request: NextRequest) {
  try {
    if (!API_KEY || !LIST_ID) {
      return NextResponse.json(
        { error: 'Missing EmailOctopus configuration' },
        { status: 500 }
      );
    }

    const { email } = await request.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
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
          { status: 400 }
        );
      }
      throw new Error(data.detail || data.title || 'Failed to subscribe');
    }

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
