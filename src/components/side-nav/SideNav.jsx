import { useState } from 'react';
import { data } from '../../Data';
import UserProfile from '../UserProfile';
import SideNavItem from './SideNavItem';

export default function SideNav() {
  const { items, profile } = data.sidenav;
  const { siteName, siteVersion } = data;

  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
      className={`fixed left-0 flex h-full flex-col justify-between bg-gray-700 py-[1.75rem] pb-[4rem] md:ml-2 xl:pb-4 ${
        isCollapsed ? 'w-16 md:w-20' : 'w-52 rounded-lg pl-2 shadow-2xl'
      }`}
    >
      {/* Logo */}
      <img
        className={`cursor-pointer ${
          isCollapsed
            ? '-mt-[1.563rem] scale-[290%] md:scale-[250%]'
            : '-mt-[5rem] scale-[200%]'
        }`}
        alt='street suite logo'
        src={process.env.PUBLIC_URL + '/applogo.png'}
      />

      {/* Navigation */}
      <div className='z-10 -mt-[10rem] space-y-5 self-center xl:-mt-[28rem]'>
        {items.map((item, index) => (
          <SideNavItem
            key={index}
            name={item.name}
            icon={item.icon}
            isCollapsed={isCollapsed}
          />
        ))}
      </div>

      <div className='flex flex-col items-center justify-center space-y-5'>
        <UserProfile profile={profile} isCollapsed={isCollapsed} />

        {/* Site Name */}
        {!isCollapsed && (
          <div className='text-gray-300'>
            {siteName}. {siteVersion}
          </div>
        )}
      </div>
    </div>
  );
}
