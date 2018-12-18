import React from "react";
import { Link } from "react-router-dom";

const Image = styled.img`

${props=>
  props.rounded &&
CSS`
paddding:5px;`

}

${props=> 
 props.rounded &&
 CSS`
border-radius: 50%;
`
}
`;

// const ImageRounded = styled.img`
// border-radius: 50%;
// ${props=>
//   alert(props)}
//   `;
const PhotoDetail = ({ photo }) => (
  <div>
    <div style={{ padding: 20 }}>
      <Link to="/photos">go to Gallery</Link>
    </div>
    <image circle alt={`detail ${photo.id}`} src={photo.url} />
  </div>
);

export default PhotoDetail;
