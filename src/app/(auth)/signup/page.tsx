'use client';
import InputWithLabel from "@/components/InputWithLabel";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IUserSignup {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

const Signup = () => {
    const [user, setUser] = useState<IUserSignup | undefined>(undefined);

    return (
        <main>
            <section className="hidden md:flex" >
                <div className="flex flex-col gap-48 p-10">
                    <div className="flex gap-2">
                        <Image src="/caret-left-ic.svg" width={24} height={24} alt="<" />
                        <Link href={'/'} className="uppercase">
                            back to website
                        </Link>
                    </div>
                    <div className="uppercase font-bold flex flex-col gap-2">
                        <h2 className="text-3xl">{`pirate's`} harbor</h2>
                        <h1 className="text-6xl">Dock in the exclusive harbor of Pirates FC.</h1>
                    </div>
                </div>
            </section>
            <section className="flex flex-col md:py-12 py-6 gap-10">
                <Image src="/logo-filled.svg" width={96} height={96} alt="" className="md:hidden block" />
                <div className="flex flex-col w-4/6 gap-6">
                    <div className="flex flex-col items-center gap-4">
                        <h1 className="uppercase font-bold text-2xl">Sign up</h1>
                        <h2 className="text-sm text-center color-8B849B md:w-2/3">
                            Seize Your Spot with Pirates FC and Dive into a Sea of Skill, Camaraderie, and Unforgettable Goals
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-8 w-full">
                        <InputWithLabel
                            inputProps={{
                                hasError: false,
                                type: 'text',
                                placeholder: 'Insert your first name',
                                onInputChange: () => { },
                                value: user?.firstname || ''
                            }}
                            labelProps={{ text: 'First name *' }}
                        />
                        <InputWithLabel
                            inputProps={{
                                hasError: false,
                                type: 'text',
                                placeholder: 'Insert your last name',
                                onInputChange: () => { },
                                value: user?.lastname || ''
                            }}
                            labelProps={{ text: 'Last name *' }}
                        />
                        <InputWithLabel
                            inputProps={{
                                hasError: false,
                                type: 'email',
                                placeholder: 'Insert your email *',
                                onInputChange: () => { },
                                value: user?.email || ''
                            }}
                            labelProps={{ text: 'Email' }}
                        />
                        <InputWithLabel
                            inputProps={{
                                hasError: false,
                                type: 'text',
                                placeholder: 'Insert your password *',
                                onInputChange: () => { },
                                value: user?.password || ''
                            }}
                            labelProps={{ text: 'Password' }}
                        />

                        <Link href="" className="font-bold color-B8B8B8">Forgot Password?</Link>

                        <Link href="" className="btn-register">
                            register
                        </Link>

                        <Link href="" className="flex gap-1">
                            <span className="color-B8B8B8">Already have an account?</span>
                            <span className="color-brand-400">Sign in</span>
                        </Link>
                    </div>
                </div>
            </section>
            <Image src="/logo-filled.svg" width={96} height={96} alt="" className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </main>
    )
}

export default Signup;
