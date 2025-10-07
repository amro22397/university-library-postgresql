import { cn } from '@/lib/utils'
import { hash } from 'bcryptjs'
import React from 'react'

const study = () => {

    // bcryptjs

    // const hashPassword = await hash(password, 10);

    const isSelected = false;
  return (
    <div>
        <p className={cn("text-2xl", isSelected && "bg-primary-admin shadow-sm")}>

        </p>
    </div>
  )
}

export default study