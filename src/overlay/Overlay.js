import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  ViewPropTypes as RNViewPropTypes,
} from 'react-native';
import { elevations } from '../config/elevation';

const ViewPropTypes = RNViewPropTypes || View.propTypes;

const DIM_TYPE = 'window';

class Overlay extends React.Component {
  constructor(props) {
    super(props);

    const isWeb = Platform.OS === 'web';
    const dimensions = Dimensions.get(DIM_TYPE);
    this.state = {
      ...this._dimToState(dimensions),
      isWeb,
    };
  }

  _dimToState = dimensions => ({
    windowWidth: dimensions.width,
    windowHeight: dimensions.height,
    overlayWidth: dimensions.width - 80,
    overlayHeight: dimensions.height - 180,
  });

  _setDimensions = allDimensions => {
    this.setState(prevState => {
      return {
        ...prevState,
        ...this._dimToState(allDimensions[DIM_TYPE]),
      };
    });
  };

  componentDidMount() {
    Dimensions.addEventListener('change', this._setDimensions);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this._setDimensions);
  }

  render() {
    const {
      children,
      isVisible,
      containerStyle,
      overlayStyle,
      windowBackgroundColor,
      overlayBackgroundColor,
      borderRadius = parseInt(borderRadius) || 3,
      width,
      height,
      fullScreen,
      domNode,
      ...rest
    } = this.props;
    const { isWeb } = this.state;

    if (!isVisible) return null;

    const overlay = (
      <View
        style={[
          styles.container,
          { width: this.state.windowWidth, height: this.state.windowHeight },
          windowBackgroundColor && { backgroundColor: windowBackgroundColor },
          containerStyle,
        ]}
        {...rest}
      >
        <View
          style={[
            styles.overlay,
            { borderRadius },
            overlayBackgroundColor && {
              backgroundColor: overlayBackgroundColor,
            },
            width && { width },
            height && { height },
            {
              width: this.state.overlayWidth,
              height: this.state.overlayHeight,
            },
            fullScreen && {
              width: this.state.windowWidth,
              height: this.state.windowHeight,
            },
            overlayStyle,
          ]}
        >
          {children}
        </View>
      </View>
    );

    if (isWeb && domNode) {
      return ReactDOM.createPortal(overlay, domNode);
    } else {
      return overlay;
    }
  }
}

Overlay.propTypes = {
  children: PropTypes.any.isRequired,
  isVisible: PropTypes.bool.isRequired,
  containerStyle: ViewPropTypes.style,
  overlayStyle: ViewPropTypes.style,
  windowBackgroundColor: PropTypes.string,
  overlayBackgroundColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fullScreen: PropTypes.bool,
  domNode: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  overlay: {
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, .3)',
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 4,
      },
      android: {
        ...elevations.android.two,
      },
      web: {
        ...elevations.web.two,
      },
    }),
  },
});

export default Overlay;
