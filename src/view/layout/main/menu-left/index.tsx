import React, { MouseEventHandler } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames'
import { useRouter } from 'next/router'

import {MenuDataItem} from '../../../../config/menu/data'
import styles from './index.module.scss'

const MenuLeft: React.FC<{
    routes: Array<MenuDataItem>
    closeMenu?: React.Dispatch<React.SetStateAction<boolean>>
}> = ({routes, closeMenu}) => {
    const router = useRouter()
    const removePathSlash = (path: string) => path?.split('/').join('').split('?')[0]

    const activeClassNameFormatter = (currentPath: string) =>
    cn({ [styles.active]: removePathSlash(router.asPath) === removePathSlash(currentPath) })

  const generateMenuItem = (item: MenuDataItem) => (
    <li key={item?.key}>
      {removePathSlash(item?.url) === removePathSlash(router.pathname) ? (
        <a
          style={{ cursor: 'pointer' }}
          className={isClientRendered ? activeClassNameFormatter(item.url) : ''}
        >
          <div className={styles['icon-container']}>
            {item?.icon?.name ? <FontAwesomeIcon icon={item.icon?.name} /> : null}
          </div>
          {item.title}
        </a>
      ) : (
        <a
          onClick={closeMenu ? () => closeMenu(false) : undefined}
          className={item.url}
          href={item?.url !== router.pathname ? item?.url : ''}
        >
          <div className={styles['icon-container']}>
            {item?.icon?.name ? <FontAwesomeIcon icon={item.icon?.name} /> : null}
          </div>
          {item.title}
        </a>
      )}
    </li>
  )

  const generateMenu = routes.map((route) => {
    return generateMenuItem(route)
  })

  return(
    <div className={styles['menu-left']}>
        <div className={styles['logo-container']}>Logo</div>
        <div className={styles['menu-items']}>{generateMenu}</div>
    </div>
  )
}

export default MenuLeft