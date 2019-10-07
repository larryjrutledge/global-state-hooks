import React from 'react'
import { View, Text, Button } from 'react-native'

import { useStore, connect } from 'src/config/Store'

const HomeScreen = props => {
  // const [state, dispatch] = useStore()

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.theme.backgroundColor
      }}
    >
      <Text style={{ color: props.theme.primaryColor }}>HOME SCREEN</Text>
      <Button title="Get BLOG" onPress={() => props.blogFetch('')} />

      {props.themeName === 'light' ? (
        <Button
          title="Dark Theme"
          onPress={() => props.actions.changeTheme('dark')}
        />
      ) : (
        <Button
          title="Light Theme"
          onPress={() => props.actions.changeTheme('light')}
        />
      )}
      <Button
        title="Blue Green Theme"
        onPress={() => props.changeTheme('maximum_blue_green')}
      />
      <Button
        title="Bright Yellow Theme"
        onPress={() => props.changeTheme('bright_yellow')}
      />
    </View>
  )
}

const mapStateToProps = state => {
  return {
    theme: state.theme.styles,
    themeName: state.theme.selectedTheme
  }
}

const mapDispatchToProps = (dispatch, actions) => {
  return {
    changeTheme: themeName => actions.changeTheme(themeName),
    blogFetch: url => actions.blogFetch(url)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
