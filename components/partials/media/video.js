import { LazyLoadImage } from "react-lazy-load-image-component";

const Video = (props) =>    {
    return(
        <div className="video-banner video-banner-poster text-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="video-poster">
                        <div className="lazy-overlay"></div>

                        <LazyLoadImage
                            alt="poster"
                            width={500}
                            height={ 390 }
                            src=""
                            threshold={ 200 }
                            effect="opacity"
                        />

                        <div className="video-poster-content">
                            <a
                                href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
                                className="btn-video btn-iframe"
                            >
                                <i className="icon-play"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Video;