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

  if (style === 'numberGallery') {
    return (
      <>
        <Box
          pt={6}
          height='auto'
          width='100%'
          display='flex'
          justifyContent={'center'}
        >
          {currentImage && <SectionImage url={currentImage} type='full' />}
        </Box>
        <Box
          display='inline-flex'
          width='100%'
          height='10vh'
          mt={10}
          justifyContent={'center'}
          gap={5}
        >
          {data &&
            data?.map((currentData, index) => {
              console.log(currentData);
              return (
                <GalleryButton
                  background={selected === index ? 'white' : 'none'}
                  color={selected === index ? 'none' : 'white'}
                  handleSelect={() => {
                    _handleSelect(currentData, index);
                  }}
                  index={index}
                  type='number'
                  border='1px solid gray'
                />
              );
            })}
        </Box>
      </>
    );
  }
  if (style === 'buttonGallery') {
    return (
      <Box
        display='flex'
        flexDirection={{ base: 'column', md: 'column-reverse' }}
      >
        <Box
          p={8}
          pb={{ base: 8, md: 0 }}
          width='100%'
          display='flex'
          justifyContent={'center'}
        >
          <Box
            width='100vw'
            borderBottom={{
              base: 'solid 1px rgba(192, 192, 192, .3)',
              md: 'none'
            }}
            display='flex'
            justifyContent='center'
          >
            {currentImage && (
              <SectionImage url={currentImage} w h type='crew' />
            )}
          </Box>
        </Box>
        <Box
          display='inline-flex'
          width='100%'
          height='5vh'
          justifyContent={{ base: 'center' }}
          gap={5}
          alignSelf='flex-start'
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
                type='circle'
              />
            );
          })}
        </Box>
      </Box>
    );
  }
};

export default Gallery;
