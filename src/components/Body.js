import { Style } from '@mui/icons-material';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


const Body = () => {
  
  return (
    <>
     <div class="hero" src={Style}>
     <Carousel>
      <Carousel.Item>
        <img class="w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/July/Apay/Deals-Unrec-PC-3000_2._CB598748121_.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
      <img  class="w-100"src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/ATF/revised/new/Skincare-Herofader-PC._CB594538667_.jpg"/>
      </Carousel.Item>
      <Carousel.Item>
      <img class="w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2023/BAU2023/ATFGW/Home_mela_july_3000x1200._CB598959250_.jpg"/>
      </Carousel.Item>
    </Carousel>
                </div>
                
                <div class="category d-flex  flex-wrap justify-content-evenly p-3">
                    <div class=" p-3 col-lg-3 col-md-6 col-sm-12">
                        <div class="bg-white">
                   <h5 class="ps-4 pt-2">Up to 70% off |<br/> Clearance store</h5>
                   <img  class="w-100 p-4" src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"/>
                   <a href=""class="text-decoration-none">see more</a>
                   </div>
                </div>
 


            
                    <div class=" p-3 col-lg-3 col-md-6 col-sm-12">
                        <div class="bg-white">
                        <h5 class="ps-4 pt-2">Marvel's Wastelanders: Star-Lord, on Audible</h5>
                            <img class="w-100 p-4" src="https://images-eu.ssl-images-amazon.com/images/G/31/AudibleIN/Amazon_Marvel_379x304_under50kb._SY304_CB602679911_.jpg"/>
                            <a href=""class="text-decoration-none">see more</a>
                        </div>
                    </div>


                    <div class=" p-3 col-lg-3 col-md-6 col-sm-12">
                        <div class="bg-white">
                        <h5 class="ps-4 pt-2">Hip Hop India | Watch Now Only on miniTV</h5>
                        <img class="w-100 p-4"src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/HipHopIndia/Desktop_CC/GOVO_updated/DeskCC-379x304_Hip-Hop-India_V1-remo._SY304_CB600434490_.jpg"/>
                        <a href=""class="text-decoration-none">Watch For Free|mini tv</a>
                        </div>
                    </div>

                <div class=" p-3 col-lg-3 col-md-6 col-sm-12">
                    <div class="bg-white">
                    <h5 class="ps-4 pt-2">Up to 60% off |<br/> Styles for men</h5>
                    <div class="d-flex justify-content-evenly">
                        <div class="item p-3">
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg"/>
                            <p>Clothing</p>
                        </div>
                        <div class="item p-3">
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg"/>
                            <p>footwear</p>
                             </div>

                    </div>
                    <div class="d-flex justify-content-evenly">
                        <div class="item p-3">
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg"/>
                            <p>Watches</p>
                        </div>
                        <div class="item p-3">
                            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg"/>
                            <p>Bags & luggage</p>
                             </div>
                             
                </div>
                <a href="" class="text-decoration-none">see more</a>
            </div>
            
            </div>
            </div>
            
    </>
    

    
  );
}

export default Body