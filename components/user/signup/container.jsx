import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { ToastContainer, toast } from 'react-toastify';
import Container from '../container';
import Fields from './fields';
import 'react-toastify/dist/ReactToastify.css';

export default class SignupContainer extends Component {
  notify = (choice) => {
    const options = {
      position: 'bottom-left',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };
    switch (choice) {
      case 'incompleteFields':
        toast.error('فیلد های مشخص شده باید کامل شوند', options);
        break;
      case 'passwordsNotSame':
        toast.error('گذرواژه ها یکسان نیستند', options);
        break;
      case 'invalidEmail':
        toast.error('ایمیل وارد شده صحیح نیست', options);
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <Container>
        <Header as="h1" dividing>
          ثبت نام
        </Header>
        <Fields notify={this.notify} />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </Container>
    );
  }
}
