import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { AvailableChatItem } from './AvailableChatItem';
import { useCurrentUser } from '../hooks/useCurrentUser';
import classNames from 'classnames';

export const AvailableChats = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const users = useSelector((state) => state.users);
  const { currentUser } = useCurrentUser();
  const currentChat = useSelector((state) => state.currentChat);

  const filterUsers = useCallback(
    () => users.filter((user) => user.id !== currentUser.id && user.username.includes(searchQuery)),
    [users, currentUser, searchQuery]
  );

  const availableChats = filterUsers();

  return (
    <aside
      className={classNames('flex-1 md:max-w-96 border-r border-r-border-color h-full', {
        'hidden md:block': currentChat,
      })}
    >
      <div className="p-2">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=" bg-chat-bg w-full p-2 rounded-md outline-none"
        />
      </div>
      <ul className="flex flex-col p-2">
        {availableChats.map((user) => (
          <AvailableChatItem key={user.id} user={user} />
        ))}
      </ul>
    </aside>
  );
};
