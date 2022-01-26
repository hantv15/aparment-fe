import React from 'react';

const Layout = ({ title = "title", description = "Description", className, children }) => {
    return (
        <div className="container">
            <div className="p-5 mb-4 bg-light text-light rounded-3 bg-dark">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{title}</h1>
                    <p className="col-md-8 fs-4">{description}</p>
                </div>
            </div>
            <main>
                {children}
            </main>
        </div>
    )
};

export default Layout;
