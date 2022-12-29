import React from "react";
import { Link as LinkR} from "react-router-dom";

const PageBanner = () =>{
    return (
        <section className="pageBanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner_content text-center">
                            <h4 style={{
                                fontSize: "15px"
                            }}>
                                <LinkR to="/">
                                    <a className={`common_btn`}>
                                        <span>
                                            Back to Home
                                        </span>
                                    </a>
                                </LinkR>
                            </h4>
                            <h4>
                                TED<span style={{
                                    textTransform: "lowercase",
                                }}>x</span>IITBhubaneshwar 2023
                            </h4>
                            <h2>Organizing Team</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageBanner;