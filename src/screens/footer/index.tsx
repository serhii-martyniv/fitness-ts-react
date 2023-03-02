import Logo from '@/assets/Logo.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
          <img alt='logo' src={Logo}/>
          <p className='my-5'>
            Sed aliquam ultrices mauris. Nunc interdum lacus sit amet orci.
            Duis vel nibh at velit scelerisque suscipit. Integer ante arcu, accumsan a,
            consectetuer eget, posuere ut, mauris. Praesent adipiscing.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>LINKS</h4>
          <p className='my-5'>Suspendisse potenti</p>
          <p className='my-5'>Phasellus tempus. Praesent turpis.</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Praesent venenatis metus at tortor pulvinar varius.</p>
          <p>(333)425-6925</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer