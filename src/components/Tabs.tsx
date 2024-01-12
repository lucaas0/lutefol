export default function CustomTabs({
    children, tabPosition
}: {
    children: React.ReactNode;
    tabPosition?: string;
}) {
    return (
        <nav className='w-full'>
            <div className={`w-full flex ${tabPosition}`} id="navbar-default">
                <ul className="font-medium flex flex-row px-8 md:px-32 rtl:space-x-reverse">
                    {children}
                </ul>
            </div>
        </nav>
    );
}