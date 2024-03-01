import { useState } from 'react';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { IoNotificationsOutline } from 'react-icons/io5';
import { data } from '../../Data';
import AlertsItem from './AlertsItem';

export default function Alerts() {
  const [expandedAlert, setExpandedAlert] = useState(false);

  const handleAlertClick = (index) => {
    setExpandedAlert(expandedAlert === index ? null : index);
  };

  return (
    <>
      <div className='ml-24 h-full w-[58%] shrink-0 space-y-8 overflow-auto'>
        <div className='flex items-center justify-between bg-gray-800 px-4 py-2'>
          <div className='flex items-center space-x-4'>
            <div className='h-16 w-[0.3rem] bg-blue-600'></div>

            <div className='text-5xl font-extrabold'>ALERTS</div>

            {/* Search Bar */}
            <div className='relative flex items-center'>
              <input
                type='text'
                placeholder='Search...'
                className='w-[38rem] rounded-md border border-gray-400 bg-gray-700 py-2 pl-8 pr-4 focus:border-blue-500 focus:outline-none'
              />
              <span className='absolute right-3'>
                <HiOutlineMagnifyingGlass className='text-gray-400' />
              </span>
            </div>
          </div>

          {/* Notification Bell */}
          <div className='flex items-center space-x-4'>
            <span className='relative'>
              <IoNotificationsOutline size={36} className='text-blue-600' />
              {/* Notification indicator */}
              <span className='absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-green'>
                <span className='text-xs font-bold'>4</span>
              </span>{' '}
            </span>
          </div>
        </div>

        <div className=' '>
          {data.alerts.map((alert, index) => (
            <AlertsItem
              key={index}
              alert={alert}
              index={index}
              expandedAlert={expandedAlert}
              handleAlertClick={handleAlertClick}
            />
          ))}
        </div>
      </div>
    </>
  );
}
