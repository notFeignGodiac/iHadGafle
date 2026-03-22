import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

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

    // In production: send via Resend / Nodemailer / Supabase
    // For now we log and confirm receipt
    console.log('[iHadGafle Contact]', data)

    // Simulate slight delay for realism
    await new Promise(r => setTimeout(r, 400))

    return NextResponse.json({
      success: true,
      message: 'Message received. We\'ll be in touch.',
    })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: err.flatten().fieldErrors }, { status: 400 })
    }
    return NextResponse.json({ success: false, message: 'Something went wrong.' }, { status: 500 })
  }
}
