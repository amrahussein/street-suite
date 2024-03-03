import { data } from '../../Data';
import Icon from '../UI/Icon';

export default function IndustryFilters({ handleFilterToggle }) {
  return (
    <div className='mb-4 xl:pl-24'>
      <h2 className='mb-4 text-lg font-semibold'>Industry Filter:</h2>
      <div className='grid grid-cols-2 gap-4 overflow-hidden pr-4'>
        {data.industry.map((industry, index) => (
          <div
            key={index}
            className='relative flex cursor-pointer items-center pl-4'
            onClick={() => handleFilterToggle(industry.name)}
          >
            <span
              className='absolute left-0 h-full w-1 bg-gray-500'
              style={{ height: 'calc(100% + 1rem)' }} // apply extended height faking vertical line nearing grid col
            ></span>

            <span className='pr-2'>
              <Icon icon={industry.icon} size={16} />
            </span>

            {industry.name}
          </div>
        ))}
      </div>
    </div>
  );
}
