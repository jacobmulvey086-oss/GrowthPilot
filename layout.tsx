import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ResponseLogger } from "@/components/response-logger";
import { cookies } from "next/headers";
import FarcasterWrapper from "@/components/FarcasterWrapper";
import { ClientProviders } from "@/components/client-providers";
import CapacitorInitializer from "@/components/capacitor-initializer";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const requestId = cookieStore.get("x-request-id")?.value;

  return (
        <html lang="en">
          <head>
            {requestId && <meta name="x-request-id" content={requestId} />}
          </head>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ClientProviders>
              <FarcasterWrapper>
                <CapacitorInitializer />
                {children}
              </FarcasterWrapper>
              <ResponseLogger />
            </ClientProviders>
          </body>
        </html>
      );
}

export const metadata: Metadata = {
        title: "Income Path Finder",
        description: "Achieve your target income with ease. Choose a goal and niche to get a tailored 7-step beginner checklist. Track progress, complete tasks, and reach your financial aspirations.",
        other: { "fc:frame": JSON.stringify({"version":"next","imageUrl":"https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/thumbnail_919d7431-9a0c-4989-a3e7-7e3cd7355efd-zC7zD3xGsN44Fe8a5x3YFN7dlv1FpD","button":{"title":"Open with Ohara","action":{"type":"launch_frame","name":"Income Path Finder","url":"https://hard-gain-770.app.ohara.ai","splashImageUrl":"https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/farcaster/splash_images/splash_image1.svg","splashBackgroundColor":"#ffffff"}}}
        ) }
    };
