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
  return (
    <div
      key={index}
      className={`${expandedAlert === index ? 'bg-blue-800' : ''} mx-8 mb-4 cursor-pointer rounded-lg bg-gray-600 px-6 py-4 font-semibold`}
      onClick={() => handleAlertClick(index)}
    >
      <ul className='list-none'>
        <li className='flex items-center justify-between pl-12'>
          <div className='flex w-1/4 items-center'>
            <IoPricetags className='mr-2' />
            {alert.companyName}
          </div>
          <div className='flex w-1/4 border-l border-gray-400 pl-12'>
            <MdOutlinePriceChange size={22} className='mr-2' />

            {alert.marketValue}
          </div>
          <div className='flex w-1/4 items-center border-l border-gray-400 pl-12'>
            <AiOutlineStock className='mr-2' size={22} />

            {alert.stockMovement}
          </div>
          <div className='flex w-1/4 border-l border-gray-400 pl-12'>
            <GiMoneyStack size={22} className='mr-2' />
            {alert.risk} risk
          </div>
        </li>
      </ul>
      {expandedAlert === index && (
        <div className='mt-2 rounded-md bg-gray-700 px-6 py-2'>
          <div>{alert.additionalInfo}</div>
        </div>
      )}
    </div>
  );
}
