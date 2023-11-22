import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './(components)/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Complaint Forum',
  description: 'Register your Complaints for our Company and we will hear you out. Your feedback is Necessary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='flex flex-col h-screen max-h-screen'>
      <Navbar/>
      <div className='flex-grow overflow-y-auto bg-gray-800 text-white'> 
          {children} 
      </div>  
      </div>
      </body>
    </html>
  )
}
