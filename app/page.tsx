import Link from "next/dist/client/link";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Faeris</h1>
      <p>Faeris is a ZZZ Disk Drive Scoring Tool to help you optimize your builds. To obtain your agent data, please download our extension so that we can score ALL of your agents.</p>
      <Link href="/scorer">Go to Scorer (testing)</Link>
    </main>
  )
}