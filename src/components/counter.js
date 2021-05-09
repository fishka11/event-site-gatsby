import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as counterStyles from './counter.module.scss';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      mins: 0,
      secs: 0,
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const { eventStartDate } = this.props;
    const diffrence = Math.abs(
      Math.floor((eventStartDate - Date.now()) / 1000)
    );
    const days = Math.floor(diffrence / (24 * 60 * 60));
    let secsLeft = diffrence - days * 24 * 60 * 60;
    const hours = Math.floor(secsLeft / (60 * 60));
    secsLeft -= hours * 60 * 60;
    const mins = Math.floor(secsLeft / 60);
    secsLeft -= mins * 60;
    const secs = secsLeft;
    this.setState(() => ({
      days,
      hours,
      mins,
      secs,
    }));
  }

  render() {
    const { days, hours, mins, secs } = this.state;
    const { eventStartDate, cancelled } = this.props;
    return (
      <div>
        {eventStartDate >= Date.now() && !cancelled ? (
          <p className={counterStyles.prolog}>Już za</p>
        ) : null}
        {!cancelled ? (
          <div className={counterStyles.counterContainer}>
            {eventStartDate < Date.now() ? (
              <p className={counterStyles.invitation}>
                Zapraszamy ponownie w {eventStartDate.getFullYear() + 1} roku{' '}
              </p>
            ) : (
              <p>
                {days > 0 && (
                  <span>
                    <span className={counterStyles.digit}>{days}</span>
                    {days === 1 ? 'dzień' : 'dni'}
                  </span>
                )}{' '}
                {(days > 0 || hours > 0) && (
                  <span className="hours-left">
                    <span className={counterStyles.digit}>
                      {hours.toString().padStart(2, '0')}
                    </span>
                    h
                  </span>
                )}{' '}
                {(days > 0 || hours > 0 || mins > 0) && (
                  <span className="mins-left">
                    <span className={counterStyles.digit}>
                      {mins.toString().padStart(2, '0')}
                    </span>
                    min
                  </span>
                )}{' '}
                <span className="secs-left">
                  <span className={counterStyles.digit}>
                    {secs.toString().padStart(2, '0')}
                  </span>
                  s
                </span>
              </p>
            )}
          </div>
        ) : (
          <div className={counterStyles.counterContainer2}>
            <p className="lead">
              Konfernecja została przeniesiona na marzec 2021
            </p>
          </div>
        )}
      </div>
    );
  }
}

Counter.propTypes = {
  eventStartDate: PropTypes.instanceOf(Date).isRequired,
  cancelled: PropTypes.bool,
};
Counter.defaultProps = { cancelled: false };

export default Counter;
