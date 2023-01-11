import Image from 'next/image';

type Props = {
  breed: string;
};

export default async function BreedImage({breed}: Props) {
  const url = `https://dog.ceo/api/breed/${breed}/images`;
  const result = await fetch(url).then((response) => response.json());

  return (
    <Image
      priority
      width={100}
      height={100}
      alt="Dog"
      src={result.message[0]}
    />
  );
}
