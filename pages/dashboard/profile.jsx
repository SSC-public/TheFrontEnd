import React, { Component } from 'react';
import Container from '~/components/dashboard/profile/Container';
import { profileAPI } from '~/redux/api/dashboard';
import withAuth from '~/components/global/withAuth';
import { connect } from 'react-redux';
import { profileUpdateAction, profileClearAction } from '~/redux/actions/profile';

class ProfilePage extends Component {
  static async getInitialProps(ctx, token) {
    const res = await profileAPI(token);
    const profileData = await res.data;
    return { profileData, token };
  }

  componentDidMount() {
    const { clear } = this.props;
    clear();
  }

  render() {
    const { profileData, token, update, profile } = this.props;

    return (
      <>
        {/* <Navbar transparent /> */}
        <Container profile={profile} profileData={profileData} token={token} update={update} />;
      </>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const { profile } = state;
  return {
    profile,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    update: (fields, token) => {
      dispatch(profileUpdateAction(fields, token));
    },
    clear: () => {
      dispatch(profileClearAction());
    }
  };
}

export default withAuth(true)(connect(mapStateToProps, mapDispatchToProps)(ProfilePage));