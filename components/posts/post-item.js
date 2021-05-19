import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/post-item.module.css';

function PostItem(props) {
  const { title, image, excerpt, date, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <li className={styles.post}>
      <Link href={linkPath}>
        <a>
          <div className={styles.image}>
            <Image />
          </div>
          <div className={styles.content}>
            <h3>{title}</h3>
            <time>July 13th 2022</time>
            <p>The excerpt </p>
          </div>
        </a>
      </Link>
    </li>
  );
}
export default PostItem;
