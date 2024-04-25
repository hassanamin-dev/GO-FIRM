import image from '../../assets/toselling/image1.png'
import selling from '../../assets/toselling/top.png'
import rated from '../../assets/toselling/rated.png'

// product image
import prod1 from '../../assets/popularP/frozen.jpg'
const TopSelling = () => {
    return (
        <div className='max-w-7xl mx-auto py-20'>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <div className="">
                    <img src={image} alt="" className=' h-full rounded-lg' />
                </div>
                <div className="">
                    <img src={selling} alt="" />
                    <div className='my-6 group cursor-pointer border-2 border-black hover:border-green-700 hover:border-2 duration-200 p-2 flex rounded-lg justify-start items-center gap-10'>
                        <div className='overflow-hidden'>
                            <img src={prod1} alt="" className='h-32 w-32 group-hover:scale-110 duration-300' />
                        </div>
                        <div className=''>
                            <h1 className='text-base hover:text-green-700'>Baby Food </h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>Ergonomic Linen Pants</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>*****</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>$25</h1>
                        </div>
                    </div>
                    <div className='my-6 group cursor-pointer border-2 border-black hover:border-green-700 hover:border-2 duration-200 p-2 flex rounded-lg justify-start items-center gap-10'>
                        <div className='overflow-hidden'>
                            <img src={prod1} alt="" className='h-32 w-32 group-hover:scale-110 duration-300' />
                        </div>
                        <div className=''>
                            <h1 className='text-base hover:text-green-700'>Baby Food </h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>Ergonomic Linen Pants</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>*****</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>$25</h1>
                        </div>
                    </div>
                    <div className='my-6 group cursor-pointer border-2 border-black hover:border-green-700 hover:border-2 duration-200 p-2 flex rounded-lg justify-start items-center gap-10'>
                        <div className='overflow-hidden'>
                            <img src={prod1} alt="" className='h-32 w-32 group-hover:scale-110 duration-300' />
                        </div>
                        <div className=''>
                            <h1 className='text-base hover:text-green-700'>Baby Food </h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>Ergonomic Linen Pants</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>*****</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>$25</h1>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={rated} alt="" />
                    <div className='my-6 group cursor-pointer border-2 border-black hover:border-green-700 hover:border-2 duration-200 p-2 flex rounded-lg justify-start items-center gap-10'>
                        <div className='overflow-hidden'>
                            <img src={prod1} alt="" className='h-32 w-32 group-hover:scale-110 duration-300' />
                        </div>
                        <div className=''>
                            <h1 className='text-base hover:text-green-700'>Baby Food </h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>Ergonomic Linen Pants</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>*****</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>$25</h1>
                        </div>
                    </div>
                    <div className='my-6 group cursor-pointer border-2 border-black hover:border-green-700 hover:border-2 duration-200 p-2 flex rounded-lg justify-start items-center gap-10'>
                        <div className='overflow-hidden'>
                            <img src={prod1} alt="" className='h-32 w-32 group-hover:scale-110 duration-300' />
                        </div>
                        <div className=''>
                            <h1 className='text-base hover:text-green-700'>Baby Food </h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>Ergonomic Linen Pants</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>*****</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>$25</h1>
                        </div>
                    </div>
                    <div className='my-6 group cursor-pointer border-2 border-black hover:border-green-700 hover:border-2 duration-200 p-2 flex rounded-lg justify-start items-center gap-10'>
                        <div className='overflow-hidden'>
                            <img src={prod1} alt="" className='h-32 w-32 group-hover:scale-110 duration-300' />
                        </div>
                        <div className=''>
                            <h1 className='text-base hover:text-green-700'>Baby Food </h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>Ergonomic Linen Pants</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>*****</h1>
                            <h1 className='text-lg font-medium hover:text-green-700'>$25</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSelling