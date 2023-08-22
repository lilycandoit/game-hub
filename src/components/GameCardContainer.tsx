import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

//should pass data by adding GameCard and GameCardSkeleton as chilrens of this one
interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{ transform: 'scale(1.05)', transition: 'transform .15s ease-in'}}
      borderRadius={10}
      overflow='hidden' //because the image bigger the container so the borderradius works for the lower corners only
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
