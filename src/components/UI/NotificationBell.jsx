import { IoNotificationsOutline } from 'react-icons/io5';

export default function NotificationBell({ notificationCount = 4 }) {
  return (
    <div className='flex items-center space-x-4'>
      <span className='relative'>
        <IoNotificationsOutline size={36} className='text-blue-600' />
        {/* Notification indicator */}
        <span className='absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-green'>
          {/* simulating notification count like from a data source */}
          <span className='text-xs font-bold'>{notificationCount}</span>
        </span>{' '}
      </span>
    </div>
  );
}
