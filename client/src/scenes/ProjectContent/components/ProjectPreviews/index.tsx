import { Asset } from '@/app/interfaces';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';

interface PropTypes {
	previews: Asset[];
}

export default function ProjectPreviews({ previews }: PropTypes) {
	const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

	useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })

		return () => {
			if (api) api.destroy()
		}
  }, [api])

	if (!previews.length) return null;

	return (
		<div className='flex flex-col items-center gap-3'>
			<h2 className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
				Previews of the project
			</h2>
			<Carousel setApi={setApi} className="w-full max-w-xs m-auto sm:max-w-lg lg:max-w-3xl">
				<CarouselContent>
				{previews.map((preview) => {
					return (<CarouselItem key={preview.url} className=''>
						<img
							className='rounded-md max-w-sm max-w-full h-full max-h-screen object-cover m-auto'
							src={preview.url}
							alt={preview.fileName}
						/>
					</CarouselItem>);
				})}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>

			<div className='flex justify-center gap-3'>
				<h3 className='text-sm text-gray-500 dark:text-gray-400'>
					{current}
				</h3>

				<h3 className='text-sm text-gray-500 dark:text-gray-400'>
					/
				</h3>

				<h3 className='text-sm text-gray-500 dark:text-gray-400'>
					{count}
				</h3>
			</div>
		</div>
	);
}
