import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'src', 'data', 'content.json');

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = searchParams.get('page');
    
    const data = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
    
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
    
    const existingData = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
    
    if (page) {
      existingData[page] = body;
    } else {
      // Overwrite entirely if no page specified
      Object.assign(existingData, body);
    }
    
    fs.writeFileSync(contentPath, JSON.stringify(existingData, null, 2), 'utf-8');
    
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}
