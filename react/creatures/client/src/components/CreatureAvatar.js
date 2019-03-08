import React, { Component } from 'react';
// import {
//   skinny,
//   slender,
//   sporty,
//   stocky,
//   patchy,
//   plain,
//   spotted,
//   striped
// } from '../assets';

// const propertyMap = {
//   backgroundColor: {
//     black: '#263238',
//     white: '#cfd8dc',
//     green: '#a5d6ac',
//     blue: '#0277bd'
//   },
//   build: { slender, stocky, sporty, skinny },
//   pattern: { plain, striped, spotted, patchy },
//   size: { small: 100, medium: 140, large: 180, enormous: 220 }
// };

class CreatureAvatar extends Component {
  // get CreatureImage() {
  //   return (
  //     <div className="creature-avatar-image-wrapper">
  //       <div
  //         className="creature-avatar-image-background"
  //         style={{ backgroundColor: propertyMap.backgroundColor.blue }}
  //       />
  //       <img
  //         src={propertyMap.pattern.spotted}
  //         alt=""
  //         className="creature-avatar-image-pattern"
  //       />
  //       <img
  //         src={propertyMap.build.sporty}
  //         alt=""
  //         className="creature-avatar-image"
  //       />
  //     </div>
  //   );
  // }

  render() {
    const { generationId, creatureId, traits } = this.props.creature;

    // if (!creatureId) return <div />;

    return (
      <div className="new__creature__listed">
        <div>
          <span>
            <strong>Gen: </strong>
            {generationId}
          </span>
        </div>

        <div>
          <span>
            <strong>ID: </strong>
            {creatureId}
          </span>
        </div>
        <div>
          <span>
            <strong>Traits: </strong>
            {traits.map(trait => trait.traitValue).join(', ')}
          </span>
        </div>

        {/* {this.CreatureImage} */}
      </div>
    );
  }
}

export default CreatureAvatar;
