import React, { Component } from 'react';
import red from 'material-ui/colors/red';
import blue from 'material-ui/colors/blue';
import green from 'material-ui/colors/green';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import './App.css';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

const myButton = <Button variant="raised" color="primary">Hello Roni</Button>;
const message = props => <div>{props.msg}</div>;
class Carousel extends Component {
  render() {
    return (
      <div>
        <AutoRotatingCarousel
          label="Get started"
          open
        >
          <Slide
            media={<img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />}
            mediaBackgroundStyle={{ backgroundColor: red }}
            contentStyle={{ backgroundColor: red }}
            title="This is a very cool feature"
            subtitle="Just using this will blow your mind."
          />
          <Slide
            media={<img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />}
            mediaBackgroundStyle={{ backgroundColor: blue }}
            contentStyle={{ backgroundColor: blue }}
            title="Ever wanted to be popular?"
            subtitle="Well just mix two colors and your are good to go!"
          />
          <Slide
            media={<img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />}
            mediaBackgroundStyle={{ backgroundColor: green }}
            contentStyle={{ backgroundColor: green }}
            title="May the force be with you"
            subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars universe."
          />
        </AutoRotatingCarousel>
        <div>{myButton}</div>
        <div>
        {React.createElement(message, {msg: 'Hello World Text'})}
        {React.createElement(message, {
          msg: 'Creating Reusable React Components',
        })}
      </div>
      </div>

    );
  }
}

export default Carousel;
