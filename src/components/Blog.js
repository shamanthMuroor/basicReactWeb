import React from 'react';

class Blog extends React.Component {
    render() {
        return (
            <div className="row about">
            <div className="col-md-8 bg-light">
                 <h4>Blog</h4>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-2">
                 <h5 className=" text-center">Sidebar</h5>
                 <ul type="disc">
                     <li>1</li>
                     <li>2</li>
                     <li>3</li>
                     <li>4</li>
                 </ul>
            </div>
        </div>
        )
    }
}

export default Blog;