import React, { Component } from 'react';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import ButtonAdd from 'components/atoms/ButtonAdd';
import plusIcon from 'assets/icons/plus.svg';
import NewItemModal from 'components/organisms/NewItemModal';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledButtonAdd = styled(ButtonAdd)`
  display: ${({ isVisible }) => (isVisible ? 'none' : 'initial')};
  position: fixed;
  bottom: 24px;
  right: 48px;
`;

class GridTemplate extends Component {
  state = {
    isNewItemModalVisible: false,
  };

  toggleNewItemModal = () =>
    this.setState((prevState) => ({
      isNewItemModalVisible: !prevState.isNewItemModalVisible,
    }));

  render() {
    const { isNewItemModalVisible } = this.state;
    return (
      <UserPageTemplate>
        <StyledWrapper>
          <StyledButtonAdd
            onClick={this.toggleNewItemModal}
            icon={plusIcon}
            isVisible={isNewItemModalVisible}
          />
          <NewItemModal handleClose={this.toggleNewItemModal} isVisible={isNewItemModalVisible} />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

export default GridTemplate;
