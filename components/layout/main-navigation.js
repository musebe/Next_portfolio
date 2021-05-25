import Link from 'next/link';
import Logo from './logo';
import styles from '@/styles/main-navigation.module.css';

function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href='/posts'>BLOG</Link>
          </li>
          <li>
            <Link href='/'>TALKS</Link>
          </li>
          <li>
            <Link href='/contact'>CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
