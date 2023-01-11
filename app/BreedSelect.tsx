'use client';

import {useRouter} from 'next/navigation';
import {ChangeEvent} from 'react';

type Props = {
  value: string;
};

export default function BreedSelect({value}: Props) {
  const router = useRouter();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    router.replace('/?breed=' + event.target.value);
  }

  return (
    <select
      aria-label="Breed selection"
      onChange={onSelectChange}
      value={value}
    >
      <option value="corgi">Corgi</option>
      <option value="labrador">Labrador</option>
      <option value="husky">Husky</option>
    </select>
  );
}
