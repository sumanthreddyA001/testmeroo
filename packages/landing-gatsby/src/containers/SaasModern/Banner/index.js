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
  const stylesObj1 = {
    backgroundColor:"#FBFBFB",
    fontFamily:'sans-serif',
    borderRight:'white',
    borderBottom:'white',
    borderTop: 'white',
    borderLeft: 'white',
    padding:10,
    width: 210,
    height: 60,
    fontSize: 20,
    fontWeight: 700,
    alignItems: 'center',
    borderRadius:20,
    display:'flex',
   
  };
  const stylesobj2={
    marginLeft:5,
    marginRight:14
  };
  const stylesObj = {
   
    backgroundColor:'#edcd37',
    fontFamily:'merriweather-sans-70',
    borderRight:'white',
    borderBottom:'white',
    borderTop: 'white',
    borderLeft: 'white',
    padding:10,
    width: 210,
    height: 60,
    fontSize: 22,
    fontWeight: 700,
    alignItems: 'center',
    borderRadius:20,
    display:'flex',
   
  };
  const Button1 = ({ align }) => (
    <button className="my-button"  width='210px' display='flex' style={stylesObj1} align-items='center'>
      <img className={align}  style={stylesobj2} width='40px' height='40px'  margin='10px' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRTAxRTVBIiBkPSJNMjEuMDEsNjMuMTljMCw1Ljc4My00LjcyNCwxMC41MDctMTAuNTAzLDEwLjUwN0M0LjcyNCw3My42OTcsMCw2OC45NzQsMCw2My4xOQ0KCQkJYzAtNS43NzUsNC43MjQtMTAuNTAzLDEwLjUwNy0xMC41MDNIMjEuMDFWNjMuMTl6Ii8+DQoJCTxwYXRoIGZpbGw9IiNFMDFFNUEiIGQ9Ik0yNi4zMDMsNjMuMTljMC01Ljc3NSw0LjcyNC0xMC41MDMsMTAuNTA3LTEwLjUwM2M1Ljc3OSwwLDEwLjUwMyw0LjcyOCwxMC41MDMsMTAuNTAzdjI2LjMwMw0KCQkJYzAsNS43ODMtNC43MjQsMTAuNTA3LTEwLjUwMywxMC41MDdjLTUuNzgzLDAtMTAuNTA3LTQuNzI0LTEwLjUwNy0xMC41MDdWNjMuMTl6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjMzZDNUYwIiBkPSJNMzYuODEsMjEuMDFjLTUuNzgzLDAtMTAuNTA3LTQuNzI0LTEwLjUwNy0xMC41MDNDMjYuMzAzLDQuNzI0LDMxLjAyNiwwLDM2LjgxLDANCgkJCWM1Ljc3OSwwLDEwLjUwMyw0LjcyNCwxMC41MDMsMTAuNTA3VjIxLjAxSDM2LjgxeiIvPg0KCQk8cGF0aCBmaWxsPSIjMzZDNUYwIiBkPSJNMzYuODEsMjYuMzAzYzUuNzc5LDAsMTAuNTAzLDQuNzI0LDEwLjUwMywxMC41MDdjMCw1Ljc3OS00LjcyNCwxMC41MDMtMTAuNTAzLDEwLjUwM0gxMC41MDcNCgkJCUM0LjcyNCw0Ny4zMTIsMCw0Mi41ODksMCwzNi44MWMwLTUuNzgzLDQuNzI0LTEwLjUwNywxMC41MDctMTAuNTA3SDM2LjgxeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iIzJFQjY3RCIgZD0iTTc4Ljk4NiwzNi44MWMwLTUuNzgzLDQuNzI0LTEwLjUwNywxMC41MDctMTAuNTA3UzEwMCwzMS4wMjYsMTAwLDM2LjgxDQoJCQljMCw1Ljc3OS00LjcyNCwxMC41MDMtMTAuNTA3LDEwLjUwM0g3OC45ODZWMzYuODF6Ii8+DQoJCTxwYXRoIGZpbGw9IiMyRUI2N0QiIGQ9Ik03My42OTcsMzYuODFjMCw1Ljc3OS00LjcyNCwxMC41MDMtMTAuNTA3LDEwLjUwM2MtNS43NzUsMC0xMC41MDMtNC43MjQtMTAuNTAzLTEwLjUwM1YxMC41MDcNCgkJCUM1Mi42ODgsNC43MjQsNTcuNDE1LDAsNjMuMTksMGM1Ljc4MywwLDEwLjUwNyw0LjcyNCwxMC41MDcsMTAuNTA3VjM2LjgxeiIvPg0KCTwvZz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0VDQjIyRSIgZD0iTTYzLjE5LDc4Ljk4NmM1Ljc4MywwLDEwLjUwNyw0LjcyNCwxMC41MDcsMTAuNTA3UzY4Ljk3NCwxMDAsNjMuMTksMTAwDQoJCQljLTUuNzc1LDAtMTAuNTAzLTQuNzI0LTEwLjUwMy0xMC41MDdWNzguOTg2SDYzLjE5eiIvPg0KCQk8cGF0aCBmaWxsPSIjRUNCMjJFIiBkPSJNNjMuMTksNzMuNjk3Yy01Ljc3NSwwLTEwLjUwMy00LjcyNC0xMC41MDMtMTAuNTA3YzAtNS43NzUsNC43MjgtMTAuNTAzLDEwLjUwMy0xMC41MDNoMjYuMzAzDQoJCQljNS43ODMsMCwxMC41MDcsNC43MjgsMTAuNTA3LDEwLjUwM2MwLDUuNzgzLTQuNzI0LDEwLjUwNy0xMC41MDcsMTAuNTA3SDYzLjE5eiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K" />
        Add to Slack
    </button>
  )
  const Button2 = ({ align }) => (
    <button className="my-button"  width='210px' display='flex' style={stylesObj} align-items='center'>
      &nbsp;
       Get Started Free
    </button>
  )
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
              {/* <a href="#1">
                <Button {...fillButton}  title=" Start  free trail"  width="139" style={stylesObj}/>
              </a>

              <div> */}
  <Button2/>
  &nbsp;&nbsp;&nbsp;&nbsp;
  <Button1 />
  
{/* </div> */}







              
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
