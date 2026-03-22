import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const schema = z.object({
  name:    z.string().min(1, 'Name is required'),
  email:   z.string().email('Valid email required'),
  subject: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)

    await resend.emails.send({
      from:    'iHadGafle Contact <onboarding@resend.dev>',
      to:      'peaceandsons@zohomail.com',
      replyTo: data.email,
      subject: data.subject || `New message from ${data.name}`,
      html: `
        <div style="font-family: monospace; max-width: 600px; padding: 40px; background: #0d0b08; color: #e8e0d0;">
          <h2 style="color: #c9922a; margin-bottom: 8px;">New message from iHadGafle</h2>
          <hr style="border-color: rgba(255,255,255,0.1); margin-bottom: 24px;" />
          <p><strong style="color:#c4b99a;">Name:</strong> ${data.name}</p>
          <p><strong style="color:#c4b99a;">Email:</strong> ${data.email}</p>
          ${data.subject ? `<p><strong style="color:#c4b99a;">Subject:</strong> ${data.subject}</p>` : ''}
          <hr style="border-color: rgba(255,255,255,0.1); margin: 24px 0;" />
          <p><strong style="color:#c4b99a;">Message:</strong></p>
          <p style="line-height: 1.8;">${data.message.replace(/\n/g, '<br/>')}</p>
          <hr style="border-color: rgba(255,255,255,0.1); margin-top: 24px;" />
          <p style="color:#6a6055; font-size: 11px;">iHadGafle · Cape Town · You already had it.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: "Message received. We'll be in touch." })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: err.flatten().fieldErrors }, { status: 400 })
    }
    console.error('[Contact API Error]', err)
    return NextResponse.json({ success: false, message: 'Something went wrong.' }, { status: 500 })
  }
}