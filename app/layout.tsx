import type { Metadata } from "next";
import { Montserrat, Roboto_Mono } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Shell } from "@/components/Shell";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

const montserrat = Montserrat({ subsets: ['latin'] })
const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Kaylem Williams Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={{
          primaryColor: "indigo",
          fontFamily: `${roboto.style.fontFamily}, sans-serif`,
          fontFamilyMonospace: 'Monaco, Courier, monospace',
          headings: { fontFamily: `${montserrat.style.fontFamily}, sans-serif` },
        }}>
          <Shell>
            {children}
          </Shell>
        </MantineProvider>
      </body>
    </html>
  );
}