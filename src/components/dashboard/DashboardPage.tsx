import React from 'react';

import BarChartData from "./BarChartData";
import { Container, Row, Col } from 'reactstrap';

const DashboardPage = () => {
    return (
        <Container>
            <h1>Dashboard</h1>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="6"><BarChartData /></Col>
                <Col xs="12" sm="12" md="12" lg="12" xl="6"><BarChartData /></Col>
            </Row>
            <Row>
                <Col sm="12" xl={{ size: 6, offset: 3 }}><BarChartData /></Col>
            </Row>
        </Container>
    )
}

export default DashboardPage;