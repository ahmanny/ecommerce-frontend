import "../styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/components/ui/Providers/TanstackQueryProvider";
import { Provider } from "@/components/ui/Providers/Provider";
import { Suspense } from "react";
import PageSkeleton from "@/components/ui/loaders/skeletons/PageSkeleton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className={inter.className}>
        <Provider>
          <QueryProvider>
            <Toaster position="top-center" />
            <Suspense fallback={<PageSkeleton />}>{children}</Suspense>
          </QueryProvider>
        </Provider>
      </body>
    </html>
  );
}
