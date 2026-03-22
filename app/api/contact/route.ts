import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend (optional, if API key is provided)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Optional Email Integration
    if (resend) {
      try {
        await resend.emails.send({
          from: 'Nexus Portfolio <onboarding@resend.dev>',
          to: 'madushaniamarasena@gmail.com', // User's email from context
          subject: `New Contact Form Submission from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          replyTo: email,
        });
      } catch (emailError) {
        console.error('Resend Error:', emailError);
        // We don't necessarily want to fail the whole request if email fails
        // but it's good to log it.
      }
    } else {
      console.log('Mock Email Sent:', { name, email, message });
      // Simulate a small delay for the mock
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
