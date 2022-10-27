import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>
            <div className='d-flex'>
                <div className='border border-secondary w-50 p-3 m-3'>
                    <h4> what is cors?</h4>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
                <div className='border border-secondary w-50 p-3 m-3'>
                    <h4>Why are we using firebase? What other options do we have to implement authentication?</h4>
                    <p>We are using firebase because of
                        Reliable & Extensive Databases. ...
                        Fast & Safe Hosting. ...
                        Provides A Free Start to Newbies. ...
                        Google Analytics. ...
                        Firebase Cloud Messaging for Cross-Platform. ...
                        Free Multi-Platform Firebase Authentication. ...
                        Firebase Testing Services to Improve App Quality. ...
                        Increment in Revenues with App Indexing API. <br></br><br></br>
                        Top alternatives of firebase for authentication:
                        Auth0,
                        MongoDB,
                        Okta,
                        Keycloak,
                        Amazon Cognito.
                    </p>
                </div>
            </div>
            <div className='d-flex'>
                <div className='border border-secondary w-50 p-3 m-3'>
                    <h4>How does the private route work?</h4>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated. In simple words, These routes can be accessed only after login.</p>
                </div>
                <div className='border border-secondary w-50 p-3 m-3'>
                    <h4>What is Node? How does Node work?</h4>
                    <p>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.<br></br><br></br>
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;