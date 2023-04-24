import React from 'react'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
         <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/fbb40cac416942fe88e4e21eb8a8d944~c5_100x100.jpeg?x-expires=1682517600&x-signature=rwzwvs8GnsQzzZwOepoE9uIYNds%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
    </div>
  )
}

export default AccountItem