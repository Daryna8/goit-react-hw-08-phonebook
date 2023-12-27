import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import s from './PhoneBook.module.css';

export const Loader = () => {
  return (
    <div className={s.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="#252dc6"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};
