import { NextResponse } from 'next/server';
import { getContent, saveContent } from '@/lib/content';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    
    const data = await getContent();
    
    if (page && data[page]) {
      return NextResponse.json(data[page]);
    }
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    const body = await request.json();
    
    const existingData = await getContent();
    
    if (page) {
      existingData[page] = body;
    } else {
      // Overwrite entirely if no page specified
      Object.assign(existingData, body);
    }
    
    await saveContent(existingData);
    
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}
