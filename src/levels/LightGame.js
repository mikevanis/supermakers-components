import React from 'react';
import paper from 'paper';
import { withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IntermediateModal from './IntermediateModal';
import WoopModal from './WoopModal';
import SmButton from '../ui/SmButton';
import SmSliderButton from '../ui/SmSliderButton';
import batterySvg from '../assets/svgs/battery.svg';
import ledSvg from '../assets/svgs/led.svg';
import switchSvg from '../assets/svgs/switch.svg';
import successLed from '../assets/svgs/success-led.svg';
import missingConnectionsLed from '../assets/svgs/missing-connections-led.svg';
import mistakeLed from '../assets/svgs/mistake-led.svg';
import helpDiagram from '../assets/svgs/help-led.svg';
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
  pointerEvents: 'none',
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
        connectsTo: [
          {
            name: 'led',
            node: 0
          }
        ],
      },
      {
        x: 347, y: 45,
        connectsTo: [
          {
            name: 'led',
            node: 1
          },
          {
            name: 'switch',
            node: 0
          },
        ],
      },
    ],
    isActive: true,
  },
  {
    name: 'led',
    svg: ledSvg,
    nodes: [
      {
        x: 15, y: 197,
        connectsTo: [
          {
            name: 'battery',
            node: 0
          },
        ],
      },
      {
        x: 87, y: 164,
        connectsTo: [
          {
            name: 'battery',
            node: 1
          },
          {
            name: 'switch',
            node: 1
          },
        ],
      },
    ],
    isActive: true,
  },
  {
    name: 'switch',
    svg: switchSvg,
    nodes: [
      {
        x: 85, y: 15,
        connectsTo: [
          {
            name: 'battery',
            node: 1
          },
        ],
      },
      {
        x: 85, y: 188,
        connectsTo: [
          {
            name: 'led',
            node: 1
          },
        ],
      },
    ],
    isActive: false,
  },
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
    this.showNextStageModal = this.showNextStageModal.bind(this);
    this.advanceStage = this.advanceStage.bind(this);
    this.showErrorModal = this.showErrorModal.bind(this);
    this.tryAgain = this.tryAgain.bind(this);
    this.keepPlaying = this.keepPlaying.bind(this);
    this.showHelpModal = this.showHelpModal.bind(this);
    this.hideHelpModal = this.hideHelpModal.bind(this);

    this.state = {
      paths: [],
      items: [],
      currentPath: null,
      gradient: null,
      isTesting: false,
      erasing: false,
      stage: 0,
      isNextStageModalOpen: false,
      errorImage: null,
      errorText: '',
      isErrorModalOpen: false,
      isWoopModalOpen: false,
      isHelpModalOpen: false,
      activeTool: null,
      isSwitchPressed: false,
    };
  }

  componentDidMount() {
    let canvas = document.getElementById("myCanvas");
    canvas.style.background = "#04bf8a";
    const project = new paper.Project(canvas);

    // Setup tool
    let tool = new paper.Tool();
    this.setState({activeTool: tool});
    tool.onMouseDown = this.onMouseDown;
    tool.onMouseDrag = this.onMouseDrag;
    tool.onMouseUp = this.onMouseUp;
    paper.view.onFrame = this.onFrame;

    // Load SVGs
    this.importItems(componentsInWorkspace, project);
  }

  componentWillUnmount() {
    this.state.activeTool.remove();
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
        } else if (item.name === 'switch') {
          svgGroup.position = new paper.Point(
            paper.view.center.x - paper.view.size.width / 5,
            paper.view.center.y + paper.view.size.height / 5
          );
        }
        if (svgGroup.data.isActive === false) svgGroup.opacity = 0.3;
        importedItems.push(svgGroup);
      });
    });
    console.log(importedItems);
    this.setState({items: importedItems});
  }

  // Mouse down event
  onMouseDown(e) {
    console.log(e.item);
    let onNode = false;
    // If we're near a node, let's create a path.
    if (e.item && e.item.data && e.item.data.nodes) {
      e.item.data.nodes.forEach((node) => {
        if (e.item.data.isActive) {
          const absoluteX = node.x + e.item.bounds.x;
          const absoluteY = node.y + e.item.bounds.y;
          if (Math.abs(absoluteX - e.point.x) <= 15 && Math.abs(absoluteY - e.point.y) <= 15) {
            // We're on a node! Let's start drawing
            let connectedPath = this.findConnectedPath(absoluteX, absoluteY);
            if (connectedPath !== null) {
              console.log("Path already connected!");
              connectedPath.remove();
              this.deleteConnectedPath(absoluteX, absoluteY);
            }
            console.log(node);
            const path = new paper.Path({
              segments: [new paper.Point(absoluteX, absoluteY)],
              strokeColor: "#1a2874",
              strokeWidth: 2,
              strokeCap: "round"
            });
            this.setState({currentPath: path});
            onNode = true;
          }
        }
      });
    }

    if (this.state.isTesting && this.state.stage === 1 && onNode == false) {
      // Check if switch is being pressed.
      if (e.item.data.name === 'switch') {
        this.setState({isSwitchPressed: true}, () => {
          this.checkWiring();
        });
      }
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
            let connectedPath = this.findConnectedPath(absoluteX, absoluteY);
            if (connectedPath !== null) {
              console.log("Path already connected!");
              connectedPath.remove();
              this.deleteConnectedPath(absoluteX, absoluteY);
            }
            if (item.data.isActive) {
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

  deleteConnectedPath(absoluteX, absoluteY) {
    let result = null;
    let newPaths = this.state.paths;
    newPaths.forEach((p, index) => {
      if (p.firstSegment.point.x === absoluteX && p.firstSegment.point.y === absoluteY) result = index;
      if (p.lastSegment.point.x === absoluteX && p.lastSegment.point.y === absoluteY) result = index;
    });
    if (result !== null) {
      newPaths.splice(result, 1);
      console.log("Deleted path with index " + result);
      this.setState({paths: newPaths});
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
    let numOfActiveItems = 0;
    items.forEach((item) => {
      if (item.data.isActive) numOfActiveItems++;
    });
    if (this.state.paths.length < numOfActiveItems) {
      console.log("Oops! Looks like there are some wires missing.");
      this.setErrorModalData("Oops! Looks like there are some wires missing.", missingConnectionsLed);
      return false;
    }
    paths.forEach((path) => {
      let firstItem, firstNode, lastItem, lastNode = null;
      items.forEach((item) => {
        if (item.data.isActive) {
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
        }
      });
      firstItem.data.nodes[firstNode].connectsTo.forEach((connection) => {
        // Here we have to check if path connects two items correctly.
        if (connection.name === lastItem.data.name) {
          // Node is connected to the right item. Is it connected to the right node?
          if (connection.node === lastNode) {
            correctPaths++;
          }
        }
      });
    });
    if (correctPaths === numOfActiveItems) {
      return true;
    } else {
      console.log("Oops! Looks like there's a mistake in your circuit!");
      this.setErrorModalData("Oops! Looks like there's a mistake in your circuit!", mistakeLed);
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

  unshineLed() {
    const gradient = this.state.gradient;
    if (gradient !== null) {
      gradient.remove();
      this.setState({gradient: null});
    }
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
        this.checkWiring();
      } else {
        if (this.state.gradient) {
          this.unshineLed();
        }
      }
    });
  }

  checkWiring() {
    setTimeout(() => {
      let isCorrect = this.isWiringCorrect();
      if ((isCorrect && this.state.stage === 0) || (isCorrect && this.state.isSwitchPressed && this.state.stage === 1)) {
        this.shineLed();
        setTimeout(() => {
          if (this.state.stage === 0) this.showNextStageModal();
          else this.showWhoopModal();
        }, 1500);
      }
      else if (!isCorrect) {
        this.showErrorModal();
      }
    }, 500);
  }

  showHelpModal() {
    this.setState({ isHelpModalOpen: true });
  }

  hideHelpModal() {
    this.setState({ isHelpModalOpen: false });
  }

  showNextStageModal() {
    console.log("Nice one! Now wire up the switch.");
    this.setState({isNextStageModalOpen: true});
  }

  showWhoopModal() {
    console.log("Whoop!");
    this.setState({
      isWoopModalOpen: true,
    });
  }

  showErrorModal() {
    this.setState({
      isErrorModalOpen: true,
    });
  }

  setErrorModalData(eText, eImage) {
    this.setState({
      errorText: eText,
      errorImage: eImage,
    });
  }

  tryAgain() {
    this.setState({
      isErrorModalOpen: false,
      isTesting: false,
    });
  }

  keepPlaying() {
    this.setState({isWoopModalOpen: false});
  }

  advanceStage() {
    if (this.state.stage === 0) {
      let items = this.state.items;
      items.forEach((item) => {
        if (item.data.name === "switch") {
          item.data.isActive = true;
          item.opacity = 1;
        }
      });
      this.unshineLed();
      this.setState({
        items: items,
        stage: this.state.stage + 1,
        isNextStageModalOpen: false,
        isTesting: false
      }, this.unshineLed);
    }
  }

  render() {
    return(
      <Box
        position="relative"
        display="flex"
        flexDirection="column"
        ref={this.containerRef}
        width={1}
        flexGrow={1}
        styles={{position: 'relative'}}
      >
        <WoopModal
          isOpen={this.state.isWoopModalOpen}
          onBack={this.keepPlaying}
          onNextLevel={() => { this.props.history.push('/home');}}
        />
        <IntermediateModal
          isOpen={this.state.isNextStageModalOpen}
          bgcolor="#ffdc20"
          image={successLed}
          buttonText="Continue"
          textColor="#182a74"
          onButtonClick={this.advanceStage}
        >
          Great Work!
        </IntermediateModal>
        <IntermediateModal
          isOpen={this.state.isHelpModalOpen}
          bgcolor="#182a74"
          image={helpDiagram}
          buttonText="Continue"
          textColor="#fff"
          onButtonClick={this.hideHelpModal}
        >
          Here's what your circuit should look like at the end.
        </IntermediateModal>
        <IntermediateModal
          isOpen={this.state.isErrorModalOpen}
          bgcolor="#182a74"
          image={this.state.errorImage}
          buttonText="Try again"
          textColor="#fff"
          onButtonClick={this.tryAgain}
        >
          {this.state.errorText}
        </IntermediateModal>
        <Box
          display="flex"
          flexDirection="column"
          ref={this.containerRef}
          width={1}
          flexGrow={1}
          styles={{position: 'relative'}}
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
            <SmButton color="blue" onClick={this.showHelpModal}>Help</SmButton>
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withRouter(LightGame);
