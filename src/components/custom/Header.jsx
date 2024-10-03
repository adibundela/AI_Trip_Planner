import React from 'react'
import { Button } from '../ui/button'
function Header() {
  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-5'>
      <img src="/l.svg" alt="" width='150' height='35' />
      <div>
         <Button> Sign In</Button>
      </div>
    </div>
  )
}

export default Header