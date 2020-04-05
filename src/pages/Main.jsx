import React from 'react';
import {
  Heading, List, Flex, Box,
} from '@chakra-ui/core';
import Song from '../components/Song';
import PlayerBar from '../components/PlayerBar';
import AddSong from '../components/AddSong';
import { useSongState } from '../state';

const Main = () => {
  const { songs } = useSongState();
  return (
    <Box width="100vw" minHeight="100vh" p={5} maxW={800} margin="auto">
      <Flex justifyContent="space-between" alignItems="center">
        <Box py={20}>
          <Heading>Music Player</Heading>
        </Box>
        <AddSong />
      </Flex>
      <List maxW={600} margin="auto">
        {songs.map((song) => (
          <Song key={song.title} song={song} />
        ))}
      </List>
      <PlayerBar />
    </Box>
  );
};

export default Main;
