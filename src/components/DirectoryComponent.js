import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

// change to campsites.campsites
function Directory(props) {
    const directory = props.campsites.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-5 m-1">
               <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    if (props.campsites.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Loading />   
                    </div>
                </div>
            </div>
        );
    }
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.campsites.errMess}</h4>   
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb className="mb-0">
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                </div>   
            </div>
            <div className="row cardpic-div">
                {directory}
            </div>
            
        </div>
    );

}


export default Directory;