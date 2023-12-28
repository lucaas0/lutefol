export default function PageWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className='flex flex-col items-center h-full'>
                {children}
        </main>
    );
}
