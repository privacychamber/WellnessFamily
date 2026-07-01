import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'src', 'data', 'content.json');

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(contentPath, 'utf-8'));
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read content' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Optional: read existing data to merge, but we can just overwrite for now since it's a simple structure
    fs.writeFileSync(contentPath, JSON.stringify(body, null, 2), 'utf-8');
    
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update content' }, { status: 500 });
  }
}
