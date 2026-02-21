document.addEventListener('DOMContentLoaded', function() {
  // Define target-audio pairs
  const targetAudioMap = {
    0: 'allemand-audio',
    1: 'curry-audio',
    2: 'meesseman-audio',
    3: 'russell-audio',
    
  };

  // Loop through each target and set up audio playback
  Object.entries(targetAudioMap).forEach(([targetIndex, audioId]) => {
    const targetEntity = document.querySelector(`a-entity[mindar-image-target="targetIndex: ${targetIndex}"]`);
    const audioElement = document.getElementById(audioId);
    
    if (targetEntity && audioElement) {
      // Listen for target found and lost events
      targetEntity.addEventListener('targetFound', function() {
        audioElement.play();
      });
      
      targetEntity.addEventListener('targetLost', function() {
        audioElement.pause();
        audioElement.currentTime = 0;
      });
    }
  });
});