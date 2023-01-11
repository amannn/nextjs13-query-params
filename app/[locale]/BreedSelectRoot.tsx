'use client';

import {useRouter} from 'next/navigation';
import {ChangeEvent, ReactNode} from 'react';

type Props = {
  children: ReactNode;
  title: string;
  value: string;
};

export default function BreedSelectRoot({children, title, value}: Props) {
  const router = useRouter();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    router.replace(document.location.pathname + '?breed=' + event.target.value);
  }

  return (
    <select aria-label={title} onChange={onSelectChange} value={value}>
      {children}
    </select>
  );
}
