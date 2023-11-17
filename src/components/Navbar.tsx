import Image from 'next/image';

const Navbar = () => {
    return (
        <navbar className='flex justify-between w-full py-10'>
            <section className='flex gap-4 items-center'>
                <Image
                    src='/logo.svg'
                    alt=''
                    width={24}
                    height={24}
                    className='bg-white'
                />
                lutefol
            </section>
            <section className='flex gap-4 items-center'>
                <Image src='/search-ic.svg' alt='' width={24} height={24} />
                <Image src='/menu-ic.svg' alt='' width={24} height={24} />
            </section>
        </navbar>
    );
};

export default Navbar;
