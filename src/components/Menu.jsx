import React, { useState } from 'react'
import a from './Menu.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img_carusel_1 from '../img/carusel.jpg'
import img_carusel_2 from '../img/caruseL_2.jpg'
import img_carusel_3 from '../img/carusel_3.jpg'
import img_carusel_4 from '../img/carusel_4.jpg'
import img_1 from '../img/img_1.png'
import img_2 from '../img/img_2.png'
import img_3 from '../img/kv_1.jpg'
import img_4 from '../img/kv_2.jpg'
import img_5 from '../img/kv_5.jpg'
import img_6 from '../img/kv_6.jpg'
import img_7 from '../img/kv_7.jpg'
import img_8 from '../img/kv_8.jpg'
import img_9 from '../img/kv_9.jpg'
import img_10 from '../img/vtb_color.svg'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';



function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Menu = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className={a.body}>

            <section className={a.menu_carusel}>

                <div className={a.carusel}>


                    <Carousel fade>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_carusel_1}
                                alt="First slide"
                            />
                            <Carousel.Caption>



                                <div className={a.carusel_text}>
                                    <div className={a.carusel_h1}><h1>???????????? ??????????????</h1></div>

                                    <div className={a.carusel_p} ><p>?????????????? ???? ????????????-???????? ?????????? ?? ????????</p> </div>

                                    <div className={a.carusel_btn}><button>??????????????????</button></div>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_carusel_2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>

                                <div className={a.carusel_text}>
                                    <div className={a.carusel_h1}><h1>????????????</h1></div>

                                    <div className={a.carusel_p} ><p>?????????? ?????????? ?????????? ?? ???????????? ????????????</p> </div>

                                    <div className={a.carusel_btn}><button>??????????????????</button></div>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_carusel_4}
                                alt="Second slide"
                            />

                            <Carousel.Caption>

                                <div className={a.carusel_text}>
                                    <div className={a.carusel_h1}><h1>???????????? </h1></div>

                                    <div className={a.carusel_p} ><p>?????????? ???????????????????? ?? ????????????: ???????? ???? ??????????????</p> </div>

                                    <div className={a.carusel_btn}><button>??????????????????</button></div>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={img_carusel_3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>

                                <div className={a.carusel_text}>
                                    <div className={a.carusel_h1}><h1>??????????????</h1></div>

                                    <div className={a.carusel_p} ><p>?????????????????????? ?????????????? ???? ???????????? ????????????</p> </div>

                                    <div className={a.carusel_btn}><button>??????????????????</button></div>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </div>

            </section>

            <section className={a.elem}>

                <div className={a.elem_1}>
                    <div><img src={img_1} alt="" /></div>
                    <div className={a.modal_elem}>
                        <div> <h3 variant="primary" onClick={() => setModalShow(true)}>
                            50% ???????????? - ?????????? ?????????? ????????!
                        </h3>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            /></div>
                        <div>
                            <p>0% ?????????????????? ?? ??????????????????. ?????? ????????????????, ?????????????????? ?? ?????????????? ?? ????????????</p>
                        </div>

                    </div>
                </div>


                <div className={a.elem_1}>
                    <div><img src={img_2} alt="" /></div>
                    <div className={a.modal_elem}>
                        <div>
                            <h3 variant="primary" onClick={() => setModalShow(true)}>
                                Trade-in
                            </h3>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            /></div>
                        <div>
                            <p>?????????? ???????????????? ???? ?????????????????????? ???????????? ????????????</p>
                        </div>

                    </div>
                </div>



            </section>
            <div className={a.text_text}> <h1>?????????? ????????????????</h1></div>
            <section className={a.kv_section}>





                <div className={a.kv}>


                    {/* 1 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_3} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>??????????????????
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>????????????</h2>

                                <h6 className={a.kv_span_1}><div ></div>????????????????</h6>
                                <h6 className={a.kv_span}><div ></div>????????????????</h6>
                                <h5>???? 17 493 840 ??????</h5>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_4} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>??????????????????
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>????????????</h2>
                                <h6>??????????????????</h6>
                                <div className={a.kv_1_span}>
                                    <h6 className={a.kv_span_1_1}><div ></div>????????????????????????.</h6>
                                    <h6 className={a.kv_span_1_2}><div ></div>????.????????????</h6>
                                    <h6 className={a.kv_span_1_3}><div ></div>??????????????.</h6>
                                </div>
                                <h5>???? 9 493 840 ??????</h5>
                            </div>
                        </div>
                    </div>



                </div>

                <div className={a.kv}>


                    {/* 1 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_5} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>??????????????????
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>??????????????</h2>
                                <h6>??????????????</h6>
                                <div className={a.kv_1_span}>
                                    <h6 className={a.kv_span_1_1}><div ></div>?????????????????????? ????????????????</h6>
                                    <h6 className={a.kv_span_1_2}><div ></div>??????????????????????</h6>
                                </div>

                                <h5>???? 14 123 250   ??????</h5>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_6} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>??????????????????
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>????????</h2>

                                <h6 >?????????????????????? ???????????????? ??. 60 ????????.1</h6>
                                <h6 className={a.kv_span_1_1}><div ></div>?????????????????????? ????????????????</h6>
                                <h5>???? 42 493 850 ??????</h5>
                            </div>
                        </div>
                    </div>



                </div>


                <div className={a.kv}>


                    {/* 1 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_7} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>??????????????????
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>?????? ???? ????????????????????????????</h2>

                                <h6 >????. ????????????????????????????, 8</h6>
                                <h6 className={a.kv_span_1_1}><div ></div>??????????????</h6>
                                <h5>???? 129 453 540 ??????</h5>
                            </div>
                        </div>
                    </div>

                    {/* 2 */}
                    <div className={a.kv_1}>
                        <div className={a.kv_img}>
                            <img src={img_8} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div>  <button>??????????????????
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>
                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <h2>???????????? ??????????????</h2>
                                <h6>????????????????-????????????????</h6>
                                <div className={a.kv_1_span}>
                                    <h6 className={a.kv_span_1_1}><div ></div>????????????????.</h6>
                                    <h6 className={a.kv_span_1_2}><div ></div>????????????????</h6>
                                </div>
                                <h5>???? 18 493 840 ??????</h5>
                            </div>
                        </div>
                    </div>



                </div>

                <section className={a.body_kv}>

                    <div className={a.kv_1_0}>
                        <div className={a.kv_img}>
                            <img src={img_9} alt="" />
                        </div>
                        <div className={a.kv_text}>
                            <div className={a.kv_btn_1}>  <button>??????????????????
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                        <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                                    </svg>

                                </span>


                            </button></div>

                        </div>

                        <div className={a.kv_text_2}>
                            <div className={a.kv_text_h1}>
                                <div className={a.kv_1_span}>
                                    <h1 className={a.iz_h1}>??????????????????.DELUX</h1>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
            </section>

            <section className={a.kv_btn_color}>

                <button className={a.kv_btn_hover}>???????????????? ?????? ??????????????????????</button>

            </section>

            <div className={a.text_text}> <h1> ???? ???????????? ????????????????</h1></div>


            <section className={a.range_section}>

             <div className={a.div_auto}>
                <div className={a.bac_auto}></div>
                <div className={a.bac_text}>
                    <h5>?????????????????????? ?????????????????????? ?????????? ?????? ???????????? ?????? ??????????????????.</h5>
                      <button>??????????????</button>
                    
                        
                    
                    </div>
                 </div>
                 <div className={a.div_auto}>
                <div className={a.bac_auto}></div>
                <div className={a.bac_text}>
                    <h5>?????????????????????? ?????????????????????? ?????????? ?????? ???????????? ?????? ??????????????????.</h5>
                      <button>??????????????</button>
                    
                        
                    
                    </div>
                 </div>
                 <div className={a.div_auto}>
                <div className={a.bac_auto}></div>
                <div className={a.bac_text}>
                    <h5>?????????????????????? ?????????????????????? ?????????? ?????? ???????????? ?????? ??????????????????.</h5>
                      <button>??????????????</button>
                    
                        
                    
                    </div>
                 </div>
 
            </section>
            <div className={a.don_bac}>


            </div>
            <section>

            </section>
      





        </div>
    )
}

export default Menu