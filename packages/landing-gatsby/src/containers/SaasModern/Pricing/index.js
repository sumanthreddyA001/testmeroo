import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import GlideCarousel from 'common/src/components/GlideCarousel';
import GlideSlide from 'common/src/components/GlideCarousel/glideSlide';

import PricingTable, {
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper,
} from './pricing.style';

import { checkmark } from 'react-icons-kit/icomoon/checkmark';

const PricingSection = ({
  sectionWrapper,
  row,
  secTitleWrapper,
  secHeading,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  priceLabelStyle,
  buttonStyle,
  buttonFillStyle,
  listContentStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasModernJson {
        MONTHLY_PRICING_TABLE {
          name
          description
          price
          priceLabel
          buttonLabel
          url
          listItems {
            content
          }
        }
        YEARLY_PRICING_TABLE {
          name
          description
          price
          priceLabel
          buttonLabel
          url
          listItems {
            content
          }
        }
      }
    }
  `);

  const [state, setState] = useState({
    data: Data.saasModernJson.MONTHLY_PRICING_TABLE,
    active: true,
  });

  const data = state.data;
  const activeStatus = state.active;

  const pricingCarouselOptions = {
    type: 'slider',
    perView: 3,
    gap: 30,
    bound: true,
    breakpoints: {
      1199: {
        perView: 2,
        peek: {
          before: 100,
          after: 100,
        },
      },
      990: {
        perView: 1,
        peek: {
          before: 160,
          after: 160,
        },
      },
      767: {
        perView: 1,
        peek: {
          before: 80,
          after: 80,
        },
      },
      575: {
        perView: 1,
        gap: 15,
        peek: {
          before: 20,
          after: 20,
        },
      },
    },
  };
  const stylesObj = {
    // backgroundColor:"blue",
    // border: '2px solid black' ,
    borderRadius:20
   
  };
  return (
    <Box {...sectionWrapper} id="pricing_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="PRICING PLAN" />
          <Heading
            {...secHeading}
            content="What’s our monthly pricing subscription"
          />
          <PricingButtonWrapper>
            <Button
              title="Monthly Plan"
              className={activeStatus ? 'active-item' : ''}
              onClick={() =>
                setState({
                  data: Data.saasModernJson.MONTHLY_PRICING_TABLE,
                  active: true,
                })
              }
            />
            <Button
              title="Annual Plan"
              className={activeStatus === false ? 'active-item' : ''}
              onClick={() =>
                setState({
                  data: Data.saasModernJson.YEARLY_PRICING_TABLE,
                  active: false,
                })
              }
            />
          </PricingButtonWrapper>
        </Box>
        <Box {...row}>
          <GlideCarousel
            carouselSelector="pricing-carousel"
            options={pricingCarouselOptions}
            controls={false}
          >
            <>
              {data.map((pricingTable, index) => (
                <GlideSlide key={`pricing-table-${index}`}>
                  <PricingTable
                    freePlan={pricingTable.freePlan}
                    className="pricing_table"
                  >
                    <PricingHead>
                      <Heading content={pricingTable.name} {...nameStyle} />
                      <Text
                        content={pricingTable.description}
                        {...descriptionStyle}
                      />
                    </PricingHead>
                    <PricingPrice>
                      <Text content={pricingTable.price} {...priceStyle} />
                      <Text
                        content={pricingTable.priceLabel}
                        {...priceLabelStyle}
                      />
                    </PricingPrice>
                    <PricingButton>
                      <a href={pricingTable.url}>
                        {pricingTable.freePlan ? (
                          <Button style={stylesObj}
                            title={pricingTable.buttonLabel}
                            {...buttonStyle}
                          />
                        ) : (
                          <Button style={stylesObj}
                            title={pricingTable.buttonLabel}
                            {...buttonFillStyle}
                          />
                        )}
                      </a>
                    </PricingButton>
                    <PricingList>
                      {pricingTable.listItems.map((item, index) => (
                        <ListItem key={`pricing-table-list-${index}`}>
                          <Icon
                            icon={checkmark}
                            className="price_list_icon"
                            size={13}
                          />
                          <Text content={item.content} {...listContentStyle} />
                        </ListItem>
                      ))}
                    </PricingList>
                  </PricingTable>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </Box>
      </Container>
    </Box>
  );
};

PricingSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  nameStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  priceStyle: PropTypes.object,
  priceLabelStyle: PropTypes.object,
  listContentStyle: PropTypes.object,
};

PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['100px', '100px', '100px', '140px', '160px'],
    pb: ['60px', '80px', '80px', '100px'],
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  secTitleWrapper: {
    mb: ['50px', '75px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#2aa275',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['20px', '24px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px',
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '500',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px',
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0',
  },
  priceStyle: {
    as: 'span',
    display: 'block',
    fontSize: ['36px', '36px', '40px', '40px', '40px'],
    color: 'headingColor',
    textAlign: 'center',
    mb: '5px',
    letterSpacing: '-0.025em',
  },
  priceLabelStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: 'textColor',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0',
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    bg: '#fff',
    color: '#2aa275',
    colors: 'primaryWithBg',
    width: '222px',
    maxWidth: '100%',
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    width: '200px',
    maxWidth: '100%',
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: 'textColor',
    mb: '0',
  },
};

export default PricingSection;