export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className=" py-5">{children}</div>
      </div>
    </div>
  );
}
