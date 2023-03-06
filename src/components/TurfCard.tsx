import Link from 'next/link';
import { Turf } from 'src/types/types';
import dynamic from 'next/dynamic';
import { FaMapMarkerAlt, FaFutbol } from 'react-icons/fa';
import useHelper from '@hooks/useHelper';

interface TurfCardProps {
  turf: Turf;
  href: string;
}

const Avatar = dynamic(() => import('@components/Ava'));

const TurfCard = ({ turf, href }: TurfCardProps) => {
  const { getRoleHref } = useHelper();
  return (
    <Link className="w-full max-w-xs overflow-hidden rounded-lg shadow-md" href={getRoleHref(`${href}/${turf?.turf_id}`)}>
      <div className="h-48">
        <Avatar size="400" src={turf?.turf_image} className="h-full w-full" />
      </div>
      <div className="p-4">
        <h3 className="flex items-center text-lg font-semibold">
          <FaFutbol className="mr-2" />
          {turf?.turf_name}
        </h3>
        <p className="flex items-center text-gray-600">
          <FaMapMarkerAlt className="mr-2" />
          {turf?.address}
        </p>
      </div>
    </Link>
  );
};

export default TurfCard;
