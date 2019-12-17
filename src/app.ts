const mediaStreamConstraints: MediaStreamConstraints = {
    video: true,
};

const localVideo = document.querySelector('video');
let localStream;

navigator.mediaDevices
    .getUserMedia(mediaStreamConstraints)
    .then(mediaStream => {
        console.log(mediaStream);
        localStream = mediaStream;
        localVideo.srcObject = mediaStream;
    })
    .catch(error => {
        console.log('Getting user media failed', error);
    });
