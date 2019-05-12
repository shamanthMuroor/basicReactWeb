import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return (
            <div className="row content">
                <div className="col-md-4 rounded home overflow-hidden">
                    <Link exact path to='./about' className=" text-decoration-none"> 
                        <h4 className="text-center text-uppercase my-2">About</h4>
                    </Link>
                    <hr />
                    <div className="text-left">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic facilis, aspernatur enim id molestiae ut optio aliquam, mollitia assumenda odio unde nemo quasi quas natus! Voluptatibus temporibus eius deserunt.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic facilis, aspernatur enim id molestiae ut optio aliquam, mollitia assumenda odio unde nemo quasi quas natus! Voluptatibus temporibus eius deserunt.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic facilis, aspernatur enim id molestiae ut optio aliquam, mollitia assumenda odio unde nemo quasi quas natus! Voluptatibus temporibus eius deserunt.
                        </p>  
                        <Link exact path to='./about'>Continue Reading...</Link>
                    </div>
                </div>

                <div className="col-md-4 rounded home">
                    <Link exact path to='./services' className=" text-decoration-none"> 
                        <h4 className="text-center text-uppercase my-2">Services</h4>
                    </Link>
                    <hr />
                    <div className="text-center">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic facilis, aspernatur enim id molestiae ut optio aliquam, mollitia assumenda odio unde nemo quasi quas natus! Voluptatibus temporibus eius deserunt.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic facilis, aspernatur enim id molestiae ut optio aliquam, mollitia assumenda odio unde nemo quasi quas natus! Voluptatibus temporibus eius deserunt.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic facilis, aspernatur enim id molestiae ut optio aliquam, mollitia assumenda odio unde nemo quasi quas natus! Voluptatibus temporibus eius deserunt.
                        </p>                    
                        <Link exact path to='./services'>Continue Reading...</Link>
                    </div>
                </div>

                <div className="col-md-4 rounded home">                   
                    <Link exact path to='./blog' className=" text-decoration-none"> 
                        <h4 className="text-center text-uppercase my-2">Blog</h4>
                    </Link>
                    <hr />
                    <div className="text-right">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic facilis, aspernatur enim id molestiae ut optio aliquam, mollitia assumenda odio unde nemo quasi quas natus! Voluptatibus temporibus eius deserunt.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic facilis, aspernatur enim id molestiae ut optio aliquam, mollitia assumenda odio unde nemo quasi quas natus! Voluptatibus temporibus eius deserunt.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores hic facilis, aspernatur enim id molestiae ut optio aliquam, mollitia assumenda odio unde nemo quasi quas natus! Voluptatibus temporibus eius deserunt.
                        </p>                    
                        <Link exact path to='./blog'>Continue Reading...</Link>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Home;