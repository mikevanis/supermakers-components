import React from 'react';
import paper from 'paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SmButton from './SmButton';

const canvasStyles = {
  width: "100%",
  height: "100%",
  display: 'block',
  boxShadow: '0 0 0 20px #ffdc20 inset',
};

const helpBarStyles = {
  root: {
    padding: '0 20px 20px 20px',
    backgroundColor: '#ffdc20',
  },
  content: {
    color: '#182a74',
    fontSize: 20,
    flexGrow: 1,
    alignSelf: 'center',
  }
}

const componentsInWorkspace = [
  {
    name: 'battery',
    svg: 'path/to/file',
    nodes: [
      {
        x: 100, y: 0,
        connectedTo: {
          name: 'led',
          node: 0
        }
      },
      {
        x: 0, y: 0,
        connectedTo: {
          name: 'led',
          node: 1
        }
      },
    ],
  },
  {
    name: 'led',
    svg: 'path/to/file',
    nodes: [
      {
        x: 100, y: 0,
        entryPoint: 'bottom',
        connectedTo: {
          name: 'battery',
          node: 0
        }
      },
      {
        x: 0, y: 0,
        entryPoint: 'bottom',
        connectedTo: {
          name: 'battery',
          node: 1
        }
      },
    ],
  }
];

class SmWireSketcher extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.containerRef = React.createRef();
  }

  componentDidMount() {
    let canvas = document.getElementById("myCanvas");
    canvas.style.background = "#04bf8a";
    paper.setup(canvas);

    // Setup tool
    let tool = new paper.Tool();
    tool.onMouseDown = this.onMouseDown;
    tool.onMouseDrag = this.onMouseDrag;
    tool.onMouseUp = this.onMouseUp;

    // Here, we should load the SVGs and draw them onto the screen.
  }

  render() {
    return(
      <Box
        display="flex"
        flexDirection="column"
        ref={this.containerRef}
        width={1}
        flexGrow={1}
      >
        <Box flexGrow={1}>
          <canvas
            id="myCanvas"
            ref={this.canvasRef}
            data-paper-resize
            style={canvasStyles}
          ></canvas>

        </Box>
        <Box
          style={helpBarStyles.root}
          display="flex"
        >
          <Typography style={helpBarStyles.content}>
            Draw lines to connect power to the LED.
          </Typography>
          <SmButton color="blue">Help</SmButton>
        </Box>
      </Box>
    );
  }
}

export default SmWireSketcher;
