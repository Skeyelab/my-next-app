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
    <>
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen flex items-center justify-center font-[family-name:var(--font-geist-sans)]`}
    >
      <main className="flex flex-col items-center justify-center" style={{ width: '75%', height: '100%' }}>
        <h1>This is a demo of a chatbot for George. <br /> <br /> It has been trained on the contents of a specific website. <br /> <br /> Click the button below to start chatting.</h1>
      </main>
      <BubbleChat
        chatflowid="f6af6a07-4747-41c7-98cd-5e39a920748b"
        apiHost="https://flowise.ericdahl.dev"
        theme={{
          button: {
            backgroundColor: "#00843d",
            textColor: "#ffffff",
            buttonColor: "#00843d",
            buttonTextColor: "#ffffff",
          },
          chatWindow: {
            showTitle: false,
            showAgentMessages: false,
            title: 'Custom Chatbot',
            welcomeMessage: 'Hi. My name is Pal. How can I help you today?',
            errorMessage: 'This is a custom error message',
            backgroundColor: '#ffffff',
            backgroundImage: 'enter image path or link',
            height: 720,
            width: 450,
            fontSize: 15,
          },
          botMessage: {
            backgroundColor: '#f7f8ff',
            textColor: '#303235',
            showAvatar: true,
            avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/parroticon.png'
          },
          userMessage: {
            backgroundColor: '#00843d',
            textColor: '#ffffff',
            showAvatar: true,
            avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
          },
          textInput: {
            placeholder: 'Type your question',
            backgroundColor: '#ffffff',
            textColor: '#303235',
            sendButtonColor: '#00843d',
            maxChars: 50,
            maxCharsWarningMessage: 'You exceeded the characters limit. Please input less than 50 characters.',
            autoFocus: true,
            sendMessageSound: true,
            sendSoundLocation: 'send_message.mp3',
            receiveMessageSound: true,
            receiveSoundLocation: 'receive_message.mp3'
          },
          feedback: {
            color: '#303235'
          },
          dateTimeToggle: {
            date: true,
            time: true
          },
          footer: {
            textColor: '#303235',
            text: 'Powered by',
            company: 'southbend.tech',
            companyLink: 'https://southbend.tech'
          }

        }}
      />
    </div>
    <script defer src="https://umami.apps.stereorail.com/script.js" data-website-id="52c5d97a-f47c-4fe9-9d2f-3e3bfa656c50"></script>
    </>


  );
}
