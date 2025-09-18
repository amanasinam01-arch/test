import { getContent, updateContent, ContentData } from '@/lib/content';
import { isAuthenticated } from '@/lib/auth';
import AdminForm from './admin-form';
import { redirect } from 'next/navigation';

async function updateContentAction(formData: FormData): Promise<{ success: boolean; message: string }> {
  'use server';
  
  try {
    const contentString = formData.get('content') as string;
    const content: ContentData = JSON.parse(contentString);
    
    const result = await updateContent(content);
    
    if (result.success) {
      return { 
        success: true, 
        message: result.message || 'Content updated successfully!' 
      };
    } else {
      return { 
        success: false, 
        message: result.error || 'Update failed' 
      };
    }
  } catch (error) {
    console.error('Update action error:', error);
    return { 
      success: false, 
      message: 'Failed to update content' 
    };
  }
}

export default async function AdminPage() {
  const authenticated = await isAuthenticated();
  
  if (!authenticated) {
    redirect('/admin/login');
  }
  
  const content = await getContent();
  return <AdminForm initialContent={content} updateAction={updateContentAction} />;
}