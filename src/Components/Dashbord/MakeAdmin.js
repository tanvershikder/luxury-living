import React from 'react';

const MakeAdmin = () => {
    return (
        <div>
            <form>
                <div className='flex items-center bg-white p-10 m-5 pb-24'>
                    <div>
                        <label htmlFor="" className="label font-bold"> Email</label>
                        <input className='bg-base-200 px-5 w-56 rounded-sm mr-5 mb-3 h-10' type="text" placeholder='email' />
                    </div>
                    <input type="submit" value="submit" className='btn bg-buttoncolor mt-8'/>
                </div>
            </form>
        </div>
    );
};

export default MakeAdmin;