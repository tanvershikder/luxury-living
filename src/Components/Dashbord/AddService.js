import React from 'react';
import { AiOutlineCloudUpload } from "@react-icons/all-files/ai/AiOutlineCloudUpload";
import { useForm } from 'react-hook-form';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';

const AddService = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorage_key = '8c9e657645bc7264c5c4e9c24848e699'

    const onSubmit = async data => {
        const formData = new FormData();
        const image = data.image[0]
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorage_key}`

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                // console.log(result.data.url);
                if (result.success) {
                    const image = result.data.url
                    const service = {
                        service: data.name,
                        price: data.price,
                        details: data.servicedetails,
                        image: image
                    }

                    fetch(`http://localhost:5000/service`,{
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                            
                        },
                        body: JSON.stringify(service)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            console.log(inserted);
                            if (inserted.insertedId) {
                                toast.success('service added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the service')
                            }
                        })
                }

            })


    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex bg-white p-10 m-5'>
                    <div className='mr-5'>
                        <div>
                            <label htmlFor="" className="label text-headercolor font-bold"> Service Title</label>

                            <input
                                type="text"
                                placeholder="Enter service Name"
                                className="bg-base-200 px-5 lg:w-96 rounded-sm mr-5 mb-3 h-10"
                                required
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                            </label>

                        </div>
                        <div>
                            <label htmlFor="" className="label text-headercolor font-bold"> Service Price</label>

                            <input
                                type="number"
                                placeholder="Enter service price"
                                className="bg-base-200 px-5 lg:w-96 rounded-sm mr-5 mb-3 h-10"
                                required
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                            </label>

                        </div>
                        <div>
                            <label htmlFor="" className="label text-headercolor font-bold"> Service Details</label>
                            {/* <textarea name="servicedetails" id="" cols="30" rows="10" className='bg-base-200 px-5 lg:w-96 rounded-sm mr-5 mb-3 h-20' placeholder='service details'></textarea> */}


                            <textarea
                                cols="30"
                                rows="10"
                                placeholder="Enter service Details"
                                className="bg-base-200 px-5 lg:w-96 rounded-sm mr-5 mb-3 h-20 "
                                required
                                {...register("servicedetails", {
                                    required: {
                                        value: true,
                                        message: 'Details is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                            </label>

                        </div>
                    </div>
                    <div>
                        <label htmlFor="" className="label text-headercolor font-bold"> Image</label>
                        <label className="label" htmlFor="inputTag" ><span className='btn bg-white text-headercolor'> <AiOutlineCloudUpload />upload image</span></label>

                        <input
                            id="inputTag"
                            type="file"
                            placeholder="Enter Image"
                            className="bg-base-200 px-5 lg:w-96 rounded-sm mr-5 mb-3 h-10 hidden"
                            required
                            {...register("image", {
                                required: {
                                    value: true,
                                    message: 'Image is Required'
                                }
                            })}
                        />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                        </label>



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