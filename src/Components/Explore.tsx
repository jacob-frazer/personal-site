import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import colours from '../utils/colours';

const BackgroundDiv = styled.div`
padding-top: 200px;
margin: 0;
padding: 0;
width: 100vw;
height: 100vh;
background-color: rgb(${colours.light});
color: white;
display: flex;
flex-direction: column;
flex-wrap: wrap;
text-decoration: none;
a { text-decoration: none; color: white;}
`;

const BlogsDiv = styled.div`
padding: 80px;
color: white;
font-size: 80pt;
float: left;
`;

const PeopleDiv = styled.div`
padding: 80px;
color: white;
font-size: 80pt;
`;

class ExplorePage extends React.Component{
    render(){
      return(
        <BackgroundDiv>
            This is the explore page, you can learn more about us and our people here.

            <BlogsDiv><a href="/explore/posts">Read our stuff...</a></BlogsDiv>
            <PeopleDiv><a href="/explore/people">Meet our people...</a></PeopleDiv>
        </BackgroundDiv>
      )
    }
  }

export default ExplorePage;