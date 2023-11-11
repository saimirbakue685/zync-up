/* 
File Name: SophisticatedCode.js

Description: This code demonstrates a complex implementation of a digital music player. It includes functionality for creating a playlist, adding songs, playing, pausing, skipping, and shuffling songs, as well as displaying the current playing song, playlist duration, and remaining time.

Note: This code is a simplified representation to demonstrate complexity. A real-world music player would have a lot more functionalities, error handling, and audio player integration.

Author: [Your Name]
Date: [Current Date]
*/

// Class representing a music player
class MusicPlayer {
  constructor() {
    this.playlist = []; // Array to store the playlist
    this.currentIndex = 0; // Index of the currently playing song
    this.isPlaying = false; // Flag to track if the player is currently playing
    this.shuffleMode = false; // Flag to track if shuffle mode is enabled
  }

  // Method to add a song to the playlist
  addSong(song) {
    this.playlist.push(song);
    console.log(`${song} added to the playlist.`);
  }

  // Method to remove a song from the playlist
  removeSong(song) {
    const index = this.playlist.indexOf(song);
    if (index !== -1) {
      this.playlist.splice(index, 1);
      console.log(`${song} removed from the playlist.`);
    } else {
      console.log(`${song} not found in the playlist.`);
    }
  }

  // Method to play the current song
  play() {
    if (this.playlist.length === 0) {
      console.log('Playlist is empty. Add songs to play.');
      return;
    }

    this.isPlaying = true;
    console.log(`Playing: ${this.playlist[this.currentIndex]}`);
  }

  // Method to pause the currently playing song
  pause() {
    if (this.playlist.length === 0) {
      console.log('Playlist is empty. Add songs to pause.');
      return;
    }

    this.isPlaying = false;
    console.log(`Paused: ${this.playlist[this.currentIndex]}`);
  }

  // Method to skip to the next song
  next() {
    if (this.playlist.length === 0) {
      console.log('Playlist is empty. Add songs to skip to the next song.');
      return;
    }

    this.currentIndex++;
    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0; // Reached the end of the playlist, go back to the first song
    }
    console.log(`Next Song: ${this.playlist[this.currentIndex]}`);
  }

  // Method to enable/disable shuffle mode
  toggleShuffle() {
    this.shuffleMode = !this.shuffleMode;
    console.log(`Shuffle mode: ${this.shuffleMode ? 'Enabled' : 'Disabled'}`);
  }

  // Method to shuffle the playlist
  shuffle() {
    if (this.playlist.length === 0) {
      console.log('Playlist is empty. Add songs to shuffle.');
      return;
    }

    for (let i = this.playlist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.playlist[i], this.playlist[j]] = [this.playlist[j], this.playlist[i]];
    }
    console.log('Playlist shuffled.');
  }

  // Method to display the current playing song
  displayCurrentSong() {
    if (this.playlist.length === 0) {
      console.log('No song is currently playing. Add songs to display the current song.');
      return;
    }

    console.log(`Current Song: ${this.playlist[this.currentIndex]}`);
  }

  // Method to display the total duration of the playlist
  displayPlaylistDuration() {
    let totalDuration = 0;
    for (let song of this.playlist) {
      totalDuration += song.duration;
    }
    console.log(`Playlist Duration: ${totalDuration} seconds`);
  }

  // Method to display the remaining time of the current song
  displayRemainingTime() {
    if (this.playlist.length === 0) {
      console.log('No song is currently playing. Add songs to display the remaining time.');
      return;
    }

    const currentSong = this.playlist[this.currentIndex];
    console.log(`Remaining Time: ${currentSong.duration - currentSong.currentTime} seconds`);
  }
}

// Class representing a song
class Song {
  constructor(title, duration) {
    this.title = title;
    this.duration = duration;
    this.currentTime = 0;
  }
}

// Create an instance of the MusicPlayer
const player = new MusicPlayer();

// Add songs to the playlist
player.addSong(new Song('Song 1', 180));
player.addSong(new Song('Song 2', 220));
player.addSong(new Song('Song 3', 195));

// Play the current song
player.play();

// Pause the currently playing song
player.pause();

// Skip to the next song
player.next();

// Enable shuffle mode
player.toggleShuffle();

// Shuffle the playlist
player.shuffle();

// Display the current playing song
player.displayCurrentSong();

// Display the total duration of the playlist
player.displayPlaylistDuration();

// Display the remaining time of the current song
player.displayRemainingTime();