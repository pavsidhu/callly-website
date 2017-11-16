import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import { media } from '../utils'

import loadingIcon from '../assets/loading.svg'
import successIcon from '../assets/success.svg'

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      email: undefined,
      isRequesting: false,
      isSuccess: false,
      error: undefined,
      success: undefined
    }
  }

  isEmailValid(email) {
    const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailPattern.test(email)
  }

  subscribe() {
    if (this.state.isSuccess) return

    const email = this.state.email

    if (!this.isEmailValid(email)) {
      return this.setState({
        error: 'Please enter a valid email.'
      })
    }

    this.setState({ isRequesting: true, error: undefined })

    fetch('https://us-central1-calllyapp.cloudfunctions.net/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email: email })
    })
      .then(response => {
        if (response.status == 200) {
          this.setState(() => ({
            isSuccess: true,
            isRequesting: false,
            success: 'Thanks for your interest!'
          }))
          return
        }

        throw 'error'
      })
      .catch(error => {
        this.setState({
          isSuccess: false,
          isRequesting: false,
          error: 'Sorry, something went wrong. Please try again.'
        })
      })
  }

  render() {
    return [
      <InputContainer
        onSubmit={e => {
          e.preventDefault()
          this.subscribe()
        }}
        key={1}
      >
        <Input
          type="email"
          placeholder="Email Address"
          value={this.state.email}
          class="email"
          required
          onChange={event => this.setState({ email: event.target.value })}
        />
        <Button
          className="button"
          type="submit"
          onClick={() => this.subscribe()}
          style={
            this.state.isSuccess
              ? {
                  background: 'linear-gradient(#36E39B, #26C8B7)',
                  cursor: 'default'
                }
              : undefined
          }
        >
          {this.state.isRequesting ? (
            <LoadingIcon src={loadingIcon} />
          ) : (
            undefined
          )}
          {this.state.isSuccess ? <SuccessIcon src={successIcon} /> : undefined}
          <span
            style={{
              opacity: this.state.isRequesting || this.state.isSuccess ? 0 : 1
            }}
          >
            Keep Me Updated
          </span>
        </Button>
      </InputContainer>,
      this.state.error ? (
        <Error key={2}>{this.state.error}&nbsp;</Error>
      ) : (
        <Success key={2}>{this.state.success}&nbsp;</Success>
      )
    ]
  }
}

const Error = styled.p`
  font-size: 0.8rem;
  line-height: 1;
  margin-top: 16px;
  font-weight: 400;
  color: #f55d9b;
`

const Success = styled.p`
  font-size: 0.8rem;
  line-height: 1;
  margin-top: 16px;
  font-weight: 400;
  color: #313131;
`

const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 4px;
  width: 100%;

  ${media.desktop`
    flex-direction: row;
    box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
    transition: all 100ms;
    width: inherit;

    &:hover {
      box-shadow: 0px 2px 25px 0px rgba(0, 0, 0, 0.2);
    }
  `};
`

const Input = styled.input`
  background: #fefefe;
  padding: 16px;
  border: none;
  font-size: 1rem;
  line-height: 1rem;
  color: #313131;
  width: 100%;
  margin-bottom: 1rem;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  ${media.desktop`
    box-shadow: none;
    border-radius: 4px;
    margin-bottom: 0;
    width: 280px;
  `};
`

const buttonLoading = keyframes`
	0% {
		transform: rotateZ(0deg);
	}

	100% {
    transform: rotateZ(360deg);
	}
`

const Button = styled.div`
  background: linear-gradient(#8657f8, #48b4f5);
  background-size: 100vw 100vh;
  background-position: 0% 50%;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  line-height: 1.125rem;
  padding: 16px;
  color: white;
  font-weight: 400;
  text-decoration: none;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 250ms;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  &:hover,
  &:focus {
    background-position: 0% 99%;
  }

  &:focus {
    outline: none;
  }

  ${media.desktop`
    box-shadow: none;
    border-radius: 0px 4px 4px 0px;
    text-align: left;
    width: inherit;
  `};
`

const LoadingIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: calc((100% - 24px) / 2);
  top: calc((100% - 24px) / 2);
  animation: ${buttonLoading} 1s linear infinite;
`

const SuccessIcon = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  left: calc((100% - 24px) / 2);
  top: calc((100% - 24px) / 2);
`
