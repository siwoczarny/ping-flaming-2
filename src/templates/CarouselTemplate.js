import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import UserTemplate from 'templates/UserTemplate';
import ButtonAdd from 'components/atoms/ButtonAdd';
import plusIcon from 'assets/icons/plus.svg';
import NewItemModal from 'components/organisms/NewItemModal';
import ButtonScroll from 'components/atoms/ButtonScroll';
import leftArrow from 'assets/icons/left.svg';
import rightArrow from 'assets/icons/right.svg';

const StyledWrapper = styled.div`
  margin: 16px 0 0;
  padding: 0 48px;
  width: 100%;
`;

const StyledButtonAdd = styled(ButtonAdd)`
  display: ${({ isVisible }) => (isVisible ? 'none' : 'initial')};
  position: fixed;
  bottom: 24px;
  right: 32px;
`;

const StyledButtonScroll = styled(ButtonScroll)`
  position: fixed;
  ${({ left }) =>
    left &&
    css`
      left: 0;
    `}

  ${({ right }) =>
    right &&
    css`
      right: 0;
    `}
`;

class CarouselTemplate extends Component {
  state = {
    isNewItemModalVisible: false,
  };

  toggleNewItemModal = () =>
    this.setState((prevState) => ({
      isNewItemModalVisible: !prevState.isNewItemModalVisible,
    }));

  render() {
    const { children } = this.props;
    const { isNewItemModalVisible } = this.state;
    const responsive = {
      desktopLarge: {
        breakpoint: { max: 5000, min: 2100 },
        items: 4,
        partialVisibilityGutter: 30,
      },
      desktop: {
        breakpoint: { max: 2099, min: 1200 },
        items: 4,
        partialVisibilityGutter: 20,
      },
      tabletLarge: {
        breakpoint: { max: 1199, min: 992 },
        items: 3,
        partialVisibilityGutter: 20,
      },
      tabletSmall: {
        breakpoint: { max: 991, min: 768 },
        items: 3,
        partialVisibilityGutter: 10,
      },
      mobileLarge: {
        breakpoint: { max: 767, min: 576 },
        items: 2,
        partialVisibilityGutter: 0,
      },
      mobile: {
        breakpoint: { max: 575, min: 0 },
        items: 1,
        partialVisibilityGutter: 0,
      },
    };

    return (
      <UserTemplate>
        <StyledWrapper>
          <Carousel
            additionalTransfrom={0}
            arrows
            customLeftArrow={<StyledButtonScroll left icon={leftArrow} />}
            customRightArrow={<StyledButtonScroll right icon={rightArrow} />}
            draggable
            focusOnSelect={false}
            infinite={false}
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            showDots={false}
            slidesToSlide={1}
            swipeable
          >
            {children}
          </Carousel>
          <StyledButtonAdd
            onClick={this.toggleNewItemModal}
            icon={plusIcon}
            isVisible={isNewItemModalVisible}
          />
          <NewItemModal handleClose={this.toggleNewItemModal} isVisible={isNewItemModalVisible} />
        </StyledWrapper>
      </UserTemplate>
    );
  }
}

CarouselTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CarouselTemplate;
