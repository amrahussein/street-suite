import { useState } from 'react';
import { data } from '../../Data';
import AlertSearch from '../UI/AlertSearch';
import AlertsItem from './AlertsItem';

export default function Alerts() {
  const [expandedAlert, setExpandedAlert] = useState(false);

  const handleAlertClick = (index) => {
    setExpandedAlert(expandedAlert === index ? null : index);
  };

  return (
    <>
      <div className='h-full w-full shrink-0 space-y-8 overflow-auto pb-[4rem] pl-[4.3rem] xl:ml-4 xl:w-[58%] xl:pb-0'>
        {/* topbar alerts section */}
        <div className='flex flex-row items-center justify-between space-x-4 bg-gray-800 py-2 pr-2 lg:px-4'>
          {/* Heading */}
          <div className='flex items-center space-x-4'>
            <span className='block h-16 w-[0.3rem] bg-blue-600'></span>{' '}
            <div className='text-3xl font-extrabold lg:text-5xl'>ALERTS</div>
          </div>

          <AlertSearch />
        </div>

        <div>
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
