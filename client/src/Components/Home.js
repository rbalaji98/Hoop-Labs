/**
 * Created by dandreini16 on 10/28/17.
 */
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {Grid, Button, Header} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom'

const ButtonWrap = withRouter(({ history}) => (

    <Button
        type='button'
        primary={true}

        onClick={() => { history.push('/Matchup') }}

    >
        Start
    </Button>

))

export default class Home extends Component{
    render(){
        return(
            <div align={'center'}>
                <div>
                <br/>


                    <br/>
                    <br/>
                    <img  src={"https://png.icons8.com/?id=12969&size=560"} width={"80px"}/>


                <Header  style={{overflow:'hidden', opacity:'.65'}} size={"huge"} textAlign={"center"}>Hoop Labs</Header>



                    <br/>
                    <br/>
                    <Grid >
                    <Grid.Row centered>
                    <ButtonWrap/>
                    </Grid.Row>
                </Grid>

                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            <div >




                <Particles  params = {{
                    "particles": {
                        "number": {
                            "value": 40,
                            "density": {
                                "enable": true,
                                "value_area": 800
                            }
                        },
                        "color": {
                            "value": "#365289"//"#ffffff"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 0,
                                "color": "#365289"
                            },
                            "polygon": {
                                "nb_sides": 4
                            },
                            "image": {
                                "src": "img/github.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": .6,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#365289",
                            "opacity": .4,
                            "width": .7
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 75
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true,
                    "config_demo": {
                        "hide_card": false,
                        "background_color": "#b61924",
                        "background_image": "",
                        "background_position": "50% 50%",
                        "background_repeat": "no-repeat",
                        "background_size": "cover",
                        "position": 'absolute',
                        "z_postion":'-1'
                    }

                }}/>


            </div>
            </div>
        )
}
}