import Icon from '../UI/Icon';

export default function SideNavItem({ isCollapsed, name, icon }) {
  return (
    <div className='flex cursor-pointer items-center space-x-3 bg-gray-700 font-semibold hover:text-blue-600 '>
      <Icon icon={icon} size={36} />

      {!isCollapsed && <span className='block'>{name}</span>}
    </div>
  );
}
