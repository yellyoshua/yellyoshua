import Text from '@/app/components2/Text';

interface PropTypes {
  status: 'development' | 'production' | 'forgotten';
  className?: string;
}

const statusColors = {
  development: 'bg-red-500 text-white',
  production: 'bg-green-700 text-white',
  forgotten: 'bg-gray-500 text-white'
};

const statusLabels = {
  development: 'In development',
  production: 'Deployed',
  forgotten: 'Forgotten'
};

export default function ProjectStatus({status = 'development', className}: PropTypes) {
	return (
    <Text className={`${className} ${statusColors[status]} px-1`}>
      {statusLabels[status]}
    </Text>
  );
}
