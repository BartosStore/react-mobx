import React from "react";
import { Observer } from "mobx-react"

import { administrationStore } from "./AdministrationStore";
import { Button, Table, Container, Row, Col } from "reactstrap";

const store = administrationStore;

const AdministrationPage = () => {
    return (
        <Container >
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }} lg={{ size: 6, offset: 3 }} xl={{ size: 6, offset: 3 }}>
                    <h1>Administration</h1>
                    <Table>
                        <tbody>
                            <tr>
                                <th>Min temperature</th>
                                <td>16.0</td>
                            </tr>
                            <tr>
                                <th>Max temperature</th>
                                <td>30.0</td>
                            </tr>
                            <tr>
                                <th>Actual temperature</th>
                                <td><Observer>{() => <div>{store.temp}</div>}</Observer></td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button type="submit" color="success" onClick={() => store.increaseTemp()}>Increase</Button>
                    <Button type="submit" color="danger" onClick={() => store.decreaseTemp()}>Decrease</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default AdministrationPage;