document.addEventListener('DOMContentLoaded', function() {
  // Define target-audio pairs
  const targetAudioMap = {
    0: 'allemand-audio',
    1: 'curry-audio',
    2: 'meesseman-audio',
    3: 'russell-audio',
  };

  const muteButton = document.getElementById('muteButton');
  const muteIcon = document.getElementById('muteIcon');
  const audioElements = Object.values(targetAudioMap)
    .map((audioId) => document.getElementById(audioId))
    .filter(Boolean);

  let isMuted = false;
  let activeAudio = null;

  const applyMuteState = () => {
    const volume = isMuted ? 0 : 1;
    audioElements.forEach((audioElement) => {
      audioElement.volume = volume;
    });

    if (muteIcon) {
      muteIcon.src = isMuted
        ? 'assets/images/mute.svg'
        : 'assets/images/unmute.svg';
    }
  };

  if (muteButton) {
    muteButton.addEventListener('click', () => {
      isMuted = !isMuted;
      applyMuteState();

      if (activeAudio) {
        activeAudio.play();
      }
    });
  }

  applyMuteState();

  // Loop through each target and set up audio playback
  Object.entries(targetAudioMap).forEach(([targetIndex, audioId]) => {
    const targetEntity = document.querySelector(
      `a-entity[mindar-image-target="targetIndex: ${targetIndex}"]`
    );
    const audioElement = document.getElementById(audioId);

    if (targetEntity && audioElement) {
      // Listen for target found and lost events
      targetEntity.addEventListener('targetFound', function() {
        activeAudio = audioElement;
        audioElement.play();
      });

      targetEntity.addEventListener('targetLost', function() {
        if (activeAudio === audioElement) {
          activeAudio = null;
        }
        audioElement.pause();
        audioElement.currentTime = 0;
      });
    }
  });
});