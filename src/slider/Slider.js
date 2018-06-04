import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, StyleSheet, Animated, Easing, PanResponder } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';

// import shallowCompare from 'react-addons-shallow-compare';
// import styleEqual from 'style-equal'

const TRACK_SIZE = 4;
const THUMB_SIZE = 20;

var DEFAULT_ANIMATION_CONFIGS = {
  spring: {
    friction: 7,
    tension: 100,
  },
  timing: {
    duration: 150,
    easing: Easing.inOut(Easing.ease),
    delay: 0,
  },
};

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerSize: { width: 0, height: 0 },
      trackSize: { width: 0, height: 0 },
      thumbSize: { width: 0, height: 0 },
      value: new Animated.Value(props.value),
      length: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    var newValue = nextProps.value;

    if (this.props.value !== newValue) {
      if (this.props.animateTransitions) {
        this.setCurrentValueAnimated(newValue);
      } else {
        this.setCurrentValue(newValue);
      }
    }
  }

  setCurrentValue(value) {
    this.state.value.setValue(value);
  }

  setCurrentValueAnimated(value) {
    var animationType = this.props.animationType;
    var animationConfig = Object.assign(
      {},
      DEFAULT_ANIMATION_CONFIGS[animationType],
      this.props.animationConfig,
      {
        toValue: value,
      }
    );

    Animated[animationType](this.state.value, animationConfig).start();
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderGrant: this.handlePanResponderGrant.bind(this),
      onPanResponderMove: this.handlePanResponderMove.bind(this),
      onPanResponderRelease: this.handlePanResponderEnd.bind(this),
      onPanResponderTerminationRequest: this.handlePanResponderRequestEnd.bind(
        this
      ),
      onPanResponderTerminate: this.handlePanResponderEnd.bind(this),
    });
  }

  handlePanResponderGrant(/*e: Object, gestureState: Object*/) {
    this._previousPos = this.getThumbPos(this.getCurrentValue());
    this.fireChangeEvent('onSlidingStart');
  }

  handlePanResponderMove(e, gestureState) {
    if (this.props.disabled) {
      return;
    }

    this.setCurrentValue(this.getValue(gestureState));
    this.fireChangeEvent('onValueChange');
  }

  handlePanResponderRequestEnd() {
    // Should we allow another component to take over this pan?
    return false;
  }

  handlePanResponderEnd(e, gestureState) {
    if (this.props.disabled) {
      return;
    }

    this.setCurrentValue(this.getValue(gestureState));
    this.fireChangeEvent('onSlidingComplete');
  }

  fireChangeEvent(event) {
    if (this.props[event]) {
      this.props[event](this.getCurrentValue());
    }
  }

  measureContainer(e) {
    const { width, height } = e.nativeEvent.layout;
    const size = { width, height };
    this.setState(prevState => {
      return {
        ...prevState,
        containerSize: size,
        length:
          this.props.orientation === 'vertical'
            ? size.height - prevState.thumbSize.height
            : size.width - prevState.thumbSize.width,
      };
    });
  }

  measureTrack(e) {
    const { width, height } = e.nativeEvent.layout;
    const size = { width, height };
    this.setState(prevState => {
      return {
        ...prevState,
        trackSize: size,
      };
    });
  }

  measureThumb(e) {
    const { width, height } = e.nativeEvent.layout;
    const size = { width, height };
    this.setState(prevState => {
      return {
        ...prevState,
        thumbSize: size,
        length:
          this.props.orientation === 'vertical'
            ? size.height - prevState.thumbSize.height
            : size.width - prevState.thumbSize.width,
      };
    });
  }

  getValue(gestureState) {
    var thumbPos =
      this._previousPos +
      (this.props.orientation === 'vertical'
        ? gestureState.dy
        : gestureState.dx);

    var ratio = thumbPos / this.state.length;

    if (this.props.step) {
      return Math.max(
        this.props.minimumValue,
        Math.min(
          this.props.maximumValue,
          this.props.minimumValue +
            Math.round(
              ratio *
                (this.props.maximumValue - this.props.minimumValue) /
                this.props.step
            ) *
              this.props.step
        )
      );
    } else {
      return Math.max(
        this.props.minimumValue,
        Math.min(
          this.props.maximumValue,
          ratio * (this.props.maximumValue - this.props.minimumValue) +
            this.props.minimumValue
        )
      );
    }
  }

  getCurrentValue() {
    return this.state.value.__getValue();
  }

  getRatio(value) {
    return (
      (value - this.props.minimumValue) /
      (this.props.maximumValue - this.props.minimumValue)
    );
  }

  getThumbPos(value) {
    var ratio = this.getRatio(value);
    return ratio * this.state.length;
  }

  render() {
    const {
      minimumValue,
      maximumValue,
      minimumTrackTintColor,
      maximumTrackTintColor,
      thumbTintColor,
      containerStyle,
      style,
      trackStyle,
      thumbStyle,
      debugTouchArea,
      thumbTouchSize,
      onSlidingStart,
      onSlidingComplete,
      animationType,
      animateTransitions,
      animationConfig,
      orientation,
      ...other
    } = this.props;

    if (process.env.NODE_ENV !== 'test') {
      delete other.onValueChange;
    }

    var { value, containerSize, trackSize, thumbSize, length } = this.state;

    var mainStyles = containerStyle || styles;
    var thumbPos = value.interpolate({
      inputRange: [minimumValue, maximumValue],
      outputRange: [0, length],
      // outputRange: orientation === 'vertical' ? [length, 0] : [0, length],
      //extrapolate: 'clamp',
    });

    var valueVisibleStyle = {};

    var minimumTrackStyle = {
      position: 'absolute',
      width:
        orientation === 'vertical'
          ? TRACK_SIZE
          : Animated.add(thumbPos, thumbSize.width / 2),
      height:
        orientation === 'vertical'
          ? Animated.add(thumbPos, thumbSize.height / 2)
          : TRACK_SIZE,
      backgroundColor: minimumTrackTintColor,
      ...valueVisibleStyle,
    };

    const thumbStyleTransform = (thumbStyle && thumbStyle.transform) || [];
    const thumbTransform =
      orientation === 'vertical'
        ? [
            {
              translateX: (trackSize.width - thumbSize.width) / 2,
            },
            { translateY: thumbPos },
          ]
        : [
            { translateX: thumbPos },
            {
              translateY: (trackSize.height - thumbSize.height) / 2,
            },
          ];

    const maximumTrackStyle =
      orientation === 'vertical'
        ? { width: TRACK_SIZE, height: '100%' }
        : { width: '100%', height: TRACK_SIZE };
    return (
      <View
        {...other}
        style={[mainStyles.container, style]}
        onLayout={e => {
          this.measureContainer(e);
        }}
      >
        <View
          style={[
            { backgroundColor: maximumTrackTintColor },
            mainStyles.track,
            maximumTrackStyle,
            trackStyle,
          ]}
          onLayout={e => {
            this.measureTrack(e);
          }}
        />
        <Animated.View
          style={[mainStyles.track, trackStyle, minimumTrackStyle]}
        />
        <Animated.View
          onLayout={e => {
            this.measureThumb(e);
          }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={[
            { backgroundColor: thumbTintColor },
            mainStyles.thumb,
            thumbStyle,
            {
              transform: thumbTransform,
            },
          ]}
          {...this.panResponder.panHandlers}
        />
      </View>
    );
  }
}

