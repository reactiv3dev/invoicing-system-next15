import {
     SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import Link from 'next/link'
import Container from './Container'


export default function HeaderComponent(){
    return (
        <header>
            <Container className='flex justify-between p-5'>
                <Link href='/dashboard'><strong className='text-3xl font-semibold'>InvoicIn</strong></Link>
                <div>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                </div>
            </Container>
        </header>
    )
}