import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  orderNumber: z.string().min(1, 'Order number is required'),
  email:       z.string().email('Valid email required'),
})

// Mock order data — replace with Supabase/DB query in production
const MOCK_ORDERS: Record<string, { status: number; name: string; tee: string; date: string }> = {
  'IHG-00001': { status: 5, name: 'The Original',      tee: 'Bark Brown',  date: '2025-01-10' },
  'IHG-00142': { status: 2, name: 'The Statement',     tee: 'Rust/Gold',   date: '2025-01-18' },
  'IHG-00099': { status: 4, name: 'The Blank Canvas',  tee: 'Cream',       date: '2025-01-15' },
}

const STATUS_LABELS = [
  '',
  'Order Confirmed',
  'In Production',
  'Dispatched',
  'Out for Delivery',
  'Delivered',
]

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { orderNumber, email } = schema.parse(body)

    await new Promise(r => setTimeout(r, 600))

    const order = MOCK_ORDERS[orderNumber.toUpperCase()]
    if (!order) {
      return NextResponse.json({ success: false, message: 'Order not found. Double-check your number or email us at orders@ihadgafle.co.' }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      order: {
        number:      orderNumber.toUpperCase(),
        tee:         order.name,
        variant:     order.tee,
        date:        order.date,
        statusStep:  order.status,
        statusLabel: STATUS_LABELS[order.status],
      },
    })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: err.flatten().fieldErrors }, { status: 400 })
    }
    return NextResponse.json({ success: false, message: 'Something went wrong.' }, { status: 500 })
  }
}
