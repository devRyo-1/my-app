import * as React from 'react';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Hello Next.js + MUI</h1>
      <Button variant="contained" color="primary">
        MUI Button
      </Button>
    </div>
  );
}