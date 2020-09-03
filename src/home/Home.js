import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HomeItem from './HomeItem';

import key from '../assets/svgs/menu/key.svg';
import wind from '../assets/svgs/menu/wind.svg';

import badge from '../assets/svgs/menu/badge.svg';
import level2 from '../assets/svgs/menu/level2-led.svg';

const homeItems = [
  {
    title: "Hello Wind Energy",
    svg: badge,
    levelIndex: 1,
    state: "unlocked",
  },
];

class Home extends React.Component {

  renderItems() {
    homeItems.map((item) =>
      <Grid item xs={12}>
        {console.log(item.title)}
        <HomeItem
          title={item.title}
          svg={item.svg}
          levelIndex={item.levelIndex}
          state={item.state}
          key={item.title}
        />
      </Grid>
    );
  }

  render() {
    return(
      <Box
        bgcolor="#FFDC20"
        flexGrow={1}
        p="30px 40px 30px 40px"
      >
          <Box display="flex" flexDirection="row" m={"0px 0px 38px 0px"}>
            <Box flex={2}>
              <Typography variant="h3" style={{color: "#182a74", fontSize: 26}}>
                Renewable Energy:
              </Typography>
              <br/>
              <Typography variant="h1" style={{color: "#182a74", fontSize: 80}}>
                Wind
              </Typography>
              <Box m={"32px 0px 0px 0px"}>
                <img src={wind} alt=""/>
              </Box>
            </Box>
            <Box flex={1}>
              <img src={key} alt=""/>
              <br/>
              <br/>
              <Typography style={{color: "#182a74", fontSize: 16}}>
                Complete one level to unlock the next.
              </Typography>
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item md={4} sm={6} xs={12}>
              <HomeItem
                title="Test"
                svg={level2}
                levelIndex={2}
                state={"unlocked"}
                key={"Test"}
                bgcolor="#04BF8A"
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <HomeItem
                title="Test2"
                svg={level2}
                levelIndex={3}
                state={"unlocked"}
                key={"Test2"}
                bgcolor="#04BF8A"
                body={"Here is some more text here."}
              />
            </Grid>
          </Grid>
      </Box>
    );
  }
}

export default Home;
