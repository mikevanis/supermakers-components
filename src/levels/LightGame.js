import React from 'react';
import paper from 'paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SmButton from '../ui/SmButton';
import batterySvg from '../assets/svgs/battery.svg';
import ledSvg from '../assets/svgs/led.svg';
import { motion } from 'framer-motion';

const canvasStyles = {
  width: "100%",
  height: "100%",
  display: 'block',
  zIndex: '0',
  boxShadow: '0 0 0 20px #ffdc20 inset',
};

const testFrameStyles = {
  position: 'absolute',
  top: '20px',
  left: '20px',
  right: '20px',
  bottom: '20px',
  background: 'linear-gradient(90deg, red 50%, white 50%), linear-gradient(90deg, red 50%, white 50%), linear-gradient(0deg, red 50%, white 50%), linear-gradient(0deg, red 50%, white 50%)',
  backgroundRepeat: 'repeat-x, repeat-x, repeat-y, repeat-y',
  backgroundSize: '120px 5px, 120px 5px, 5px 120px, 5px 120px',
  backgroundPosition: '0px 0px, 0px 100%, 0px 0px, 100% 0px',
}

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

const testButtonStyles = {
  root: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    bottom: '40px',
  },
};

const stagesText = [
  "Connect the battery with the LED. Push the test button when you're ready!",
  "Now connect the switch so you can turn the LED on and off!"
];

const componentsInWorkspace = [
  {
    name: 'battery',
    svg: batterySvg,
    nodes: [
      {
        x: 15, y: 45,
        connectsTo: {
          name: 'led',
          node: 0
        },
        isConnected: false,
      },
      {
        x: 347, y: 45,
        connectsTo: {
          name: 'led',
          node: 1
        },
        isConnected: false,
      },
    ],
  },
  {
    name: 'led',
    svg: ledSvg,
    nodes: [
      {
        x: 15, y: 197,
        connectsTo: {
          name: 'battery',
          node: 0
        },
        isConnected: false,
      },
      {
        x: 87, y: 164,
        connectsTo: {
          name: 'battery',
          node: 1
        },
        isConnected: false,
      },
    ],
  }
];

