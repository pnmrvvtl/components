import styles from './Masonry.module.scss';

interface MasonryProps extends React.HTMLAttributes<HTMLDivElement> {

}

export default function Masonry(props: MasonryProps) {
  const { children, ...rest } = props;

  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
}