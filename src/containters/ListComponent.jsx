import React from 'react'
import ReactPaginate from "react-paginate";
import GeoLocationComponent from '../components/GeoLocationComponent';
import SearchContainer from '../containters/SearchContainer';


class ListComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0
        }
    }

    setCurrentPage = (page) => {
        this.setState({
            currentPage: page
        })
    }

    handlePageClick = ({ selected: selectedPage }) => {
        this.setCurrentPage(selectedPage);
    }

    render() {

        const {geoLocationList, handleDeleteButton, handleSearch, handleGetButtonClick} = this.props

        const PER_PAGE = 3;
        const offset = this.state.currentPage * PER_PAGE;
        const currentPageData = geoLocationList ? geoLocationList.slice(offset, offset + PER_PAGE).map((geo_loc) => <GeoLocationComponent handleDeleteButton={handleDeleteButton} geoId={geo_loc.id} key={geo_loc.id} geoData={geo_loc}/>) : null
        const pageCount = geoLocationList && Math.ceil(geoLocationList.length / PER_PAGE);

        const geo_loc = geoLocationList ? geoLocationList.map(geo_loc => {
            return (<GeoLocationComponent handleDeleteButton={handleDeleteButton} geoId={geo_loc.id} key={geo_loc.id} geoData={geo_loc}/>)
        }) : null

        return (<div>
            {/* <Pagination {...paginationConfig} /> */}
            <SearchContainer handleSearch={handleSearch} handleGetButtonClick={handleGetButtonClick}/>
            <h1>List of geo locations</h1>
            {currentPageData}
            <div className='table'>
            <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                pageCount={pageCount}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                previousLinkClassName={"pagination__link"}
                nextLinkClassName={"pagination__link"}
                disabledClassName={"pagination__link--disabled"}
                activeClassName={"pagination__link--active"}
            />
            </div>
        </div>)
    }
}

export default ListComponent;