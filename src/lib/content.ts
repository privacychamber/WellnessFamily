import { put, list } from '@vercel/blob';
import fs from 'fs';
import path from 'path';

const LOCAL_JSON_PATH = path.join(process.cwd(), 'src', 'data', 'content.json');

export async function getContent() {
  // If we have BLOB_READ_WRITE_TOKEN, try to fetch the JSON from Vercel Blob
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      const { blobs } = await list({ prefix: 'content.json' });
      if (blobs.length > 0) {
        // Find the one named exactly content.json (just in case there are others starting with content.json)
        const match = blobs.find(b => b.pathname === 'content.json');
        if (match) {
          const response = await fetch(match.url, { cache: 'no-store' });
          if (response.ok) {
            return await response.json();
          }
        }
      }
    } catch (error) {
      console.error('Failed to read content from Vercel Blob, falling back to local file:', error);
    }
  }

  // Fallback to local file system
  try {
    return JSON.parse(fs.readFileSync(LOCAL_JSON_PATH, 'utf-8'));
  } catch (error) {
    console.error('Failed to read local file, returning empty object:', error);
    return {};
  }
}

export async function saveContent(data: any) {
  // If we have BLOB_READ_WRITE_TOKEN, write to Vercel Blob
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    try {
      await put('content.json', JSON.stringify(data, null, 2), {
        access: 'public',
        addRandomSuffix: false,
      });
      return;
    } catch (error) {
      console.error('Failed to write content to Vercel Blob:', error);
      throw error;
    }
  }

  // Fallback to local file system
  try {
    fs.writeFileSync(LOCAL_JSON_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to write to local file:', error);
    throw error;
  }
}
