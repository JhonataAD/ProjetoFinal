import React from "react";
import { Container, Row, Col } from "reactstrap"
import "../styles/dashboard.css"

import useGetDate from "../custom-hooks/userGetData";

const Dashboard = () => {

    const {data: products} = useGetDate('products')
    const {data: users} = useGetDate('users')


    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col className="lg-3">
                            <div className="revenue__box">
                                <h5>Total Sales</h5>
                                <span>R$7890</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                        <div className="order__box">
                                <h5>Orders</h5>
                                <span>789</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                        <div className="products__box">
                                <h5>Total Products</h5>
                                <span>{products.length}</span>
                            </div>
                        </Col>
                        <Col className="lg-3">
                        <div className="user__box">
                                <h5>Total Users</h5>
                                <span>{users.length}</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Dashboard;