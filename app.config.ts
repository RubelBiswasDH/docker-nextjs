export const NEXT_PUBLIC_KEY = process.env.NEXT_PUBLIC_KEY || 'no-keys'
export const NEXT_PUBLIC_VAR = process.env.NEXT_PUBLIC_VAR || 'NEXT_PUBLIC_VAR not found'
export const KEYS = {
    GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || ''
}
console.log('key: ', NEXT_PUBLIC_KEY)