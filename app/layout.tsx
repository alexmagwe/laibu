import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
      <footer className='position absolute bottom-0'>
        <a
          href='https://keplalabs.co.ke'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className=''>@keplalabs</span>
        </a>
      </footer>
    </html>
  )
}
