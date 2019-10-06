import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import CreateDonationForm from "../components/donations/CreateDonationForm";

import { create } from "./../services/donations";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donation: {
        donationName: "",
        category: "",
        description: "",
        location: "",
        imageUrl: "",
        _creator: ""
      }
    };
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.createDonation = this.createDonation.bind(this);
  }

  onFormValueChange(data) {
    this.setState({
      donation: {
        ...this.state.donation,
        ...data
      }
    });
  }

  createDonation() {
    const donation = this.state.donation;
    create(donation)
      .then(donation => {
        this.props.history.push(`/donation/list`);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Add Donation to be pick up</h1>
        <Container>
          <CreateDonationForm
            value={this.state.donation}
            onValueChange={this.onFormValueChange}
            onFormSubmit={this.createDonation}
          >
            <Button type="submit">Create Donation</Button>
          </CreateDonationForm>
        </Container>
      </div>
    );
  }
}
