import Link from 'next/link';
export default function Home() {
  return (
          <div>  
            <h1>This Is next js App with typescript</h1> 
            <p>
              developed by :
            </p>
            Hey There ! This is web page generated at HP PROBOOK From PIAIC STUDENT 171908
            <br/>
            <Link href="/name">Navigate to name page</Link>
           </div>
  )
}