Slider.propTypes = {
  /**
   * Initial value of the slider. The value should be between minimumValue
   * and maximumValue, which default to 0 and 1 respectively.
   * Default value is 0.
   *
   * *This is not a controlled component*, e.g. if you don't update
   * the value, the component won't be reset to its inital value.
   */
  value: PropTypes.number,

  /**
   * If true the user won't be able to move the slider.
   * Default value is false.
   */
  disabled: PropTypes.bool,

  /**
   * Initial minimum value of the slider. Default value is 0.
   */
  minimumValue: PropTypes.number,

  /**
   * Initial maximum value of the slider. Default value is 1.
   */
  maximumValue: PropTypes.number,

  /**
   * Step value of the slider. The value should be between 0 and
   * (maximumValue - minimumValue). Default value is 0.
   */
  step: PropTypes.number,

  /**
   * The color used for the track to the left of the button. Overrides the
   * default blue gradient image.
   */
  minimumTrackTintColor: PropTypes.string,

  /**
   * The color used for the track to the right of the button. Overrides the
   * default blue gradient image.
   */
  maximumTrackTintColor: PropTypes.string,

  /**
   * The color used for the thumb.
   */
  thumbTintColor: PropTypes.string,

  /**
   * The size of the touch area that allows moving the thumb.
   * The touch area has the same center has the visible thumb.
   * This allows to have a visually small thumb while still allowing the user
   * to move it easily.
   * The default is {width: 40, height: 40}.
   */
  thumbTouchSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),

  /**
   * Callback continuously called while the user is dragging the slider.
   */
  onValueChange: PropTypes.func,

  /**
   * Callback called when the user starts changing the value (e.g. when
   * the slider is pressed).
   */
  onSlidingStart: PropTypes.func,

  /**
   * Callback called when the user finishes changing the value (e.g. when
   * the slider is released).
   */
  onSlidingComplete: PropTypes.func,

  /**
   * The style applied to the slider container.
   */
  style: ViewPropTypes.style,

  /**
   * The style applied to the track.
   */
  trackStyle: ViewPropTypes.style,

  /**
   * The style applied to the thumb.
   */
  thumbStyle: ViewPropTypes.style,

  /**
   * Set this to true to visually see the thumb touch rect in green.
   */
  debugTouchArea: PropTypes.bool,

  /**
  * Set to true to animate values with default 'timing' animation type
  */
  animateTransitions: PropTypes.bool,

  /**
  * Custom Animation type. 'spring' or 'timing'.
  */
  animationType: PropTypes.oneOf(['spring', 'timing']),

  /**
  * Choose the orientation. 'horizontal' or 'vertical'.
  */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
  * Used to configure the animation parameters.  These are the same parameters in the Animated library.
  */
  animationConfig: PropTypes.object,
  containerStyle: ViewPropTypes.style,
};

Slider.defaultProps = {
  value: 0,
  minimumValue: 0,
  maximumValue: 1,
  step: 0,
  minimumTrackTintColor: '#3f3f3f',
  maximumTrackTintColor: '#b3b3b3',
  thumbTintColor: 'red',
  thumbTouchSize: { width: 40, height: 40 },
  debugTouchArea: false,
  animationType: 'timing',
  orientation: 'horizontal',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  track: {
    borderRadius: TRACK_SIZE / 2,
  },
  thumb: {
    position: 'absolute',
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: THUMB_SIZE / 2,
  },
  touchArea: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  debugThumbTouchArea: {
    position: 'absolute',
    backgroundColor: 'green',
    opacity: 0.5,
  },
});
