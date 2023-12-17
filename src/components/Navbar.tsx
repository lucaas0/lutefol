import Image from 'next/image';
import '../assets/styles/navbar.css';
import Link from 'next/link';

const Navbar = () => {
    return (
            <div className='flex justify-between w-full px-20 navbar'>
                <section className='flex gap-5 items-center'>
                    <Image
                        src='/pirates-logo.svg'
                        alt=''
                        width={48}
                        height={48}
                        className="cursor-pointer"
                    />
                    <Image
                        src='/void-logo.svg'
                        alt=''
                        width={60}
                        height={60}
                    />

                    <hr className="divider" />

                    <ul>
                    <li className='link-effect link-effect__selected'>News</li>
                        <li className='link-effect'>Matches</li>
                        <li className='link-effect'>Team</li>
                        <li className='link-effect'>Stats</li>
                        <li className='link-effect'>Media</li>
                    </ul>
                </section>
                <section className='flex gap-8 items-center'>
                    <Image src='/search-ic.svg' alt='' width={24} height={24} />
                    <Image src='/ic-user.svg' alt='' width={24} height={24} />
                    <Image src='/ic-globe.svg' alt='' width={24} height={24} />
                    <Link href="/" className='navbar__link'> SIGN IN </Link>
                </section>
            </div>
    );
};

export default Navbar;
