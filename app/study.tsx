import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils'
import { hash } from 'bcryptjs'
import { IKVideo, ImageKitProvider } from 'imagekitio-next';
import React from 'react'
import { config } from 'zod';

const study = ({ params }: { params: Promise<{ id: string }> }) => {

    // bcryptjs

    // const hashPassword = await hash(password, 10);

    const isSelected = false;
  return (
    <div>
        <p className={cn("text-2xl", isSelected && "bg-primary-admin shadow-sm")}>

            <Textarea 
            rows={10}
            />
        </p>

        
        <ImageKitProvider 
        // @ts-ignore
        urlEndpoint={config.env.imagekit.urlEndpoint}
        />

        <IKVideo 
        // path={videoUrl}
        controls={true}

        />
    </div>
  )
}

export default study