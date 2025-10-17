import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/hooks/use-language"

export const metadata: Metadata = {
  title: "Atlas Portfolio",
  description: "Professional portfolio showcasing web development and AI-powered solutions by Cod Atlas",
  generator: "v0.dev",
  icons: {
    icon: "https://res.cloudinary.com/deh3ejeph/image/upload/v1751942169/Screenshot_2025-07-08_at_03.35.57_musikm.png",
    shortcut:
      "https://res.cloudinary.com/deh3ejeph/image/upload/v1751942169/Screenshot_2025-07-08_at_03.35.57_musikm.png",
    apple: "https://res.cloudinary.com/deh3ejeph/image/upload/v1751942169/Screenshot_2025-07-08_at_03.35.57_musikm.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="https://res.cloudinary.com/deh3ejeph/image/upload/v1751942169/Screenshot_2025-07-08_at_03.35.57_musikm.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://res.cloudinary.com/deh3ejeph/image/upload/v1751942169/Screenshot_2025-07-08_at_03.35.57_musikm.png"
        />
      </head>
      <body className="dark">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
