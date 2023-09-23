'use client';
import { useWindowSize } from '@/helpers/windowSize';
import { Burger, Button } from '..';
import { MenuProps } from '@/types';

export default function Menu(props: MenuProps) {
  const size = useWindowSize();

  return (
    <>
      {size.width <= 550 ? (
        <Burger onClick={() => props.handlerMenu()} />
      ) : (
        <Button onClick={() => console.log('popup with form opened')} />
      )}
    </>
  );
}
