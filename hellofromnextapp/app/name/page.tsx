'use client';

import { useRouter } from 'next/navigation';
export default function GiveName() {
  const router = useRouter();
    return (
      <div>
        <h2>
          This page contains author name
        </h2>
            My name is AHMED ALI ANSARI
            <br/>
            <button type="button" onClick={() => router.push('/name/address')}>
              Get Address from address page
            </button>
            <button type="button" onClick={() => router.push('/')}>
              go back to main page
            </button>
      </div>
    )
  }