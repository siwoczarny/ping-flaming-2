import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import UserTemplate from 'templates/UserTemplate';
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
        partialVisibilityGutter: 40,
      },
      desktop: {
        breakpoint: { max: 2099, min: 1200 },
        items: 4,
        partialVisibilityGutter: 40,
      },
      tabletLarge: {
        breakpoint: { max: 1199, min: 992 },
        items: 3,
        partialVisibilityGutter: 40,
      },
      tabletSmall: {
        breakpoint: { max: 991, min: 768 },
        items: 3,
        partialVisibilityGutter: 40,
      },
      mobileLarge: {
        breakpoint: { max: 767, min: 576 },
        items: 2,
        partialVisibilityGutter: 30,
      },
      mobile: {
        breakpoint: { max: 575, min: 0 },
        items: 1,
        partialVisibilityGutter: 30,
      },
    };

    return (
      <UserTemplate>
        <StyledWrapper>
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
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
