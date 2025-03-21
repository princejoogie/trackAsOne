import React from 'react';
import { useRouter } from 'next/router';
import { BiDoorOpen } from 'react-icons/bi';
import { Indicator } from '@/components';

interface ListRoomsProps {
  room: IRoom;
}

const ListRooms: React.FC<ListRoomsProps> = ({ room }) => {
  const { push } = useRouter();

  return (
    <button
      type='button'
      onClick={() => push({ pathname: '/room', query: { id: room.id } })}
      className='card flex-between btn-ring relative mb-2 h-[70px] w-full text-left'
    >
      <div className='leading-5'>
        <p className='text-f9'>{room?.name}</p>
        <p className='text-sm'>
          members: {room.members.length + 1 + room.admin.length}
        </p>
      </div>

      <BiDoorOpen className='icon' />
      {room.requests.length > 0 && <Indicator className='top-2 right-2' />}
    </button>
  );
};

export default ListRooms;
