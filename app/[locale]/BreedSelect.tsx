import {useTranslations} from 'next-intl';
import BreedSelectRoot from './BreedSelectRoot';

type Props = {
  title: string;
  value: string;
};

export default function BreedSelect({title, value}: Props) {
  const t = useTranslations();

  return (
    <BreedSelectRoot title={title} value={value}>
      {['corgi', 'labrador', 'husky'].map((breed) => (
        <option key={breed} value={breed}>
          {t('breedName', {breed})}
        </option>
      ))}
    </BreedSelectRoot>
  );
}
