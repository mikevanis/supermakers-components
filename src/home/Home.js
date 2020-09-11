import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import HomeItem from './HomeItem';

import key from '../assets/svgs/menu/key.svg';
import wind from '../assets/svgs/menu/wind.svg';

import badge from '../assets/svgs/menu/badge.svg';
import level2 from '../assets/svgs/menu/level2-led.svg';
import level3 from '../assets/svgs/menu/level3-lamp.svg';
import level4 from '../assets/svgs/menu/level4-wave.svg';
import level5 from '../assets/svgs/menu/level5-drawing.svg';
import level6 from '../assets/svgs/menu/level6-origami.svg';
import level7 from '../assets/svgs/menu/level7-windmill.svg';
import level8 from '../assets/svgs/menu/level8-button.svg';
import level9 from '../assets/svgs/menu/level9-eye.svg';

class Home extends React.Component {

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
                <img src={wind} alt="" width="100%"/>
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
                title="Hello World"
                svg={level2}
                levelIndex={1}
                state={"done"}
                key={"Hello World"}
                bgcolor="#04BF8A"
                body={"Learn about renewable energies."}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <HomeItem
                title="LED Circuit"
                svg={level2}
                levelIndex={2}
                state={"unlocked"}
                key={"LED Circuit"}
                bgcolor="#04BF8A"
                body={"Build an electronic circuit to light the LED."}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <HomeItem
                title="Lamp Shade"
                svg={level3}
                levelIndex={3}
                state={"locked"}
                key={"Lamp Shade"}
                bgcolor="#FFAFA6"
                body={"Draw and design a lamp shade for your LED light."}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <HomeItem
                title="Wind Energy"
                svg={level4}
                levelIndex={4}
                state={"locked"}
                key={"Wind Energy"}
                bgcolor="#96D5EF"
                body={"Build a circuit that uses wind energy to light the LED."}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <HomeItem
                title="Draw Windmill"
                svg={level5}
                levelIndex={5}
                state={"locked"}
                key={"Draw Windmill"}
                bgcolor="#96D5EF"
                body={"Plan and draw your windmill for your wind energy station."}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <HomeItem
                title="Origami"
                svg={level6}
                levelIndex={6}
                state={"locked"}
                key={"Origami"}
                bgcolor="#04BF8A"
                body={"Fold the blades for your very own windmill."}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <HomeItem
                title="Wind Station"
                svg={level7}
                levelIndex={7}
                state={"locked"}
                key={"Wind Station"}
                bgcolor="#04BF8A"
                body={"Complete and set up your wind energy station."}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <HomeItem
                title="Test Lab"
                svg={level8}
                levelIndex={8}
                state={"locked"}
                key={"Test Lab"}
                bgcolor="#FFAFA6"
                body={"Test how much electricity your wind energy station could generate."}
              />
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <HomeItem
                title="Gallery"
                svg={level9}
                levelIndex={9}
                state={"locked"}
                key={"Gallery"}
                bgcolor="#96D5EF"
                body={"Have a look at wind energy stations from other Super Makers all over the world."}
              />
            </Grid>
          </Grid>
      </Box>
    );
  }
}

export default Home;
