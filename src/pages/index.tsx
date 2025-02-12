import localFont from "next/font/local";
import dynamic from 'next/dynamic';

const BubbleChat = dynamic(
  () => import('flowise-embed-react').then((mod) => mod.BubbleChat),
  { ssr: false }
);

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
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex items-center justify-center font-[family-name:var(--font-geist-sans)]`}
    >
      <main>
        <h1>welcome</h1>
      </main>
      <BubbleChat
        chatflowid="16e60cc4-38e8-43bd-bb4e-6361ebf72d77"
        apiHost="https://flowise.ericdahl.dev"
        theme={{
          backgroundColor: "#000000",
          textColor: "#ffffff",
          buttonColor: "#000000",
          buttonTextColor: "#ffffff",
          chatWindow: {
            showTitle: true,
            showAgentMessages: true,
            title: 'Hesburgh Library Chatbot',
            welcomeMessage: 'Hi. My name is Ted. How can I help you today?',
            errorMessage: 'This is a custom error message',
            backgroundColor: '#ffffff',
            backgroundImage: 'enter image path or link',
            height: 700,
            width: 400,
            fontSize: 16,
            starterPrompts: [
                "What resources are available for research?",
                "How can you help me?"
            ]
          }
        }}
      />
    </div>


  );
}
