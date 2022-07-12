import React from "react";
import { FaRegChartBar } from "react-icons/fa";
import { GiCarWheel } from 'react-icons/gi';
import { MdFastfood } from 'react-icons/md';
import { RiLogoutBoxRFill } from 'react-icons/ri'

export interface IMenuItem {
  id: string;
  title: string;
  type: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  url?: string;
  children?: IMenuItem[];
}


export interface IMenuItems {
  bodyItems: IMenuItem[];
  bottomItems: IMenuItem[];
}


const menuItems: IMenuItems = {
  bodyItems: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      Icon: FaRegChartBar,
      children: []
    },
    {
      id: 'drivers',
      title: 'Drivers',
      type: 'item',
      url: '/dashboard/drivers',
      Icon: GiCarWheel,
      children: []
    },
    {
      id: 'perks',
      title: 'Perks',
      type: 'item',
      url: '/dashboard/perks',
      Icon: MdFastfood,
      children: []
    },
  ],
  bottomItems: [
    {
      id: 'logout',
      title: 'Logout',
      type: 'item',
      url: '/logout',
      Icon: RiLogoutBoxRFill,
      children: []
    },
  ]
}


export default menuItems;