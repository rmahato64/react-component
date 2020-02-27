import React, { Component } from 'react'

export default class Footer extends Component{
    render(){
        return(<div>
            <div class="touch">
            <h2>Get in touch with us now</h2>
            <button class="start-button">contact us</button>
        </div>
        <div class="bottom-main">
    
            <div class="bottom">
                <div class="news">
                    <h2>About us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim ultrices hendrerit. Nulla cursus, nisi consectetur gravida varius, sem ex placerat augue, sed ullamcorper dolor arcu varius tellus.
                    </p>
                    <br/>
                    <p>rantaharju 10D<br/> matinkyla <br/> espoo <br/> +44 9822 196</p>
                </div>
                <div class="news">
                    <h2>Latest news</h2>
                    <p>
                        <span>@iamback</span> Just subscribed another great item on #themeforest about 3 hours ago
    
                    </p>
                    <p><span>@saroj</span> Working on an awesome theme for #themeforest about 3 months ago</p>
                </div>
                <div class="news">
                    <h2>Latest posts</h2>
    
                </div>
                <div class="news">
                    <h2>Flickr</h2>
    
                    <div class="flicker">
    
                        <div class="square"></div>
                        <div class="square"></div>
                        <div class="square"></div>
                        <div class="square"></div>
                        <div class="square"></div>
                        <div class="square"></div>
                        <div class="square"></div>
                        <div class="square"></div>
                    </div>
                </div>
    
    
            </div>
        </div>
    
            <footer class="foo">
            <div class="foo-below">
                <div class="footer">
                    <p>Copyright@2019-2020 Integrify IO. All rights reserved.</p>
                </div>
                <div class="social">
                    <div class="fadiv">
                        <i class="fab fa-facebook"></i>
                        <span class="facebook"> Facebook</span>
                    </div>
                    <div class="vidiv">
                        <i class="fab fa-vimeo"></i>
                        <span class="vimeo"> Vimeo</span>
                    </div>
                    <div class="twi">
                        <i class="fab fa-twitter-square"></i>
                        <span class="twitter"> Twitter</span>
                    </div>
                    <div class="insta">
                        <i class="fab fa-instagram"></i>
                        <span class="instagram"> Instagram</span>
                    </div>
                    <div class="pin">
                        
                            <i class="fab fa-pinterest-square"></i>
                        <span class="pinterest"> Pinterese</span>
                    </div>
                    <div class="go">
                            <i class="fab fa-google-plus-square"></i>
                        <span class="google"> Google</span>
                    </div>
    
                </div>
            </div>
    
        </footer>
        </div>


        )
    }
}
