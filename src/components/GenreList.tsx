import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const onSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null; //null to avoid showing error too much in parts of the page
  if (isLoading) return <Spinner />;

  //if using the Static Genres, we can remove the above to codes of error and loading

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY='5px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover' //the image will be scale to fill the container why preserving its aspect ratio.
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace='normal'
                textAlign='left'
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                onClick={() => onSelectedGenreId(genre.id)}
                fontSize='lg'
                variant='link'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

//replace ul by List, so it will remove the bullets
//paddingY >> vertical padding
