import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { IoSearch } from 'react-icons/io5';
import NotificationBell from './NotificationBell';

export default function AlertSearch() {
  return (
    <>
      {/* Search Bar for desktop screens */}
      <div className='relative hidden w-full items-center pl-4 lg:flex'>
        <input
          type='text'
          placeholder='Search...'
          className='w-full rounded-md border border-gray-400 bg-gray-700 py-2 pl-8 pr-4 focus:border-blue-500 focus:outline-none'
        />
        <span className='absolute right-3'>
          <HiOutlineMagnifyingGlass className='text-gray-400' />
        </span>
      </div>

      <div className='flex justify-between gap-3 pt-1'>
        {/* Search Icon for non desktop screens */}
        <IoSearch className=' lg:hidden' size={36} />

        <NotificationBell />
      </div>
    </>
  );
}
