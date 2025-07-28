import React, { Fragment } from 'react';
import styles from './Virtualize.module.scss';

interface VirtualizeItem {
  id: string | number;
}

interface VirtualizeClassNames {
  container?: string;
  viewport?: string;
  content?: string;
  item?: string;
}

interface VirtualizeProps<T extends VirtualizeItem> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children' | 'onScroll'> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  columnsNumber?: number;
  rowGap?: number;
  columnGap?: number;
}

function Virtualize<T extends VirtualizeItem>(props: VirtualizeProps<T>) {
  const {
    items,
    renderItem,
    className,
    columnsNumber,
    rowGap,
    columnGap,
    ...rest
  } = props;

  return (
    <div
      className={styles.container}
      {...rest}
      style={{
        ...rest.style,
        display: 'grid',
        gridTemplateColumns: `repeat(${columnsNumber || 1}, 1fr)`,
        gridRowGap: rowGap || '1rem',
        gridColumnGap: columnGap || '1rem',
      }}
    >
      {items.map((item, index) => (
        <Fragment key={item.id}>
          {renderItem(item, index)}
        </Fragment>
      ))}
    </div>
  );
}

export { Virtualize, VirtualizeItem };