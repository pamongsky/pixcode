// Simple in-memory rate limiter for development
const requests = new Map<string, { count: number; resetTime: number }>()

const WINDOW_SIZE = 60 * 1000 // 1 minute
const MAX_REQUESTS = 10 // max 10 requests per minute

export function rateLimit(ip: string): boolean {
  const now = Date.now()
  const record = requests.get(ip)

  if (!record || now > record.resetTime) {
    requests.set(ip, { count: 1, resetTime: now + WINDOW_SIZE })
    return true
  }

  if (record.count >= MAX_REQUESTS) {
    return false
  }

  record.count += 1
  return true
}

export function getClientIP(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.headers.get('x-real-ip') || 'unknown'
}
