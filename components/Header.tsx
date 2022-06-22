import Image from 'next/image';
import {BellIcon, ChatIcon, GlobeIcon, MenuIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon} from '@heroicons/react/outline'
import { ChevronDownIcon, 
         HomeIcon, 
         SearchIcon, 
         BeakerIcon, } from '@heroicons/react/solid'
import Link from 'next/link';         
import { signIn, signOut, useSession } from 'next-auth/react';

function Header() {

  const {data: session} = useSession();

  return (
    <div className='sticky top-0 z-50 flex items-center bg-white px-4 py-2 shadow-sm'>
        <div className='relative h-10 w-20 flex-shrink-0 cursor-pointer'>
            <Link href="/">
            <Image
            objectFit="contain" 
            src="https://links.papareact.com/fqy"
            layout='fill'
            alt="logo"
            />
            </Link>
        </div>
        <div className='mx-7 flex items-center sl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5' />
            <p className='ml-2 hidden flex-1 lg:inline'>Home</p>
            <ChevronDownIcon className='h-5 w-5' />
        </div>
        <form className='flex flex-1 items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1'>
            <SearchIcon className='h-6 w-6 text-gray-400' />
            <input className='flex-1 bg-transparent outline-none' type='text' placeholder="Search Reddit" />
            <button type='submit' hidden />
        </form>
        <div className='mx-5 items-center space-x-2 text-gray-500 hidden lg:inline-flex'>
          <SparklesIcon className='icon' />
          <GlobeIcon className='icon' />
          <VideoCameraIcon className='icon' />
          <hr className='h-10 border border-gray-100' />
          <ChatIcon className='icon' />
          <BellIcon className='icon' />
          <PlusIcon className='icon' />
          <SpeakerphoneIcon className='icon' />
        </div>
        <div className='ml-5 flex items-center lg:hidden'>
           <MenuIcon className='icon' />
        </div>
        {/* Sign in/Sign out */}
        {session ? (
          <div onClick={() => signOut()} className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
          <div className='relative h-5 w-5 flex-shrink-0'>
         <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"/>
          </svg>
          </div>
          <div className='flex-1 text-xs'>
            <p className='truncate'>{session?.user?.name}</p>
          <p className='text-gray-400'>1 karma</p>
          </div>
          <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400' />
        </div>
        ) : (
          <div onClick={() => signIn()} className='hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex'>
        <div className='relative h-5 w-5 flex-shrink-0'>
       <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z"/>
        </svg>
        </div>
        <p className='text-gray-400'>Sign In</p>
      </div>
        ) }
        
    </div>
  )
}

export default Header