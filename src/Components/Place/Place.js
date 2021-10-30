import React from 'react';
import { Col, Row } from 'react-bootstrap';
import plac1 from '../../images/place/1.jpg';
import plac2 from '../../images/place/2.jpg';
import plac3 from '../../images/place/3.jpg';
import plac4 from '../../images/place/4.jpg';
import plac5 from '../../images/place/5.jpg';
import Footer from '../Footer/Footer';
import Header from '../Home/Header/Header';
import Home from '../Home/Home/Home';
import './place.css';

const Place = () => {
    return (
        <div>
           <Header></Header>
            <div className="container mt-5">
                <h4 className="text-center mb-5 text-primary">Here is some most of the visited place here we are provided world class services day by day</h4>
                <Row xs={1} md={2} xl={2} className="g-4">
                    <Col>
                        <img className="img-style" src={plac1} alt="" />
                    </Col>
                    <Col className="p-2 text-start">
                        <h5 className="text-center text-primary">The Colosseum, Rome</h5>
                        <p>The Rochester, Minnesota–based Mayo Clinic has provided patients with comprehensive medical care for over 150 years. Now with centers in Arizona, Florida and Minnesota, as well as over 19 hospitals in five states, its health system serves more than 1.3 million people annually. But it's the nonprofit's peerless educational arm, including the Mayo Clinic Alix School of Medicine and 57 research centers, that sets it apart, providing vital innovation for the entire medical community (more than 7,200 peer-reviewed publications to date). That, along with superb patient support, earns the Mayo Clinic Newsweek's top spot for 2018–19. ► MayoClinic.org</p>
                    </Col>

                    <Col>
                        <img className="img-style" src={plac2} alt="" />
                    </Col>
                    <Col className="p-2 text-start">
                        <h5 className="text-center text-primary">Statue of Liberty, New York City</h5>
                        <p>The Baltimore-based institution—founded in the late 1800s by the banker, philanthropist and abolitionist it is named for—houses Johns Hopkins University's School of Medicine, the second-highest-rated medical school in America (after Harvard Medical School), offering among the most advanced clinical research in the world. The hospital's health system—including six academic and commercial hospitals, four health care and surgery centers and over 40 patient care locations—receives up to 3 million patients annually. A leader in neurosurgery and child psychiatry, the Hopkins Gender Identity Clinic was also the first in the United States to complete male-to-female reassignment surgery. ► HopkinsMedicine.org</p>
                    </Col>
                    <Col>
                        <img className="img-style"  src={plac3} alt="" />
                    </Col>
                    <Col className="p-2 text-start">
                        <h5 className="text-center text-primary">Machu Picchu, Peru</h5>
                        <p>This research-based university hospital in Berlin, associated with Humboldt University and Freie Universität Berlin, has 13,700 employees (including more than half of Germany's Nobel laureates in physiology or medicine) working on over 1,000 projects devoted to patient-oriented research through interdisciplinary collaboration. As a hospital, Charité—which celebrated its tricentennial in 2010—is on the cutting-edge of biomedical innovation, with biotech startup labs, advisory roles and business initiatives focused on the convergence of technology and medicine. ► Charite.de</p>
                    </Col>
                    <Col>
                        <img className="img-style"  src={plac4} alt="" />
                    </Col>
                    <Col className="p-2 text-start">
                        <h5 className="text-center text-primary">The Acropolis, Athens</h5>
                        <p>Located in Boston, MGH, which is the third-oldest hospital in the United States, is also the teaching hospital of Harvard Medical School, the pre-eminent medical school in the country, with virtually all of its physicians serving as Harvard Med faculty. With an annual research budget of more than $912 million, it also has the largest hospital-based research program; over 1,200 clinical trials are conducted at Mass General at any given time, and in 2016–17 MGH topped the Nature Index list, publishing more articles in "high-impact" journals than any other hospital in America. Current projects include combating the opioid epidemic and studying the impact of social and economic status on health. ► MassGeneral.org</p>
                    </Col>
                    <Col>
                        <img className="img-style" src={plac5} alt="" />
                    </Col>
                    <Col className="p-2 text-start">
                        <h5 className="text-primary text-center">Great Wall of China</h5>
                        <p>Located in Boston, MGH, which is the third-oldest hospital in the United States, is also the teaching hospital of Harvard Medical School, the pre-eminent medical school in the country, with virtually all of its physicians serving as Harvard Med faculty. With an annual research budget of more than $912 million, it also has the largest hospital-based research program; over 1,200 clinical trials are conducted at Mass General at any given time, and in 2016–17 MGH topped the Nature Index list, publishing more articles in "high-impact" journals than any other hospital in America. Current projects include combating the opioid epidemic and studying the impact of social and economic status on health. ► MassGeneral.org</p>
                    </Col>
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Place;