import React from 'react';
import { AiOutlineCloudUpload } from "@react-icons/all-files/ai/AiOutlineCloudUpload";

const AddService = () => {
    return (
        <div>
            <form >
                <div className='flex bg-white p-10 m-5'>
                    <div className='mr-5'>
                        <div>
                            <label htmlFor="" className="label"> Service Title</label>
                            <input className='bg-base-200 px-5 w-56 rounded-sm mr-5 mb-3 h-10' type="text" placeholder='Service Title' />
                        </div>
                        <div>
                            <label htmlFor="" className="label"> Service Details</label>
                            <input className='bg-base-200 px-5 w-56 rounded-sm mr-5 mb-3 h-10' type="text" placeholder='service details' />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="label"> Image</label>
                        <label className="label" htmlFor="inputTag" ><span  className='btn bg-white text-headercolor'> <AiOutlineCloudUpload />upload image</span></label>
                        <input id="inputTag" className='bg-base-200 px-5 w-56 rounded-sm mr-5 mb-3 h-10 hidden' type="file" placeholder='service details' />
                    </div>
                </div>
                <div className='flex justify-end mr-10'>
                    <input type="submit" value="Submit" className='btn bg-buttoncolor' />
                </div>
            </form>
        </div>
    );
};

export default AddService;