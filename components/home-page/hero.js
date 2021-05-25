import Image from 'next/image';
import styles from '@/styles/hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/eugene.jpg'
          alt='An image showing Eugene Musebe'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Eugene Musebe</h1>

      <p>
        A Javascript software developer and content creator based in Nairobi,
        Kenya. Am constantly learning new technologies so that i can teach
        others.
      </p>

    </section>
  );
}

export default Hero;
