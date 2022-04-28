import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import GalleryButton from './GalleryButton';
import SectionImage from '../SectionImage';

const Gallery = ({ style, data, handleSelect, currentImage }) => {
  const [selected, setSelected] = useState(0);
  function _handleSelect(currentData, index) {
    handleSelect(currentData);
    setSelected(index);
  }

  if (style === 'buttonGallery') {
    return (
      <>
        <Box p={8} width='100%' display='flex' justifyContent={'center'}>
          <Box
            width='100%'
            borderBottom={'solid 1px lightgray'}
            display='flex'
            justifyContent='center'
          >
            {currentImage && <SectionImage url={currentImage} />}
          </Box>
        </Box>
        <Box
          display='inline-flex'
          width='100%'
          height='6vh'
          justifyContent={'center'}
          gap={5}
        >
          {data?.map((currentData, index) => {
            console.log(currentData);
            return (
              <GalleryButton
                background={selected === index ? 'white' : 'gray'}
                handleSelect={() => {
                  _handleSelect(currentData, index);
                }}
                index={index}
              />
            );
          })}
        </Box>
      </>
    );
  }
};

export default Gallery;
