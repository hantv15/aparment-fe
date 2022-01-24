import React from 'react';
import Main from '../layout/Main';
const View = () => {
    return <div>
        <Main title='Căn Hộ'>
            <div className="card card-custom">
                <div className="card-header flex-wrap border-0 pt-6 pb-0">
                    <div className="card-title">
                        <h3 className="card-label">HTML Table
                            <span className="d-block text-muted pt-2 font-size-sm">Datatable initialized from HTML table</span></h3>
                    </div>
                    <div className="card-toolbar">
                        {/*begin::Dropdown*/}
                        <div className="dropdown dropdown-inline mr-2">
                            <button type="button" className="btn btn-light-primary font-weight-bolder dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="svg-icon svg-icon-md">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/Design/PenAndRuller.svg*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                            <rect x={0} y={0} width={24} height={24} />
                                            <path d="M3,16 L5,16 C5.55228475,16 6,15.5522847 6,15 C6,14.4477153 5.55228475,14 5,14 L3,14 L3,12 L5,12 C5.55228475,12 6,11.5522847 6,11 C6,10.4477153 5.55228475,10 5,10 L3,10 L3,8 L5,8 C5.55228475,8 6,7.55228475 6,7 C6,6.44771525 5.55228475,6 5,6 L3,6 L3,4 C3,3.44771525 3.44771525,3 4,3 L10,3 C10.5522847,3 11,3.44771525 11,4 L11,19 C11,19.5522847 10.5522847,20 10,20 L4,20 C3.44771525,20 3,19.5522847 3,19 L3,16 Z" fill="#000000" opacity="0.3" />
                                            <path d="M16,3 L19,3 C20.1045695,3 21,3.8954305 21,5 L21,15.2485298 C21,15.7329761 20.8241635,16.200956 20.5051534,16.565539 L17.8762883,19.5699562 C17.6944473,19.7777745 17.378566,19.7988332 17.1707477,19.6169922 C17.1540423,19.602375 17.1383289,19.5866616 17.1237117,19.5699562 L14.4948466,16.565539 C14.1758365,16.200956 14,15.7329761 14,15.2485298 L14,5 C14,3.8954305 14.8954305,3 16,3 Z" fill="#000000" />
                                        </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                </span>Export</button>
                            {/*begin::Dropdown Menu*/}
                            <div className="dropdown-menu dropdown-menu-sm dropdown-menu-right">
                                {/*begin::Navigation*/}
                                <ul className="navi flex-column navi-hover py-2">
                                    <li className="navi-header font-weight-bolder text-uppercase font-size-sm text-primary pb-2">Choose an option:</li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="la la-print" />
                                            </span>
                                            <span className="navi-text">Print</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="la la-copy" />
                                            </span>
                                            <span className="navi-text">Copy</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="la la-file-excel-o" />
                                            </span>
                                            <span className="navi-text">Excel</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="la la-file-text-o" />
                                            </span>
                                            <span className="navi-text">CSV</span>
                                        </a>
                                    </li>
                                    <li className="navi-item">
                                        <a href="#" className="navi-link">
                                            <span className="navi-icon">
                                                <i className="la la-file-pdf-o" />
                                            </span>
                                            <span className="navi-text">PDF</span>
                                        </a>
                                    </li>
                                </ul>
                                {/*end::Navigation*/}
                            </div>
                            {/*end::Dropdown Menu*/}
                        </div>
                        {/*end::Dropdown*/}
                        {/*begin::Button*/}
                        <a href="#" className="btn btn-primary font-weight-bolder">
                            <span className="svg-icon svg-icon-md">
                                {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Flatten.svg*/}
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={0} y={0} width={24} height={24} />
                                        <circle fill="#000000" cx={9} cy={15} r={6} />
                                        <path d="M8.8012943,7.00241953 C9.83837775,5.20768121 11.7781543,4 14,4 C17.3137085,4 20,6.6862915 20,10 C20,12.2218457 18.7923188,14.1616223 16.9975805,15.1987057 C16.9991904,15.1326658 17,15.0664274 17,15 C17,10.581722 13.418278,7 9,7 C8.93357256,7 8.86733422,7.00080962 8.8012943,7.00241953 Z" fill="#000000" opacity="0.3" />
                                    </g>
                                </svg>
                                {/*end::Svg Icon*/}
                            </span>New Record</a>
                        {/*end::Button*/}
                    </div>
                </div>
                <div className="card-body">
                    {/*begin: Search Form*/}
                    {/*begin::Search Form*/}
                    <div className="mb-7">
                        <div className="row align-items-center">
                            <div className="col-lg-9 col-xl-8">
                                <div className="row align-items-center">
                                    <div className="col-md-4 my-2 my-md-0">
                                        <div className="input-icon">
                                            <input type="text" className="form-control" placeholder="Search..." id="kt_datatable_search_query" />
                                            <span>
                                                <i className="flaticon2-search-1 text-muted" />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2 my-md-0">
                                        <div className="d-flex align-items-center">
                                            <label className="mr-3 mb-0 d-none d-md-block">Status:</label>
                                            <div className="dropdown bootstrap-select form-control"><select className="form-control" id="kt_datatable_search_status">
                                                <option value>All</option>
                                                <option value={1}>Pending</option>
                                                <option value={2}>Delivered</option>
                                                <option value={3}>Canceled</option>
                                                <option value={4}>Success</option>
                                                <option value={5}>Info</option>
                                                <option value={6}>Danger</option>
                                            </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-1" aria-haspopup="listbox" aria-expanded="false" data-id="kt_datatable_search_status" title="All"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">All</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-1" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 my-2 my-md-0">
                                        <div className="d-flex align-items-center">
                                            <label className="mr-3 mb-0 d-none d-md-block">Type:</label>
                                            <div className="dropdown bootstrap-select form-control"><select className="form-control" id="kt_datatable_search_type">
                                                <option value>All</option>
                                                <option value={1}>Online</option>
                                                <option value={2}>Retail</option>
                                                <option value={3}>Direct</option>
                                            </select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light bs-placeholder" data-toggle="dropdown" role="combobox" aria-owns="bs-select-2" aria-haspopup="listbox" aria-expanded="false" data-id="kt_datatable_search_type" title="All"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">All</div></div> </div></button><div className="dropdown-menu "><div className="inner show" role="listbox" id="bs-select-2" tabIndex={-1}><ul className="dropdown-menu inner show" role="presentation" /></div></div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-xl-4 mt-5 mt-lg-0">
                                <a href="#" className="btn btn-light-primary px-6 font-weight-bold">Search</a>
                            </div>
                        </div>
                    </div>
                    {/*end::Search Form*/}
                    {/*end: Search Form*/}
                    {/*begin: Datatable*/}
                    <div className="datatable datatable-default datatable-primary datatable-loaded"><table className="datatable-bordered datatable-head-custom datatable-table" id="kt_datatable" style={{ display: 'block' }}>
                        <thead className="datatable-head"><tr className="datatable-row" style={{ left: 0 }}><th className="datatable-cell datatable-toggle-detail"><span /></th><th data-field="Order ID" className="datatable-cell datatable-cell-sort datatable-cell-sorted" data-sort="desc"><span style={{ width: 116 }}>Order ID<i className="flaticon2-arrow-down" /></span></th><th data-field="Car Make" className="datatable-cell datatable-cell-sort"><span style={{ width: 116 }}>Car Make</span></th><th data-field="Car Model" className="datatable-cell datatable-cell-sort"><span style={{ width: 116 }}>Car Model</span></th><th data-field="Color" className="datatable-cell datatable-cell-sort"><span style={{ width: 116 }}>Color</span></th><th data-field="Deposit Paid" className="datatable-cell datatable-cell-sort"><span style={{ width: 116 }}>Deposit Paid</span></th><th data-field="Order Date" className="datatable-cell datatable-cell-sort" style={{ display: 'none' }}><span style={{ width: 116 }}>Order Date</span></th><th data-field="Status" data-autohide-disabled="false" className="datatable-cell datatable-cell-sort"><span style={{ width: 116 }}>Status</span></th><th data-field="Type" data-autohide-disabled="false" className="datatable-cell datatable-cell-sort"><span style={{ width: 116 }}>Type</span></th></tr></thead>
                        <tbody style={{}} className="datatable-body"><tr data-row={0} className="datatable-row" style={{ left: 0 }}><td className="datatable-cell datatable-toggle-detail"><a className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a></td><td className="datatable-cell-sorted datatable-cell" data-field="Order ID" aria-label="76260-105"><span style={{ width: 116 }}>76260-105</span></td><td data-field="Car Make" aria-label="Buick" className="datatable-cell"><span style={{ width: 116 }}>Buick</span></td><td data-field="Car Model" aria-label="Riviera" className="datatable-cell"><span style={{ width: 116 }}>Riviera</span></td><td data-field="Color" aria-label="Aquamarine" className="datatable-cell"><span style={{ width: 116 }}>Aquamarine</span></td><td data-field="Deposit Paid" aria-label="$73556.08" className="datatable-cell"><span style={{ width: 116 }}>$73556.08</span></td><td data-field="Order Date" aria-label="2017-02-09" className="datatable-cell" style={{ display: 'none' }}><span style={{ width: 116 }}>2017-02-09</span></td><td data-field="Status" data-autohide-disabled="false" aria-label={6} className="datatable-cell"><span style={{ width: 116 }}><span className="label font-weight-bold label-lg label-light-danger label-inline">Danger</span></span></td><td data-field="Type" data-autohide-disabled="false" aria-label={3} className="datatable-cell"><span style={{ width: 116 }}><span className="label label-success label-dot mr-2" /><span className="font-weight-bold text-success">Direct</span></span></td></tr><tr data-row={1} className="datatable-row datatable-row-even" style={{ left: 0 }}><td className="datatable-cell datatable-toggle-detail"><a className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a></td><td className="datatable-cell-sorted datatable-cell" data-field="Order ID" aria-label="76214-032"><span style={{ width: 116 }}>76214-032</span></td><td data-field="Car Make" aria-label="Chrysler" className="datatable-cell"><span style={{ width: 116 }}>Chrysler</span></td><td data-field="Car Model" aria-label="Pacifica" className="datatable-cell"><span style={{ width: 116 }}>Pacifica</span></td><td data-field="Color" aria-label="Orange" className="datatable-cell"><span style={{ width: 116 }}>Orange</span></td><td data-field="Deposit Paid" aria-label="$90127.90" className="datatable-cell"><span style={{ width: 116 }}>$90127.90</span></td><td data-field="Order Date" aria-label="2016-12-20" className="datatable-cell" style={{ display: 'none' }}><span style={{ width: 116 }}>2016-12-20</span></td><td data-field="Status" data-autohide-disabled="false" aria-label={6} className="datatable-cell"><span style={{ width: 116 }}><span className="label font-weight-bold label-lg label-light-danger label-inline">Danger</span></span></td><td data-field="Type" data-autohide-disabled="false" aria-label={1} className="datatable-cell"><span style={{ width: 116 }}><span className="label label-danger label-dot mr-2" /><span className="font-weight-bold text-danger">Online</span></span></td></tr><tr data-row={2} className="datatable-row" style={{ left: 0 }}><td className="datatable-cell datatable-toggle-detail"><a className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a></td><td className="datatable-cell-sorted datatable-cell" data-field="Order ID" aria-label="76168-009"><span style={{ width: 116 }}>76168-009</span></td><td data-field="Car Make" aria-label="Chevrolet" className="datatable-cell"><span style={{ width: 116 }}>Chevrolet</span></td><td data-field="Car Model" aria-label="Tahoe" className="datatable-cell"><span style={{ width: 116 }}>Tahoe</span></td><td data-field="Color" aria-label="Blue" className="datatable-cell"><span style={{ width: 116 }}>Blue</span></td><td data-field="Deposit Paid" aria-label="$82565.90" className="datatable-cell"><span style={{ width: 116 }}>$82565.90</span></td><td data-field="Order Date" aria-label="2016-12-25" className="datatable-cell" style={{ display: 'none' }}><span style={{ width: 116 }}>2016-12-25</span></td><td data-field="Status" data-autohide-disabled="false" aria-label={3} className="datatable-cell"><span style={{ width: 116 }}><span className="label font-weight-bold label-lg label-light-primary label-inline">Canceled</span></span></td><td data-field="Type" data-autohide-disabled="false" aria-label={3} className="datatable-cell"><span style={{ width: 116 }}><span className="label label-success label-dot mr-2" /><span className="font-weight-bold text-success">Direct</span></span></td></tr><tr data-row={3} className="datatable-row datatable-row-even" style={{ left: 0 }}><td className="datatable-cell datatable-toggle-detail"><a className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a></td><td className="datatable-cell-sorted datatable-cell" data-field="Order ID" aria-label="69015-110"><span style={{ width: 116 }}>69015-110</span></td><td data-field="Car Make" aria-label="Ford" className="datatable-cell"><span style={{ width: 116 }}>Ford</span></td><td data-field="Car Model" aria-label="F-Series" className="datatable-cell"><span style={{ width: 116 }}>F-Series</span></td><td data-field="Color" aria-label="Goldenrod" className="datatable-cell"><span style={{ width: 116 }}>Goldenrod</span></td><td data-field="Deposit Paid" aria-label="$58325.82" className="datatable-cell"><span style={{ width: 116 }}>$58325.82</span></td><td data-field="Order Date" aria-label="2017-12-10" className="datatable-cell" style={{ display: 'none' }}><span style={{ width: 116 }}>2017-12-10</span></td><td data-field="Status" data-autohide-disabled="false" aria-label={3} className="datatable-cell"><span style={{ width: 116 }}><span className="label font-weight-bold label-lg label-light-primary label-inline">Canceled</span></span></td><td data-field="Type" data-autohide-disabled="false" aria-label={3} className="datatable-cell"><span style={{ width: 116 }}><span className="label label-success label-dot mr-2" /><span className="font-weight-bold text-success">Direct</span></span></td></tr><tr data-row={4} className="datatable-row" style={{ left: 0 }}><td className="datatable-cell datatable-toggle-detail"><a className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a></td><td className="datatable-cell-sorted datatable-cell" data-field="Order ID" aria-label="68428-047"><span style={{ width: 116 }}>68428-047</span></td><td data-field="Car Make" aria-label="Kia" className="datatable-cell"><span style={{ width: 116 }}>Kia</span></td><td data-field="Car Model" aria-label="Mentor" className="datatable-cell"><span style={{ width: 116 }}>Mentor</span></td><td data-field="Color" aria-label="Pink" className="datatable-cell"><span style={{ width: 116 }}>Pink</span></td><td data-field="Deposit Paid" aria-label="$20117.71" className="datatable-cell"><span style={{ width: 116 }}>$20117.71</span></td><td data-field="Order Date" aria-label="2016-12-03" className="datatable-cell" style={{ display: 'none' }}><span style={{ width: 116 }}>2016-12-03</span></td><td data-field="Status" data-autohide-disabled="false" aria-label={1} className="datatable-cell"><span style={{ width: 116 }}><span className="label font-weight-bold label-lg label-light-warning label-inline">Pending</span></span></td><td data-field="Type" data-autohide-disabled="false" aria-label={1} className="datatable-cell"><span style={{ width: 116 }}><span className="label label-danger label-dot mr-2" /><span className="font-weight-bold text-danger">Online</span></span></td></tr><tr data-row={5} className="datatable-row datatable-row-even" style={{ left: 0 }}><td className="datatable-cell datatable-toggle-detail"><a className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a></td><td className="datatable-cell-sorted datatable-cell" data-field="Order ID" aria-label="68391-319"><span style={{ width: 116 }}>68391-319</span></td><td data-field="Car Make" aria-label="Mercury" className="datatable-cell"><span style={{ width: 116 }}>Mercury</span></td><td data-field="Car Model" aria-label="Mystique" className="datatable-cell"><span style={{ width: 116 }}>Mystique</span></td><td data-field="Color" aria-label="Maroon" className="datatable-cell"><span style={{ width: 116 }}>Maroon</span></td><td data-field="Deposit Paid" aria-label="$94443.18" className="datatable-cell"><span style={{ width: 116 }}>$94443.18</span></td><td data-field="Order Date" aria-label="2017-01-19" className="datatable-cell" style={{ display: 'none' }}><span style={{ width: 116 }}>2017-01-19</span></td><td data-field="Status" data-autohide-disabled="false" aria-label={6} className="datatable-cell"><span style={{ width: 116 }}><span className="label font-weight-bold label-lg label-light-danger label-inline">Danger</span></span></td><td data-field="Type" data-autohide-disabled="false" aria-label={1} className="datatable-cell"><span style={{ width: 116 }}><span className="label label-danger label-dot mr-2" /><span className="font-weight-bold text-danger">Online</span></span></td></tr><tr data-row={6} className="datatable-row" style={{ left: 0 }}><td className="datatable-cell datatable-toggle-detail"><a className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a></td><td className="datatable-cell-sorted datatable-cell" data-field="Order ID" aria-label="68180-882"><span style={{ width: 116 }}>68180-882</span></td><td data-field="Car Make" aria-label="Peugeot" className="datatable-cell"><span style={{ width: 116 }}>Peugeot</span></td><td data-field="Car Model" aria-label={207} className="datatable-cell"><span style={{ width: 116 }}>207</span></td><td data-field="Color" aria-label="Green" className="datatable-cell"><span style={{ width: 116 }}>Green</span></td><td data-field="Deposit Paid" aria-label="$39938.08" className="datatable-cell"><span style={{ width: 116 }}>$39938.08</span></td><td data-field="Order Date" aria-label="2017-11-09" className="datatable-cell" style={{ display: 'none' }}><span style={{ width: 116 }}>2017-11-09</span></td><td data-field="Status" data-autohide-disabled="false" aria-label={4} className="datatable-cell"><span style={{ width: 116 }}><span className="label font-weight-bold label-lg label-light-success label-inline">Success</span></span></td><td data-field="Type" data-autohide-disabled="false" aria-label={3} className="datatable-cell"><span style={{ width: 116 }}><span className="label label-success label-dot mr-2" /><span className="font-weight-bold text-success">Direct</span></span></td></tr><tr data-row={7} className="datatable-row datatable-row-even" style={{ left: 0 }}><td className="datatable-cell datatable-toggle-detail"><a className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a></td><td className="datatable-cell-sorted datatable-cell" data-field="Order ID" aria-label="66761-122"><span style={{ width: 116 }}>66761-122</span></td><td data-field="Car Make" aria-label="Pontiac" className="datatable-cell"><span style={{ width: 116 }}>Pontiac</span></td><td data-field="Car Model" aria-label="Trans Sport" className="datatable-cell"><span style={{ width: 116 }}>Trans Sport</span></td><td data-field="Color" aria-label="Mauv" className="datatable-cell"><span style={{ width: 116 }}>Mauv</span></td><td data-field="Deposit Paid" aria-label="$28790.67" className="datatable-cell"><span style={{ width: 116 }}>$28790.67</span></td><td data-field="Order Date" aria-label="2016-05-14" className="datatable-cell" style={{ display: 'none' }}><span style={{ width: 116 }}>2016-05-14</span></td><td data-field="Status" data-autohide-disabled="false" aria-label={3} className="datatable-cell"><span style={{ width: 116 }}><span className="label font-weight-bold label-lg label-light-primary label-inline">Canceled</span></span></td><td data-field="Type" data-autohide-disabled="false" aria-label={1} className="datatable-cell"><span style={{ width: 116 }}><span className="label label-danger label-dot mr-2" /><span className="font-weight-bold text-danger">Online</span></span></td></tr><tr data-row={8} className="datatable-row" style={{ left: 0 }}><td className="datatable-cell datatable-toggle-detail"><a className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a></td><td className="datatable-cell-sorted datatable-cell" data-field="Order ID" aria-label="66403-315"><span style={{ width: 116 }}>66403-315</span></td><td data-field="Car Make" aria-label="GMC" className="datatable-cell"><span style={{ width: 116 }}>GMC</span></td><td data-field="Car Model" aria-label="Jimmy" className="datatable-cell"><span style={{ width: 116 }}>Jimmy</span></td><td data-field="Color" aria-label="Goldenrod" className="datatable-cell"><span style={{ width: 116 }}>Goldenrod</span></td><td data-field="Deposit Paid" aria-label="$55141.29" className="datatable-cell"><span style={{ width: 116 }}>$55141.29</span></td><td data-field="Order Date" aria-label="2017-04-29" className="datatable-cell" style={{ display: 'none' }}><span style={{ width: 116 }}>2017-04-29</span></td><td data-field="Status" data-autohide-disabled="false" aria-label={3} className="datatable-cell"><span style={{ width: 116 }}><span className="label font-weight-bold label-lg label-light-primary label-inline">Canceled</span></span></td><td data-field="Type" data-autohide-disabled="false" aria-label={2} className="datatable-cell"><span style={{ width: 116 }}><span className="label label-primary label-dot mr-2" /><span className="font-weight-bold text-primary">Retail</span></span></td></tr><tr data-row={9} className="datatable-row datatable-row-even" style={{ left: 0 }}><td className="datatable-cell datatable-toggle-detail"><a className="datatable-toggle-detail" href><i className="fa fa-caret-right" /></a></td><td className="datatable-cell-sorted datatable-cell" data-field="Order ID" aria-label="66116-471"><span style={{ width: 116 }}>66116-471</span></td><td data-field="Car Make" aria-label="GMC" className="datatable-cell"><span style={{ width: 116 }}>GMC</span></td><td data-field="Car Model" aria-label="Vandura G2500" className="datatable-cell"><span style={{ width: 116 }}>Vandura G2500</span></td><td data-field="Color" aria-label="Pink" className="datatable-cell"><span style={{ width: 116 }}>Pink</span></td><td data-field="Deposit Paid" aria-label="$41272.55" className="datatable-cell"><span style={{ width: 116 }}>$41272.55</span></td><td data-field="Order Date" aria-label="2016-08-16" className="datatable-cell" style={{ display: 'none' }}><span style={{ width: 116 }}>2016-08-16</span></td><td data-field="Status" data-autohide-disabled="false" aria-label={5} className="datatable-cell"><span style={{ width: 116 }}><span className="label font-weight-bold label-lg label-light-info label-inline">Info</span></span></td><td data-field="Type" data-autohide-disabled="false" aria-label={2} className="datatable-cell"><span style={{ width: 116 }}><span className="label label-primary label-dot mr-2" /><span className="font-weight-bold text-primary">Retail</span></span></td></tr></tbody>
                    </table><div className="datatable-pager datatable-paging-loaded"><ul className="datatable-pager-nav my-2 mb-sm-0"><li><a title="First" className="datatable-pager-link datatable-pager-link-first datatable-pager-link-disabled" data-page={1} disabled="disabled"><i className="flaticon2-fast-back" /></a></li><li><a title="Previous" className="datatable-pager-link datatable-pager-link-prev datatable-pager-link-disabled" data-page={1} disabled="disabled"><i className="flaticon2-back" /></a></li><li style={{}} /><li style={{ display: 'none' }}><input type="text" className="datatable-pager-input form-control" title="Page number" /></li><li><a className="datatable-pager-link datatable-pager-link-number datatable-pager-link-active" data-page={1} title={1}>1</a></li><li><a className="datatable-pager-link datatable-pager-link-number" data-page={2} title={2}>2</a></li><li><a className="datatable-pager-link datatable-pager-link-number" data-page={3} title={3}>3</a></li><li><a className="datatable-pager-link datatable-pager-link-number" data-page={4} title={4}>4</a></li><li><a className="datatable-pager-link datatable-pager-link-number" data-page={5} title={5}>5</a></li><li /><li><a title="Next" className="datatable-pager-link datatable-pager-link-next" data-page={2}><i className="flaticon2-next" /></a></li><li><a title="Last" className="datatable-pager-link datatable-pager-link-last" data-page={15}><i className="flaticon2-fast-next" /></a></li></ul><div className="datatable-pager-info my-2 mb-sm-0"><div className="dropdown bootstrap-select datatable-pager-size dropup" style={{ width: 60 }}><select className="selectpicker datatable-pager-size" title="Select page size" data-width="60px" data-container="body" data-selected={10} tabIndex="null"><option className="bs-title-option" value /><option value={5}>5</option><option value={10}>10</option><option value={20}>20</option><option value={30}>30</option><option value={50}>50</option><option value={100}>100</option></select><button type="button" tabIndex={-1} className="btn dropdown-toggle btn-light" data-toggle="dropdown" role="combobox" aria-owns="bs-select-3" aria-haspopup="listbox" aria-expanded="false" title="Select page size"><div className="filter-option"><div className="filter-option-inner"><div className="filter-option-inner-inner">10</div></div> </div></button></div><span className="datatable-pager-detail">Showing 1 - 10 of 143</span></div></div></div>
                    {/*end: Datatable*/}
                </div>
            </div>

        </Main>
    </div>;
};

export default View;
