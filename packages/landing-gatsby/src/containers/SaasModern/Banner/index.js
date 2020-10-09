import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import Button from 'common/src/components/Button';
import Container from 'common/src/components/UI/Container';
import TiltShape from '../TiltShape';
import { BannerWrapper, DiscountWrapper, DiscountLabel } from './banner.style';
import { ic_play_circle_filled } from 'react-icons-kit/md/ic_play_circle_filled';

const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      bannerImage: file(
        relativePath: { eq: "image/saasModern/banner-image.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1170, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  const stylesObj = {
    // backgroundColor:"blue",
    // border: '2px solid black' ,
    borderRadius:20,
  
    display:'inline',
   
  };

  return (
    <BannerWrapper id="banner_section">
      <TiltShape />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <DiscountWrapper>
              <DiscountLabel>
                <Text {...discountAmount} content="" />
                <Text
                  {...discountText}
                  content=" Beta users get free access + special pricing when we launch."
                />
              </DiscountLabel>
            </DiscountWrapper>
            <Heading
              {...title}
              content="Search... Simplified"
            />
            <Text
              {...description}
              content="Answers at the speed of thought"
            /> 
            <Box {...buttonWrapper}>
              <a href="#1">
                <Button {...fillButton}  title=" Start  free trail"  width="139" style={stylesObj}/>
              </a>
              &nbsp; &nbsp; &nbsp; &nbsp;<a href="https://slack.com/oauth/v2/authorize?client_id=1248781605655.1375316635968&scope=app_mentions:read,channels:history,chat:write,commands,files:read,files:write,groups:history,im:history,im:read,im:write,incoming-webhook,mpim:history,mpim:read,mpim:write,remote_files:read,remote_files:share,remote_files:write,users.profile:read&user_scope=files:read,files:write,groups:history,identify,im:history,mpim:write,users.profile:read"><img alt="Add to Slack" height="70"  width="210"  src="https://platform.slack-edge.com/img/add_to_slack.png" srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x" style={stylesObj}/></a>
            </Box>
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <Image
                fluid={Data.bannerImage.childImageSharp.fluid}
                alt="banner image"
              />
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px',
  },
  imageWrapper: {
    width: '100%',
  },
  title: {
    fontSize: ['29px', '36px', '46px', '54px', '60px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px', '25px', '25px', '25px'],
    lineHeight: '1.2',
    textAlign: 'center',
  },
  description: {
    fontSize: ['21px', '22px', '22px', '22px', '22px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  discountAmount: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    fontWeight: '700',
    color: '#00865b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '14px', '14px', '14px', '18px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  fillButton: {
    type: 'button',
    fontSize: ['15px', '16px'],
    fontWeight: '700',
    borderRadius: '20px',
    p: ['0px 15px', '10px 18px'],
    colors: 'secondaryWithBg',
    // minWidth: ['auto', '130px'],
    height: ['35px', '40px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px',
  },
  button: {
    
    type: 'button',
    fontSize: ['15px', '16px'],
    fontWeight: '700',
    borderRadius: '20px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '43px'],
    minHeight: 'auto',
    width:'fit-content',
  },
};

export default BannerSection;