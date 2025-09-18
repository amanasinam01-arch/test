import { isAuthenticated } from '@/lib/auth';

export async function GET() {
  try {
    const authenticated = await isAuthenticated();
    
    if (authenticated) {
      return Response.json({ success: true, authenticated: true });
    } else {
      return Response.json({ success: false, authenticated: false }, { status: 401 });
    }
  } catch (error) {
    console.error('Auth check error:', error);
    return Response.json({ success: false, authenticated: false }, { status: 500 });
  }
}