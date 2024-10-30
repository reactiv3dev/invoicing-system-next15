 import Container from './Container'


export default function Footer(){
   return (
       <header className='mt-6 mb-8'>
           <Container >
                <p>InvoicIn &copy; { new Date().getFullYear()}. ReactiveDev All Rights Reserved.</p>

           </Container>
       </header>
   )
}