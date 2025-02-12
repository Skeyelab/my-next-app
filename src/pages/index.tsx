import localFont from "next/font/local";
import { BubbleChat } from 'flowise-embed-react'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <div
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex items-center justify-center font-[family-name:var(--font-geist-sans)]`}
      >
        <main>
          <h1>welcome</h1>

        </main>
      </div>
      <BubbleChat
        chatflowid="16e60cc4-38e8-43bd-bb4e-6361ebf72d77"
        apiHost="https://flowise.ger.stereorail.com"
      />
    </>
  );
}
