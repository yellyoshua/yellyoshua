import {Project} from '@/app/interfaces';
import Text from '@/app/components2/Text';

interface PropTypes {
  status: Project['projectStatus'];
  className?: string;
}

const statusColors = {
  development: 'bg-red-500 text-white',
  production: 'bg-green-700 text-white',
  forgotten: 'bg-gray-500 text-white',
	archived: 'bg-gray-500 text-white'
};

const statusLabels = {
  development: 'In development',
  production: 'Finished',
  forgotten: 'Forgotten',
	archived: 'Archived'
};

export default function ProjectStatus({status = 'development', className}: PropTypes) {
	return (
    <Text className={`${className} ${statusColors[status]} px-1`}>
      {statusLabels[status]}
    </Text>
  );
}
