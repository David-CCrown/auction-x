export default function CreateNewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mt-8 w-[90%] lg:w-[90%] mx-auto">{children}</div>
    </>
  );
}
