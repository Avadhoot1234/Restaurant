"use client"
import React,{useState}  from 'react'
import Image from 'next/image'
import { title } from 'process';
import { url } from 'inspector';
import Link from 'next/link';
import CartIcon from './CartIcon';

const Menu = () => {
  const [open,setOpen]=useState(false);
  //Links for the hamburger icon
  const links=[
    {id:1,title:"Homepage",url:"/"},
    {id:2,title:"Menu",url:"/menu"},
    {id:3,title:"Working Hours",url:"/"},
    {id:4,title:"Contact",url:"/"},
  ]
  const user=false;
return (
    <div>
      {/* condition for opening and closing the menu icon */}
    {!open?(
        <Image src='/open.png' alt="" width={20} height={20} onClick={()=>setOpen(true)}/>
    ):(
        <Image src='/close.png' alt="" width={20} height={20} onClick={()=>setOpen(false)}/>
    )}

    {/* Adding condition for the functioning of the hamburger menu */}
    {open && (
      <div className='bg-red-500 text-white absolute left-0 top-24 w-full   h-[calc(100vh-6rem)] flex flex-col items-center gap-8 justify-center x-10 text-3xl'>
        {/* iterating all of the links */}
        {links.map(item=>(
          <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
            {item.title}
          </Link>
        ))}
        
        {/* condition to display login button if the user is not loggedin */}
        {!user ? (<Link href="/login" onClick={()=>setOpen(false)}>Login</Link>):
        <Link href="/orders" onClick={()=>setOpen(false)}>orders</Link>}

        <Link href="/cart" onClick={()=>setOpen(false)}>
          <CartIcon/>
        </Link>

      </div>
    )}
    </div>
    
  )
}

export default Menu
