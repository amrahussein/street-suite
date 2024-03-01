import NavItemIcon from './UI/Icon';

export default function UserProfile({ profile, isCollapsed }) {
  return (
    <div className='flex items-center justify-center text-white '>
      <div className='flex h-14 w-14 items-center justify-center rounded-full border-2 '>
        <NavItemIcon icon={profile.userIcon} size={36} />
      </div>
      {!isCollapsed && (
        <div className='pl-3'>
          <h3 className='font-semibold'>{profile.username}</h3>
          <h3 className=''>{profile.userLevel}</h3>
        </div>
      )}
    </div>
  );
}
