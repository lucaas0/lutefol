import Navbar from '@/components/Navbar';
import PlayersRow from '@/components/PlayersRow';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center px-5 md:px-10 lg:px-20'>
            <Navbar />
            <PlayersRow />
            <hr className='fade-hr' />
        </main>
    );
}
