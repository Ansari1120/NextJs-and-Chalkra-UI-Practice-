import styles from "@/app/page.module.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body className={styles.main}>{children}</body>
    </html>
  );
}
