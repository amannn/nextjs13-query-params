import Image from 'next/image';
import BreedSelect from './BreedSelect';

type Props = {
  searchParams?: {
    breed?: string;
  };
};

export default async function Index({searchParams}: Props) {
  const breed = searchParams?.breed ?? 'corgi';

  async function getBreedImage() {
    const url = `https://dog.ceo/api/breed/${breed}/images`;
    const response = await fetch(url);
    const result = await response.json();
    return result.message[0];
  }

  return (
    <div>
      <BreedSelect value={breed} />
      {breed && (
        <Image
          priority
          width={400}
          height={400}
          style={{objectFit: 'contain'}}
          alt="Dog"
          src={await getBreedImage()}
        />
      )}
    </div>
  );
}
