import React from 'react';

const Header = () => {
    return <div>
        {/*begin::Header*/}
        <div id="kt_header" className="header header-fixed">
            {/*begin::Container*/}
            <div className="container-fluid d-flex align-items-stretch justify-content-between">
                {/*begin::Header Menu Wrapper*/}
                <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                    {/*begin::Header Menu*/}
                    <div id="kt_header_menu" className="header-menu header-menu-mobile header-menu-layout-default">
                    </div>
                    {/*end::Header Menu*/}
                </div>
                {/*end::Header Menu Wrapper*/}
                {/*begin::Topbar*/}
                <div className="topbar">
                    {/*begin::User*/}
                    <div className="topbar-item">
                        <div className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
                            <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
                            <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">Sean</span>
                            <span className="symbol symbol-lg-35 symbol-25 symbol-light-success">
                                <span className="symbol-label font-size-h5 font-weight-bold">S</span>
                            </span>
                        </div>
                    </div>
                    {/*end::User*/}
                </div>
                {/*end::Topbar*/}
            </div>
            {/*end::Container*/}
        </div>
        {/*end::Header*/}
    </div>;
};

export default Header;
