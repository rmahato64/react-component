import React,{Component} from 'react'
import imgplaceholder from '../assets/img-placeholder.png'

class ImageBlog extends Component{
    render(){
        return(
            <div className="recent-work">
                <div className="recent-work-img">
                   <div> <img src={imgplaceholder} alt="blog-image"/></div>
                    <h3>Blig Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ultrices hendrerit. Nulla cursus, nisi consectetur gravida varius, sem ex placerat augue, sed ullamcorper dolor arcu varius tellus.</p>

                </div>

                <div className="recent-work-img">
                <div> <img src={imgplaceholder} alt="blog-image"/></div>
                    <h3>Blog title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ultrices hendrerit. Nulla cursus, nisi consectetur gravida varius, sem ex placerat augue, sed ullamcorper dolor arcu varius tellus.</p>


                </div>

                <div className="recent-work-img">
                <div> <img src={imgplaceholder} alt="blog-image"/></div>
                    <h3>Blog Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ultrices hendrerit. Nulla cursus, nisi consectetur gravida varius, sem ex placerat augue, sed ullamcorper dolor arcu varius tellus.</p>


                </div>
                </div>


        )
    }
}

export default ImageBlog