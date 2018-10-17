import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import colors from '../config/colors';

import ViewPropTypes from '../config/ViewPropTypes';
import elevation from '../config/elevation';

const log = () => {
  /* eslint-disable no-console */
  console.log('Please attach a method to this component');
};
class Button extends Component {
  componentDidMount() {
    if (
      this.props.linearGradientProps != null &&
      this.props.ViewComponent == null
    ) {
      /* eslint-disable no-console */
      console.error(
        `You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('expo').LinearGradient}`
      );
    }
  }

  render() {
    const {
      ViewComponent,
      TouchableComponent,
      containerStyle,
      onPress,
      buttonStyle,
      clear,
      loading,
      loadingStyle,
      loadingProps,
      text,
      textStyle,
      textProps,
      icon,
      iconContainerStyle,
      iconRight,
      disabled,
      disabledStyle,
      disabledTextStyle,
      linearGradientProps,
      ...attributes
    } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        <TouchableComponent
          {...attributes} 
          onPress={onPress}
          activeOpacity={clear ? 0 : undefined}
          style={{
            borderRadius: buttonStyle.borderRadius,
          }}
          disabled={disabled}
        >
          <ViewComponent
            {...linearGradientProps}
            style={[
              styles.button,
              clear && {
                backgroundColor: 'transparent',
                ...Platform.select({
                  android: elevation.android.zero,
                  web: elevation.web.zero,
                }),
              },
              buttonStyle,
              linearGradientProps && { backgroundColor: 'transparent' },
              disabled && styles.disabled,
              disabled && disabledStyle,
            ]}
          >
            {loading && (
              <ActivityIndicator
                animating={true}
                style={[styles.loading, loadingStyle]}
                color={loadingProps.color}
                size={loadingProps.size}
                {...loadingProps}
              />
            )}
            {!loading &&
              icon &&
              !iconRight && (
                <View style={[styles.iconContainer, iconContainerStyle]}>
                  {icon}
                </View>
              )}
            {!loading && 
              !!text && (
                <Text style={[
                  styles.text, 
                  textStyle,                   
                  disabled && styles.disabledText,
                  disabled && disabledTextStyle
                  ]} 
                  {...textProps}
                  >
                  {text}
                </Text>
            )}
            {!loading &&
              icon &&
              iconRight && (
                <View style={[styles.iconContainer, iconContainerStyle]}>
                  {icon}
                </View>
              )}
          </ViewComponent>
        </TouchableComponent>
      </View>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  textStyle: Text.propTypes.style,
  textProps: PropTypes.object,
  buttonStyle: ViewPropTypes.style,
  clear: PropTypes.bool,
  loading: PropTypes.bool,
  loadingStyle: ViewPropTypes.style,
  loadingProps: PropTypes.object,
  onPress: PropTypes.any,
  containerStyle: ViewPropTypes.style,
  icon: PropTypes.object,
  iconContainerStyle: ViewPropTypes.style,
  iconRight: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  TouchableComponent: PropTypes.any,
  ViewComponent: PropTypes.any,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  disabledTextStyle: Text.propTypes.style,
};

Button.defaultProps = {
  iconRight: false,
  TouchableComponent:
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity,
  ViewComponent: View,
  onPress: log,
  clear: false,
  loadingProps: {
    color: 'white',
    size: 'small',
  },
  buttonStyle: {
    borderRadius: 3,
  },
  disabled: false,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: colors.primary,
    ...Platform.select({
      android: {
        ...elevation.android.four,
        borderRadius: 2,
      },
      web: {
        ...elevation.web.two,
      },
    }),
  },
  loading: {
    padding: 8,
  },
  disabled: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1D5D8',
  },
  disabledText: {
    color: '#F3F4F5',
    fontSize: 16,
    textAlign: 'center',
    padding: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 8,
    ...Platform.select({
      ios: {
        fontSize: 18,
      },
      android: {
        fontWeight: '500',
      },
    }),
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default Button;
