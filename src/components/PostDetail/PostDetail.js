import React from 'react';
import './PostDetail.js';
const PostDetail = (props) => {
    console.log(props)
    return (
        <div>
            <main>
                <article>
                    <figure>
                        <img src="" alt="" />
                        <figcaption>
                            <h1></h1>
                            <p></p>
                        </figcaption>
                    </figure>
                </article>
                <article>
                    <div>
                        <h3>People</h3>
                        <p></p>
                        <br />

                        <h3>Classification</h3>
                        <p></p>
                        <br />

                        <h3>Date</h3>
                        <p></p>
                        <br />

                        <h3>Culture</h3>
                        <p></p>
                    </div>

                    <div>
                        <h3>Medium</h3>
                        <p></p>
                        <br />

                        <h3>Dimensions</h3>
                        <p></p>
                    </div>
                </article>
            </main>
        </div>
    );
}

export default PostDetail;