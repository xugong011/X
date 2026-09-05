import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import { WishlistProvider } from "@/components/wishlist/WishlistProvider";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { HistoryProvider } from "@/components/history/HistoryProvider";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.slogan,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <AuthProvider>
          <WishlistProvider>
            <HistoryProvider>
              <CartProvider>
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </CartProvider>
            </HistoryProvider>
          </WishlistProvider>
        </AuthProvider>
      </body>
    </html>
  );
}