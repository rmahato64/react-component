import React from 'react'
import Thirdpart from './Thirdpart'

const ThirdpartList = ()=>{
    const divDetails = [
        {
            name:"Superbly Responsive",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ultrices hendrerit. Nulla cursus, nisi consectetur gravida varius, sem ex placerat augue, sed ullamcorper dolor arcu varius tellus.",
            logo:<i className="fas fa-mobile-alt"></i> 
        },
        {
            name:"SQUEEKY CLEAN",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ultrices hendrerit. Nulla cursus, nisi consectetur gravida varius, sem ex placerat augue, sed ullamcorper dolor arcu varius tellus.",
            logo:<i className="fas fa-laptop"></i>
        },
        {
            name:"MULTI PURPOSE",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ultrices hendrerit. Nulla cursus, nisi consectetur gravida varius, sem ex placerat augue, sed ullamcorper dolor arcu varius tellus.",
            logo:<i className="fas fa-desktop "></i>
        },
        {

            name:"HIGHLY FLEXIBLE",
            desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ultrices hendrerit. Nulla cursus, nisi consectetur gravida varius, sem ex placerat augue, sed ullamcorper dolor arcu varius tellus.",
            logo:<i className="fas fa-recycle "></i>
        }]
        const detailsArray = divDetails.map((divDetailsCopy ,i)=>{
            return  <Thirdpart key={'key -' + divDetails[i].id} logo = {divDetails[i].logo} name = {divDetails[i].name}  desc={divDetails[i].desc} />

        })


    return(
        <div className='thirdtop'>
           {detailsArray}
        </div>
    )
}

export default ThirdpartList