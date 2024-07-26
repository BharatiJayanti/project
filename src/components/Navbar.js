import { LocationOn, MenuRounded, Search, SearchOffOutlined, SearchOutlined, ShoppingCart } from '@mui/icons-material';
import { Menu } from '@mui/material';
import React from 'react'
import Style from '../assets/css/Style.css'
import Dropdown from 'react-bootstrap/Dropdown';
import Amazon from '../assets/images/Amazon.png'

        

        
        export const Navbar = () => {
            return(
                <>
                
                <div class="navbar navbar-default py-0 container-fluid bg-black text-white mt-15  d-lg-flex d-sm-none d-md-flex d-lg-12" src={Style}>
                  <div class="navbar-header">
                  <img class="logo" src={Amazon}/>
                    
                  </div>
                  <div class="d-flex align-items-center">
                    
                    
                    
                  
                  <div class="d-flex">
                    <LocationOn/>
                    <div>
                   <p>hello</p>
                    <h5>select your address</h5>
                    </div>
                  </div>
                </div>
                  <div class="search-container d-flex align-items-center bg-white text-black rounded ">
                    <div class="dropdown">
                    <Dropdown>
                    <Dropdown.Toggle variant="light">
                     All
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>
                  
                  

                    </div>
                    <input type="text" placeholder="Search Amazon.in" />
                    <button class="bg-warning rounded-pe">
                        <Search/>
                    

                        </button>
                    
                </div>
                    <div class="d-flex">
                        
                        <h5>EN</h5>
                    </div>
                    <div>
                        <p>hello,signin</p>
                        <h5>Accounts&Lists</h5>
                    </div>
                    <div>
                        <p>Returns</p>
                        <h5>&Orders</h5>
                    </div>
                    <div class="d-flex">
                        <ShoppingCart/>
                        <h5>Carts</h5>
                    </div>

                  </div>
                  <div class="container-fluid bg-secondary text-white justify-content-between">
                    <div class="d-flex align-items-center">
                        <MenuRounded/>
                        <h5>All</h5>
                        </div>
                        
                    <a href=""class="text-white text-decoration-none">Amazon miniTv</a>
                    <a href=""class="text-white text-decoration-none">Sell</a>
                    <a href=""class="text-white text-decoration-none">Best Sellers</a>
                    <a href=""class="text-white text-decoration-none">Today's Deals</a>
                    <a href=""class="text-white text-decoration-none">Mobiles</a>
                    <a href=""class="text-white text-decoration-none">Electronics</a>
                    <a href=""class="text-white text-decoration-none">New releases</a>
                    <a href=""class="text-white text-decoration-none">Prime</a>
                    <a href=""class="text-white text-decoration-none">Medicines</a>
                    
                     <div class="d-flex align-items-center">
                        <h6 class="text-light">New Launches from Mobiles,Electronics & more|Shop now</h6>
                    </div>
                    </div>
                
               
                
                 
</>

            );
        }
        export default Navbar