import React from 'react';
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from '@cloudinary/url-gen'

import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

export default function Img({uploadedImage}) {
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'djx2xc8ge'
        }
      }); 

    //   Use the image with public ID, 'front_face'.
      const myImage = cld.image(uploadedImage);
      myImage
      .resize(thumbnail().width(200).height(200).gravity(focusOn(FocusOn.face())))
    

    return(
        <>
        <AdvancedImage cldImg={myImage} />
        </>
    )
}