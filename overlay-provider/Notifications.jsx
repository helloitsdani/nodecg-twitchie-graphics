import { Component } from 'preact'
import { connect } from 'preact-redux'

import * as actions from './actions/notifications'
import * as selectors from './selectors/notifications'

const defaultNotificationDuration = 5 * 1000
const defaultDowntimeDuration = 5 * 1000

class Notifications extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      visible: false,
    }
  }

  componentDidMount() {
    this.showNotification()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id === this.props.id) {
      return
    }

    this.showNotification()
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  }

  showNotification() {
    const {
      duration,
      id,
    } = this.props

    if (id === undefined) {
      return
    }

    this.timeout = setTimeout(
      () => this.setState({
        visible: true,
      }),
      0,
    )

    this.timeout = setTimeout(
      () => this.clearNotification(),
      duration || defaultNotificationDuration,
    )
  }

  clearNotification() {
    const {
      downtime,
      id,
      clearNotification,
    } = this.props

    if (id === undefined) {
      return
    }

    this.setState({
      visible: false,
    })

    this.timeout = setTimeout(
      () => clearNotification(id),
      downtime || defaultDowntimeDuration,
    )
  }

  render() {
    const {
      notification,
      id,
      children,
    } = this.props

    const {
      visible,
    } = this.state

    // preact always passes children as an array, unlike react
    const renderer = children[0]

    return notification
      ? renderer({
        id,
        notification,
        visible,
      })
      : null
  }
}

const mapStateToProps = (state) => {
  const notification = selectors.getNextNotification(state)
  const id = notification
    ? notification.id
    : undefined

  return {
    id,
    notification,
  }
}

const mapDispatchToProps = {
  clearNotification: actions.clearNotification,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifications)
