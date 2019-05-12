import React from 'react';
import '../style/style.css';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="row">     
                <div className="col-md-12">
                    <div className="text-center errStyle">
                        <h1 className="font-weight-bolder">Error 404</h1>
                        <h5>Page not Found !!!</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorPage;