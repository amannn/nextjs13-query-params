import Image from 'next/image';
import BreedSelect from './BreedSelect';

// Since we're using query parameters that are only known at request
// time, make sure we're using dynamic rendering (i.e. no SSG).
export const dynamic = 'force-dynamic';

type Props = {
  searchParams?: {
    breed?: string;
  };
};

export default async function Index({searchParams}: Props) {
  // Apply a default if the query param is not set
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
      <Image
        priority
        width={400}
        height={400}
        style={{objectFit: 'contain'}}
        alt="Dog"
        src={await getBreedImage()}
      />
    </div>
  );
}
