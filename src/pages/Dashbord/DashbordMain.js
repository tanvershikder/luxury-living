import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import card from '../../Assets/icons/Group.png'
import booking from '../../Assets/icons/Group 1360.png'
import review from '../../Assets/icons/Group 1368.png'

import { GrAdd } from "@react-icons/all-files/gr/GrAdd";
import { HiOutlineShoppingBag } from "@react-icons/all-files/hi/HiOutlineShoppingBag";
import { AiOutlineUserAdd } from "@react-icons/all-files/ai/AiOutlineUserAdd";
import { GrProjects } from "@react-icons/all-files/gr/GrProjects";

const DashbordMain = () => {
    return (
        <div>
            <div class="drawer drawer-mobile bg-bgcolor">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <Outlet class='bg-base-300'></Outlet>
                </div>
                <div class="drawer-side">
                    <label htmlfor="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='booking'><img src={card} alt="" className='h-5 text-headercolor'/> Book</Link></li>
                        <li><Link to='bookinglist'><img src={booking} alt="" className='h-5 text-headercolor'/> Booking List</Link></li>
                        <li><Link to='review'><img src={review} alt="" className='h-5 text-headercolor'/> Review</Link></li>
                        <li><Link to='orderlist'><HiOutlineShoppingBag /  >Order List</Link></li>
                        <li><Link to='addservice'><GrAdd /  >Add service</Link></li>
                        <li><Link to='makeadmin'><AiOutlineUserAdd /  >Make Admin</Link></li>
                        <li><Link to='manageservice'><GrProjects /  >Manage Service</Link></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashbordMain;