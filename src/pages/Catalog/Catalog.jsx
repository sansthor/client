import React from 'react';

import { Link } from 'react-router-dom';

function Catalog() {
    return (
        <div>
            <div class="container has-text-centered">
                <h2 class="title">All Services</h2>
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-2by1">
                            <img
                                src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                alt="thumbnail"
                            ></img>
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">John Smith</p>
                                <p class="subtitle is-6">@johnsmith</p>
                            </div>
                        </div>

                        <div class="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Phasellus nec iaculis mauris.
                            <Link>@bulmaio</Link>.<Link href="#">#css</Link>
                            <Link>#responsive</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;