class LightGame extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.containerRef = React.createRef();

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseDrag = this.onMouseDrag.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onFrame = this.onFrame.bind(this);
    this.onTest = this.onTest.bind(this);

    this.state = {
      paths: [],
      items: [],
      currentPath: null,
      gradient: null,
      isTesting: false,
      erasing: false,
      stage: 0,
    };
  }

  componentDidMount() {
    let canvas = document.getElementById("myCanvas");
    canvas.style.background = "#04bf8a";
    const project = new paper.Project(canvas);

    // Setup tool
    let tool = new paper.Tool();
    tool.onMouseDown = this.onMouseDown;
    tool.onMouseDrag = this.onMouseDrag;
    tool.onMouseUp = this.onMouseUp;
    paper.view.onFrame = this.onFrame;

    // Load SVGs
    this.importItems(componentsInWorkspace, project);
  }

  // Import all items within an array
  importItems(items, project) {
    let importedItems = [];
    items.forEach((item) => {
      project.importSVG(item.svg, (svgGroup) => {
        console.log(svgGroup);
        svgGroup.data = item;
        if (item.name === 'battery'){
          svgGroup.position = new paper.Point(
            paper.view.center.x - svgGroup.bounds.width/2 + 20,
            paper.view.center.y / 2
          );
        } else if (item.name === 'led') {
          svgGroup.position = new paper.Point(
            paper.view.center.x + paper.view.size.width/4,
            paper.view.center.y
          );
        }
        importedItems.push(svgGroup);
      });
    });
    console.log(importedItems);
    this.setState({items: importedItems});
  }

  // Mouse down event
  onMouseDown(e) {
    console.log(e.item);
    // If we're near a node, let's create a path.
    if (e.item.data !== null) {
      // TODO make sure item has nodes and data.
      e.item.data.nodes.forEach((node) => {
        const absoluteX = node.x + e.item.bounds.x;
        const absoluteY = node.y + e.item.bounds.y;
        if (Math.abs(absoluteX - e.point.x) <= 15 && Math.abs(absoluteY - e.point.y) <= 15) {
          // We're on a node! Let's start drawing
          let connectedPath = this.findConnectedPath(absoluteX, absoluteY);
          if (connectedPath !== null) {
            console.log("Path already connected!");
            connectedPath.remove();
          }
          console.log(node);
          const path = new paper.Path({
            segments: [new paper.Point(absoluteX, absoluteY)],
            strokeColor: "#1a2874",
            strokeWidth: 2,
            strokeCap: "round"
          });
          this.setState({currentPath: path});
        }
      });
    }
  }

  // Mouse up event
  onMouseUp(e) {
    console.log(e);
    // If we're ending on a node, let's finish the path.
    // If we're near a node, let's create a path.
    if (this.state.currentPath !== null) {
      let hasLandedOnNode = false;
      const items = this.state.items;
      items.forEach((item) => {
        console.log(item);
        item.data.nodes.forEach((node) => {
          const absoluteX = node.x + item.bounds.x;
          const absoluteY = node.y + item.bounds.y;
          if (Math.abs(absoluteX - e.point.x) <= 15 && Math.abs(absoluteY - e.point.y) <= 15) {
            // TODO Check if a path is already on the node.
            // We're on a node! Let's finish the path and store it.
            let connectedPath = this.findConnectedPath(absoluteX, absoluteY);
            if (connectedPath !== null) {
              console.log("Path already connected!");
              connectedPath.remove();
            }
            hasLandedOnNode = true;
            let path = this.state.currentPath;
            path.add(new paper.Point(absoluteX, absoluteY));
            path.simplify(80);
            let _paths = this.state.paths;
            _paths.push(path);
            this.setState({
              paths: _paths,
              currentPath: null,
            });
          }
        });
      });
      if (hasLandedOnNode === false) {
        let path = this.state.currentPath;
        path.remove();
        this.setState({
          currentPath: null,
        });
      }
    }
  }

  findConnectedPath(absoluteX, absoluteY) {
    let result = null;
    this.state.paths.forEach((p) => {
      if (p.firstSegment.point.x === absoluteX && p.firstSegment.point.y === absoluteY) result = p;
      if (p.lastSegment.point.x === absoluteX && p.lastSegment.point.y === absoluteY) result = p;
    });
    return result;
  }

  // Mouse drag event
  onMouseDrag(e) {
    console.log(e);
    // Change end of path to match the cursor
    if (this.state.currentPath !== null) {
      const path = this.state.currentPath;
      path.add(e.point);
      this.setState({currentPath: path});
    }
  }

  isWiringCorrect(state) {
    let correctPaths = 0;
    console.log("Num of paths: " + this.state.paths.length);
    const paths = this.state.paths;
    const items = this.state.items;
    if (this.state.paths.length < this.state.items.length) {
      console.log("Oops! Looks like there are some wires missing.");
      return false;
    }
    paths.forEach((path) => {
      let firstItem, firstNode, lastItem, lastNode = null;
      items.forEach((item) => {
        item.data.nodes.forEach((node, i) => {
          const absoluteX = node.x + item.bounds.x;
          const absoluteY = node.y + item.bounds.y;
          if (
            path.firstSegment.point.x === absoluteX &&
            path.firstSegment.point.y === absoluteY
          ) {
            // Node matches with start of path.
            firstItem = item;
            firstNode = i;
            console.log('first item of path: ' + firstItem.data.name + firstNode);
          }
          if (
            path.lastSegment.point.x === absoluteX &&
            path.lastSegment.point.y === absoluteY
          ) {
            // Node matches with end of path.
            lastItem = item;
            lastNode = i;
            console.log('last item of path: ' + lastItem.data.name + lastNode);
          }
        });
      });
      // Here we have to check if path connects two items correctly.
      if (firstItem.data.nodes[firstNode].connectsTo.name === lastItem.data.name) {
        // Node is connected to the right item. Is it connected to the right node?
        if (firstItem.data.nodes[firstNode].connectsTo.node === lastNode) {
          correctPaths++;
        }
      }
    });
    if (correctPaths === 2) {
      return true;
    } else {
      console.log("Oops! Looks like there's a mistake in your circuit!");
      return false;
    }
  }

  shineLed() {
    let absoluteX, absoluteY = null;
    this.state.items.forEach((item) => {
      if (item.data.name === 'led') {
        absoluteX = item.bounds.x + 51;
        absoluteY = item.bounds.y + 30;
      }
    })
    let path = new paper.Path.Circle({
      center: new paper.Point(absoluteX, absoluteY),
      radius: 92
    });

    path.fillColor = {
        gradient: {
            stops: [new paper.Color(255, 255, 0, 1), new paper.Color(255, 255, 0, 0)],
            radial: true
        },
        origin: path.position,
        destination: path.bounds.rightCenter
    };
    this.setState({gradient: path});
  }

  onFrame(e) {
    if (this.state.gradient !== null) {
      let stop = this.state.gradient.fillColor.gradient.stops[1];
      // Animate the offset between 0.7 and 0.9:
      stop.offset = Math.sin(e.time * 5) * 0.1 + 0.8;
    }
  }

  onTest() {
    this.setState({isTesting: !this.state.isTesting}, () => {
      if (this.state.isTesting) {
        setTimeout(() => {
          if (this.isWiringCorrect()) {
            this.shineLed();
          }
          else {
            console.log("Oops!");
          }
        }, 500);
      } else {
        if (this.state.gradient) {
          this.state.gradient.remove();
          this.setState({gradient: null});
        }
      }
    });
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
        <Box flexGrow={1} position="relative">
          <canvas
            id="myCanvas"
            ref={this.canvasRef}
            data-paper-resize
            style={canvasStyles}
          ></canvas>
          {this.state.isTesting &&
          <motion.div
            animate={{
              backgroundPosition: '120px 0px, -120px 100%, 0px -120px, 100% 120px',
            }}
            transition={{
              type: 'tween',
              duration: 4,
              loop: Infinity,
              ease: 'linear',
            }}
            style={testFrameStyles}
          ></motion.div>
          }
          <Box style={testButtonStyles.root}>
            <SmButton color="orange" onClick={this.onTest}>Test</SmButton>
          </Box>
        </Box>
        <Box
          style={helpBarStyles.root}
          display="flex"
        >
          <Typography style={helpBarStyles.content}>
            {stagesText[this.state.stage]}
          </Typography>
          <SmButton color="blue">Help</SmButton>
        </Box>
      </Box>
    );
  }
}

export default LightGame;
