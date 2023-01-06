'use client';

import { useRouter } from 'next/navigation';

export default function GiveAddress() {
  const router = useRouter();

    return (
      <div>
        <h2>
          this page contains Address Details:
        </h2>
            I live in Sector 8/L orangi town Karachi, Pakistan
          <br />
          <button type="button" onClick={() => router.push('/')}>
          go back to main page
            </button>
            <button type="button" onClick={() => router.push('/name')}>
          go back to name page
            </button>
      </div>
    )
  }