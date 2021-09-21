import React, { useState } from 'react'
import styled from 'styled-components'
import { useQuery } from '@apollo/client'
import { Link, withRouter } from 'react-router-dom'
import { isLoggedInVar } from '../cache'
import { GET_ME, IS_LOGGED_IN } from '../gql/query'
import { AddCircle, Home, LibraryBooks, Stars, Person, PersonAdd, ExitToApp } from '@material-ui/icons'
import { motion, AnimatePresence } from 'framer-motion'

const HeaderBar = styled.header`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  background-color: #24252A;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #edf0f1;
  text-decoration: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30 10%;
  width: 100%;
  position: fixed;
  height: 10vh;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 4.25);
  z-index: 2;
  div {
    p {
      a {
        color: #9ba4d1;
        :hover {
          color: #697ad1;
        }
      }
    }
  }
`;

const Logo = styled.div`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #edf0f1;
    display: flex;
    align-items: center;
  }
`

const NavLinks = styled.ul`
  @media (max-width: 975px) {
    display: none;
  }
  list-style: none;
  a {
    text-decoration: none;
    color: #edf0f1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    :hover {
      color: #0088a9;
    }
    p {
      margin-left: 7px;
    }
  }
`

const Li = styled.li`
  display: inline-block;
  padding: 0px 20px;
  transition: all 0.3s ease 0s;
`

const Button = styled.button`
  padding: 9px 25px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 60px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  color: #edf0f1;
  :hover {
    background-color: rgba(0, 136, 169, 0.8);
  }
  @media (max-width: 975px) {
    display: none;
  }
`

const LogoText = styled.h1`
  margin: 0;
  margin-left: 10px;
  padding: 0;
  display: inline;
  font-family: 'Days One', sans-serif;
`

const HiddenNav = styled(motion.div)`
  position: absolute;
  top: 10vh;
  height: 90vh;
  width: 200vh;
  background-color: black;
  z-index: 3;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
  @media (min-width: 975px) {
    display: none;
  }
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    li {
      cursor: pointer;
      a {  
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-decoration: none;
        color: #edf0f1;
        p {
          margin-left: 5px;
        }
      }
    }
  }
`

const P = styled.p`
  @media (max-width: 975px) {
    display: none;
  }
`

const Img = styled.img`
  border-radius: 50%;
  height: 60%;
  @media (max-width: 1100px) {
    display: none;
  }
`

const AvatarDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 15%;
  @media (max-width: 1100) {
    width: 10%;
  }
`

const FlexDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

const Svg = styled(motion.svg)`
  cursor: pointer;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 975px) {
    display: none;
  }
