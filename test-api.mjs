import fs from 'fs';
import fetch from 'node-fetch';

async function test() {
    try {
        const res = await fetch('http://localhost:3000/api/generate-svg', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: 'Hazelnut Coffii' })
        });
        
        const text = await res.text();
        fs.writeFileSync('out.txt', `Status: ${res.status}\nBody: ${text}`);
    } catch (err) {
        fs.writeFileSync('out.txt', `Error: ${err.message}`);
    }
}

test();
