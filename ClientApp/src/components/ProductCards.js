import React from "react";
import { Link } from "react-router-dom";

import {
  Image,
  Button,
  Popup,
  Card,
  Statistic,
  Placeholder
} from "semantic-ui-react";

class ImageHover extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classNameHover: "" };
  }

  onMouseOver(e) {
    this.setState({
      classNameHover: "hvr-bob"
    });
  }

  onMouseOut(e) {
    this.setState({
      classNameHover: ""
    });
  }

  render() {
    return (
      <Image
        src={this.props.url}
        style={{ maxHeight: 300, padding: 20 }}
        centered={true}
        onMouseEnter={this.onMouseOver.bind(this)}
        onMouseLeave={this.onMouseOut.bind(this)}
        className={this.state.classNameHover}
      />
    );
  }
}

export const ProductCard = props => {
  return (
    <Card className="product-card">
      <Link to={"/product/" + props.id}>
        <ImageHover url={props.url} />
      </Link>

      <Card.Content fluid="true">
        <Card.Header style={{ minHeight: 50 }}>
          <Link to={"/product/" + props.id}>{props.title} </Link>
        </Card.Header>
        <Card.Description>
          <Statistic size="mini">
            <Statistic.Value>
              € {String(props.price).replace(".", ",")}
            </Statistic.Value>
          </Statistic>
        </Card.Description>
      </Card.Content>

      <Card.Content fluid="true">
        <div className="ui center aligned">
          <Link to={"/product/" + props.id}>
            <Popup
              trigger={<Button content="Toevoegen" icon="cart" color="green" />}
              content="Klik om het product toe te voegen aan jouw winkelwagen."
              hideOnScroll
            />
          </Link>
        </div>
      </Card.Content>
    </Card>
  );
};

export const ProductCardPlaceholder = () => {
  return (
    <Card className="product-card" style={{ height: 472 }}>
      <Placeholder style={{ height: 300 }}>
        <Placeholder.Image />
      </Placeholder>
      <Card.Content fluid="true">
        <Card.Header style={{ minHeight: 50 }}>
          <Placeholder>
            <Placeholder.Header image>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        </Card.Header>
      </Card.Content>
      <Card.Content fluid="true">
        <div className="ui center aligned">
          <Popup
            trigger={<Button content="Toevoegen" icon="cart" color="green" />}
            content="Klik om het product toe te voegen aan jouw winkelwagen."
            hideOnScroll
          />
        </div>
      </Card.Content>
    </Card>
  );
};