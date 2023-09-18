import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Support',
    path: '/',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Shringar',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Shri Mastak',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Shri Karna',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Categories',
    path: '/',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Mukhravind',
        path: '/',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav',

       
      },
      {
        title: 'Shri Mastak',
        path: '/',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Shri Karna',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },

  
  {
    title: 'Vastra',
    path: '/',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Cotton',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Satin',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Zari',
        path: '/',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Contact',
    path: '/',
    icon: <FaIcons.FaCartPlus />
  },
];
