import {faHome} from '@fortawesome/free-solid-svg-icons'

import uris from '../URI/Index.ts'

export type MenuDataItem = {
    title: string
    key: string
    url: string
    urlAction?: boolean
    icon: {
      name: IconDefinition
    }
  }
  
  export const menuData: Array<MenuDataItem> = [
    {
        title: 'Dashboard',
        key: uris.dashboard,
        url: uris.dashboard,
        icon: {
          name: faHome,
        },
      }, 
  ]