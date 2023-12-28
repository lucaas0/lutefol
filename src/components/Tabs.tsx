export default function CustomTabs({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <nav className='w-full'>
            <div className="w-full" id="navbar-default">
                <ul className="font-medium flex flex-row px-16 md:px-32 rtl:space-x-reverse">
                    {children}
                </ul>
            </div>
        </nav>
    );
}