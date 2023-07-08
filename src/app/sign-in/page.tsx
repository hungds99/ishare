export default function SignIn() {
  return (
    <section className='section_sign-in'>
      <div className='block_sign-in h-screen w-screen'>
        <div className='flex justify-center items-center'>
          <h1>Sign In</h1>
          <div className='w-96 h-auto'>
            <div>
              <input type='text' placeholder='Email' />
            </div>
            <div>
              <input type='password' placeholder='Password' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
