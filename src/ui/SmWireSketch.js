import React from 'react';
import paper from 'paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import SmButton from './SmButton';
import batterySvg from '../assets/svgs/battery.svg';
import ledSvg from '../assets/svgs/led.svg';

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
    svg: batterySvg,
    nodes: [
      {
        x: 15, y: 45,
        connectsTo: {
          name: 'led',
          node: 0
        }
      },
      {
        x: 347, y: 45,
        connectsTo: {
          name: 'led',
          node: 1
        }
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
        }
      },
      {
        x: 87, y: 164,
        connectsTo: {
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

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseDrag = this.onMouseDrag.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onFrame = this.onFrame.bind(this);

    this.state = {
      paths: [],
      items: [],
      currentPath: null,
      gradient: null,
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
            paper.view.center.x - svgGroup.bounds.width/2,
            paper.view.center.y
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
    if (e.item !== null) {
      // TODO make sure item has nodes and data.
      e.item.data.nodes.forEach((node) => {
        const absoluteX = node.x + e.item.bounds.x;
        const absoluteY = node.y + e.item.bounds.y;
        if (Math.abs(absoluteX - e.point.x) <= 15 && Math.abs(absoluteY - e.point.y) <= 15) {
          // We're on a node! Let's start drawing
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
            // We're on a node! Let's finish the path and store it.
            hasLandedOnNode = true;
            let path = this.state.currentPath;
            path.add(new paper.Point(absoluteX, absoluteY));
            path.simplify(80);
            let _paths = this.state.paths;
            _paths.push(path);
            this.setState({
              paths: _paths,
              currentPath: null,
            }, (state) => {
              if (this.state.paths.length === 2)
              if (this.isWiringCorrect()) {
                this.shineLed();
              }
              console.log();
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
    } else return false;
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
