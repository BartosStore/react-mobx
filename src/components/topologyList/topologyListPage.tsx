import React, { Fragment, useState } from "react";
import { DropdownMenu, DropdownItem, Dropdown, DropdownToggle, Card, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap";

const TopologyListPage = () => {
    const [openStandard, setStandardOpen] = useState(false);
    const [openExpert, setExpertOpen] = useState(false);
    const [context, setContext] = useState('Standard');
    const [title, setTitle] = useState('Topology 1');
    const [text, setText] = useState('This is the first standard topology.');

    const toggleStandard = () => setStandardOpen(prevState => !prevState);
    const toggleExpert = () => setExpertOpen(prevState => !prevState);
    const toggleStandardContext = () => setContext('Standard');
    const toggleExpertContext = () => setContext('Expert');
    const setupTitle = (name: string) => setTitle(name);
    const setupText = (text: string) => setText(text);

    return (
        <Fragment>
            <h1>Topologies</h1>

            <Dropdown isOpen={openStandard} toggle={toggleStandard}>
                <DropdownToggle color="info" caret>
                    Standard
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => { setupTitle('Topology 1'); setupText('This is the first standard topology.'); toggleStandardContext(); }}>Topology 1</DropdownItem>
                    <DropdownItem onClick={() => { setupTitle('Topology 2'); setupText('This is the second standard topology.'); toggleStandardContext(); }}>Topology 2</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            
            <Dropdown isOpen={openExpert} toggle={toggleExpert}>
                <DropdownToggle color="danger" caret>
                    Expert
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => { setupTitle('Topology Expert 1'); setupText('This is the first expert topology.'); toggleExpertContext(); }}>Topology Expert 1</DropdownItem>
                    <DropdownItem onClick={() => { setupTitle('Topology Expert 2'); setupText('This is the second expert topology.'); toggleExpertContext(); }}>Topology Expert 2</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Card>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{context}</CardSubtitle>
                    <CardText>{text}</CardText>
                </CardBody>
            </Card>
        </Fragment>
    )
}

export default TopologyListPage;