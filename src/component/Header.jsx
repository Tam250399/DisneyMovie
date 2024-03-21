import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2"
import { HiPlus, HiDotsVertical } from "react-icons/hi"
import HeaderItems from './HeaderItems'
import avartar from "./../assets/Images/avartar.png"
function Header() {

    const [toggle, setToggle] = useState();
    const menu = [
        {
            name: 'TRANG CHỦ',
            icon: HiHome
        },
        {
            name: 'TÌM KIẾM',
            icon: HiMagnifyingGlass
        },
        {
            name: 'DANH SÁCH',
            icon: HiPlus
        }
        ,
        {
            name: 'TOP PHIM',
            icon: HiStar
        }
        ,
        {
            name: 'THỂ LOẠI',
            icon: HiPlayCircle
        }
        ,
        {
            name: 'QUỐC GIA ',
            icon: HiTv
        }
    ]
    return (

        <div className='flex items-center  mt-1  justify-between p-5'>
            <div className='flex items-center gap-8'>
                <img src={logo} className='w-[80px] object-cover md:w-[115px]' />

                <div className='hidden  md:flex gap-8'>
                    {menu.map((items) => (
                        <HeaderItems name={items.name} Icon={items.icon} />
                    ))}
                </div>

                <div className='flex  md:hidden gap-8'>
                    {menu.map((items, index) => index < 3 && (
                        <HeaderItems name={''} Icon={items.icon} />
                    ))}
                    <div className='md:hidden' onClick={() => setToggle(!toggle)}>
                        <HeaderItems name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute mt-3 bg-[#121212] border-gray-700 border-[1px] p-3 px-5 py-4 '>
                            {menu.map((items, index) => index > 2 && (
                                <HeaderItems name={items.name} Icon={items.icon} />
                            ))}
                        </div> : null}
                    </div>
                </div>
            </div>
            {/* <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[40px] rounded-full' /> */}
            <img src={avartar} className='w-[60px] rounded-full cursor-pointer  ease-in duration-150 hover:border-gray-400 hover:scale-110' />

        </div>

    )
}

export default Header

