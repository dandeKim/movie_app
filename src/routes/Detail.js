import React from "react";
import "./Detail.css"

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            console.log(location.state);

            return (
                <div className="container movie-detail__container">
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <div className="movie-detail__info">
                        <h1 className="movie-detail__title">{location.state.title}</h1>
                        <h4 className="movie-detail__year">{location.state.year}</h4>
                        <ul className="movie-detail__genres">
                            {location.state.genres.map((genre, index) => (
                                <li key={index} className="movie-detail__genres__genre">{genre}</li>
                            ))}
                        </ul>
                        <p className="movie-detail__summary">{location.state.summary}</p>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;