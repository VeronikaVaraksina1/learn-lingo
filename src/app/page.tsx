import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h2 className="text-xl">Hello</h2>
      <div>
        <h1 className="text-5xl font-medium leading-tight tracking-tight">
          Unlock your potential with the best{' '}
          <span className="bg-light-red rounded-lg italic font-normal">
            language
          </span>{' '}
          tutors
        </h1>
        <p className='leading-snug tracking-tight'>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
      </div>
      <div>
        <Image
          src={'/images/bg.jpg'}
          alt={'girl and a laptop'}
          width={568}
          height={530}
        />
      </div>
      <div></div>
    </main>
  );
}
