import { AiOutlineStock } from 'react-icons/ai';
import { GiMoneyStack } from 'react-icons/gi';
import { IoPricetags } from 'react-icons/io5';
import { MdOutlinePriceChange } from 'react-icons/md';

export default function AlertsItem({
  alert,
  index,
  expandedAlert,
  handleAlertClick,
}) {
  const parsedStockMovement = parseFloat(alert.stockMovement.replace('%', ''));

  return (
    <div
      key={index}
      className={`${
        expandedAlert === index ? 'bg-blue-800' : ''
      } mx-4 mb-4 cursor-pointer rounded-lg bg-gray-600 px-4 py-4 font-semibold md:mx-8`}
      onClick={() => handleAlertClick(index)}
    >
      <ul className='list-none'>
        <li className='flex flex-col items-start justify-between pl-4 md:flex-row md:items-center md:pl-12'>
          <div className='mb-2 flex items-center md:mb-0 md:w-1/4'>
            <IoPricetags className='mr-2' />
            {alert.companyName}
          </div>
          <div className='mb-2 flex items-center border-l border-gray-400 pl-4 md:mb-0 md:w-1/4 md:pl-12'>
            <MdOutlinePriceChange size={22} className='mr-2' />
            {alert.marketValue}
          </div>
          <div
            className={`mb-2 flex items-center border-l border-gray-400 pl-4 md:mb-0 md:w-1/4 md:pl-12 ${
              parsedStockMovement < 0 ? 'text-orange' : 'text-green'
            }`}
          >
            <AiOutlineStock className='mr-2' size={22} />
            {alert.stockMovement}
          </div>

          <div className='flex items-center border-l border-gray-400 pl-4 md:w-1/4 md:pl-12'>
            <GiMoneyStack size={22} className='mr-2' />
            {alert.risk}
          </div>
        </li>
      </ul>
      {expandedAlert === index && (
        <div className='mt-2 rounded-md bg-gray-700 px-4 py-2'>
          <div>{alert.additionalInfo}</div>
        </div>
      )}
    </div>
  );
}