`

const Header = props => {

  const { data } = useQuery(IS_LOGGED_IN)

  const  { data: meData, loading } = useQuery(GET_ME)

  const [showNav, setShowNav] = useState(false)

  const [hovering, setHovering] = useState(true)

  const hideHandler = () => {
    setShowNav(false)
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <HeaderBar>
      <Logo>
        <Link to='/'>
          <img
            className="logo"
            src="https://www.buythelogo.com/wp-content/uploads/2019/03/Letter-B-line-geometric-logo-vector.jpg"
            alt="Bloggedly logo"
            height="40"
          />
          <LogoText>Bloggedly</LogoText>
        </Link>
      </Logo>
      <nav className='hide'>
        <NavLinks>
          <Li>
            <Link to='/'>
              <Home />
              <p>Home</p>
            </Link>
          </Li>
          <Li>
            <Link to='/myblogs'>
              <LibraryBooks />
              <p>My Blogs</p>
            </Link>
          </Li>
          <Li>
            <Link to='/favorites'>
              <Stars />
              <p>Favorites</p>
            </Link>
          </Li>
          <Li>
            <Link to='/new'>
              <AddCircle />
              <p>New</p>
            </Link>
          </Li>
        </NavLinks>
      </nav>
      <AvatarDiv className='hide'>
        {data.isLoggedIn ? (
          <FlexDiv>
            <Img
              src={`https://avatars.dicebear.com/api/bottts/${meData.me.username}.svg?background=%23212121`}
            />
            <Button
              onClick={() => {
                localStorage.removeItem('token')
                isLoggedInVar(false)
                props.history.push('/')
              }}
            >Log out</Button>
          </FlexDiv>
        ) : (
          <P>
            <Link to={`/signin`}>Sign In</Link> or {' '}
            <Link to={`/signup`}>Sign Up</Link>
          </P>
        )}
      </AvatarDiv>
      <Svg width="40" height="40" viewBox="0 0 23 23"
        animate={showNav ? "open" : "closed"}
        whileHover={hovering ? 'hover' : 'open'}
        onClick={(e) => {
          if (showNav) {
            setHovering(true)
            setShowNav(false)
          } else {
            setHovering(false)
            setShowNav(true)
          }
        }}
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 4 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
            hover: { d: "M 2 2.5 L 20 2.5" }
          }}
        />
        <Path
          d="M 2 9.423 L 10 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
            hover: { d: "M 2 9.423 L 20 9.423" }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 17 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
            hover: { d: "M 2 16.346 L 20 16.346" }
          }}
        />
      </Svg>
      {/* <Burger 
        onClick={(e) => {
          if (showNav) {
            setShowNav(false)
          } else {
            setShowNav(true)
          }
        }}
        animate={showNav ? "open" : "closed"}
      >
        <motion.div
          variants={variants1}
        ></motion.div>
        <motion.div
          variants={variants2}
        ></motion.div>
        <motion.div
          variants={variants3}
        ></motion.div>
      </Burger> */}
      <AnimatePresence>
        {showNav && (
          <HiddenNav
            initial={{
              x: '150%'
            }}
            animate={{
              x: 0
            }}
            transition={{
              type: 'spring',
              damping: 15
            }}
            exit={{
              x: '150%'
            }}
          >
            <ul>
              <motion.li
                whileHover={{
                  scale: 1.1
                }}
              >
                <Link to='/' onClick={hideHandler}>
                  <Home />
                  <p>Home</p>
                </Link>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1
                }}
              >
                <Link to='/myblogs' onClick={hideHandler}>
                  <LibraryBooks />
                  <p>My Blogs</p>
                </Link>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1
                }}
              >
                <Link to='/favorites' onClick={hideHandler}>
                  <Stars />
                  <p>Favorites</p>
                </Link>
              </motion.li>
              <motion.li
                whileHover={{
                  scale: 1.1
                }}
              >
                <Link to='/new' onClick={hideHandler}>
                  <AddCircle />
                  <p>New</p>
                </Link>
              </motion.li>
              {data.isLoggedIn ? (
                <motion.li
                  whileHover={{
                    scale: 1.1
                  }}
                >
                  <a
                    onClick={() => {
                      hideHandler()
                      localStorage.removeItem('token')
                      isLoggedInVar(false)
                      props.history.push('/')
                    }}
                  >
                    <ExitToApp />
                    <p>Log Out</p>
                  </a>
                </motion.li>
              ) : (
                <React.Fragment>
                  <motion.li
                    whileHover={{
                      scale: 1.1
                    }}
                  >
                    <Link
                      to='/signin'
                      onClick={hideHandler}
                    >
                      <Person />
                      <p>Sign In</p>
                    </Link>
                  </motion.li>
                  <motion.li
                    whileHover={{
                      scale: 1.1
                    }}
                  >
                    <Link
                      to='/signup'
                      onClick={hideHandler}
                    >
                      <PersonAdd />
                      <p>Sign up</p>
                    </Link>
                  </motion.li>
                </React.Fragment>
              )}
            </ul>
          </HiddenNav>
        )}
      </AnimatePresence>
    </HeaderBar>
  )
}

export default withRouter(Header)