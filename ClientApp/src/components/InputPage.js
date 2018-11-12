import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Header,
    Container,
    Rating,
    Breadcrumb,
    Segment,
    Grid,
    Image,
    Label,
    Button,
    Icon,
    Popup,
    Divider,
    Table,
    Input,
    Card,
    Menu,
    CardGroup,
    List,
    Dropdown,
    Step,
    Form
  } from "semantic-ui-react";

const StepOrder = () => (
    <Step.Group>
      <Step active>
        <Icon name='truck' />
        <Step.Content>
          <Step.Title>Bestellen</Step.Title>
          <Step.Description>Vul uw gegevens in</Step.Description>
        </Step.Content>
      </Step>
      <Step>
        <Icon name='credit card' />
        <Step.Content>
          <Step.Title>Betalen</Step.Title>
          <Step.Description>Kies uw betalingswijze</Step.Description>
        </Step.Content>
      </Step>
      <Step>
        <Icon name='info' />
        <Step.Content>
            <Step.Title>Bevestiging</Step.Title>
        </Step.Content>
      </Step>
    </Step.Group>
)

const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

const Space = () => " ";

class InputInfo extends Component {
    constructor() {
      super();
      this.state = {
        voornaam: '',
        achternaam: '',
        straatnaam: '',
        huisnummer: '',
        postcode: '',
        stad: '',
        telefoonnummer: '',
        email: '',
      };
    }
    
    handleVoornaamChange = (evt) => {
      this.setState({ voornaam: evt.target.value });
    }
    
    handleAchternaamChange = (evt) => {
      this.setState({ achternaam: evt.target.value });
    }

    handleStraatnaamChange = (evt) => {
      this.setState({ straatnaam: evt.target.value });
    }

    handleHuisnummerChange = (evt) => {
      this.setState({ huisnummer: evt.target.value});
    }
    
    handlePostcodeChange = (evt) => {
      this.setState({ postcode: evt.target.value});
    }

    handleStadChange = (evt) => {
      this.setState({ stad: evt.target.value});
    }

    handleTelefoonnummerChange = (evt) => {
      this.setState({ telefoonnummer: evt.target.value});
    }

    handleEmailChange = (evt) => {
      this.setState({ email: evt.target.value});
    }

    //handleSubmit = () => {
     // const { voornaam, achternaam, straatnaam, huisnummer, postcode, stad, telefoonnummer, email } = this.state;
      //alert(`Bestelling klaargezet`);
    //}
  
    render() {
      const { voornaam, achternaam, straatnaam, huisnummer, postcode, stad, telefoonnummer, email } = this.state;
      const isEnabled =
            voornaam.length > 0 &&
            achternaam.length > 0 &&
            straatnaam.length > 0 &&
            huisnummer.length > 0 &&
            postcode.length > 0 && 
            stad.length > 0 &&
            telefoonnummer.length > 0 &&
            email.length > 0;
        return(
            <Container>
                <Divider hidden/>
                <StepOrder/>
                <Divider />
                <h2>Vul uw gegevens in</h2>
                <Divider hidden/>
                <div>
                  <Form size = {'big'} key = {'large'}>
                    <Form.Group widths='equal'>
                      <Form.Input required fluid label='Voornaam' placeholder='ABC' value={this.state.voornaam} onChange={this.handleVoornaamChange} />
                      <Form.Input fluid label='Tussenvoegsel' placeholder='van' />
                      <Form.Input required fluid label='Achternaam' placeholder='DEF' value={this.state.achternaam} onChange={this.handleAchternaamChange} />
                    </Form.Group>
                  </Form>
                </div>
                <div>
                  <Form size = {'big'} key = {'large'}>
                    <Form.Group widths='equal'>
                      <Form.Input required fluid label='Straatnaam' placeholder='ABCstraat' value={this.state.straatnaam} onChange={this.handleStraatnaamChange} />
                      <Form.Input required fluid label='Huisnummer' placeholder='123' value={this.state.huisnummer} onChange={this.handleHuisnummerChange} />
                      <Form.Input fluid label='Toevoeging' placeholder='a' />
                    </Form.Group>
                  </Form>
                </div>
                <div>
                  <Form size = {'big'} key = {'large'}>
                    <Form.Group>
                      <Form.Input required label='Postcode' placeholder='1234 AB' value={this.state.postcode} onChange={this.handlePostcodeChange} />
                      <Form.Input required label='Stad' placeholder='Rotterdam' value={this.state.stad} onChange={this.handleStadChange} />
                    </Form.Group>
                  </Form>
                </div>
                <Form size = {'big'} key = {'large'}>
                   <Form.Group>
                    <Form.Input label='Land' placeholder='Nederland' readOnly width={6} />
                   </Form.Group>
                </Form>
                <Form size = {'big'} key = {'large'}>
                    <Form.Group>
                      <Form.Input required label='Telefoonnummer' placeholder='0612345678' width={6} value={this.state.telefoonnummer} onChange={this.handleTelefoonnummerChange} />
                    </Form.Group>
                </Form>
                <Form size = {'big'} key = {'large'}>
                    <Form.Group>
                     <Form.Input required label='E-mailadres' placeholder='123@hotmail.com' width={6} value={this.state.email} onChange={this.handleEmailChange} />
                    </Form.Group>
                </Form>
                <Divider hidden/>
                <Divider/>
                <Button.Group size = {'big'}>
                  <Button href="/doorgaan">Teruggaan</Button>
                  <Button.Or text="of" />
                  <Button positive href="/payment" disabled={!isEnabled}>Doorgaan</Button>
                </Button.Group>
            </Container>
        );
    }
}

export default connect(

    )(InputInfo);
    