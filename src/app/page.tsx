import Navbar from '@/components/Navbar';
import Players from '@/components/Players';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center px-5 md:px-10 lg:px-20'>
            <Navbar />
            <Players />
        </main>
    );
}
