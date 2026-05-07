import { ReactNode } from 'react';

import { cn } from '@/shared/utils/tailwind';

import styles from './AuthCard.module.css';

type AuthCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  centered?: boolean;
};

function AuthCard({
  title,
  subtitle,
  children,
  centered = false,
}: AuthCardProps) {
  return (
    <div
      className={cn(styles.card, centered && 'text-center border text-red-900')}
    >
      <div className={styles.header}>
        <h2 className="text-orange-500">{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

export default AuthCard;
