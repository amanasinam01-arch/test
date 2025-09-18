import { NextRequest } from 'next/server';
import { verifyPassword, generateAuthToken, setAuthCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    if (!password) {
      return Response.json({ success: false, message: 'Password is required' }, { status: 400 });
    }

    const isValid = await verifyPassword(password);
    
    if (isValid) {
      const token = generateAuthToken();
      const response = Response.json({ success: true, message: 'Login successful' });
      
      await setAuthCookie(token);
      return response;
    } else {
      return Response.json({ success: false, message: 'Invalid password' }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return Response.json({ success: false, message: 'Login failed' }, { status: 500 });
  }
}