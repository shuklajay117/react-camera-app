import React, { useEffect, useRef, useState } from 'react'
import "./style.scss";
import { Grid } from 'semantic-ui-react'

function CaptureImg() {

  const videoRef = useRef();
  const snapshotImage = useRef();
  const [videoData, setVideoData] = useState({
    active: false,
    error: '',
    capturedImg: false
  });

  useEffect(() => {
    console.log("calling");
    const fetchCameraData = async () => {
      
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: false,
          video: { deviceId: '' },
        });

        videoRef.current.srcObject = stream;
        setVideoData({ ...videoData, active: stream.active });
        videoRef.current.play();
      } catch (e) {
        console.log('error fetching data');
        setVideoData({ ...videoData, error: 'error fetching data' });
      }
    };
    if (!videoData.active) {
      fetchCameraData();
    }
  }, [videoData]);

  const captureImage = () => {
    setVideoData({ ...videoData, capturedImg: true });
    if (videoRef.current.srcObject) {
      const getSnapshot = snapshotImage.current.getContext('2d');
      snapshotImage.current.height = window.innerHeight;
      getSnapshot.drawImage(videoRef.current, 0, 0, window.innerWidth, window.innerHeight);
    }
  };

  const retakeImage = () => {
    const getSnapshot = snapshotImage.current.getContext('2d');
    getSnapshot.clearRect(0, 0, window.innerWidth, window.innerHeight);
    snapshotImage.current.height = 0;
    setVideoData({ ...videoData, capturedImg: false, active: false });
  };

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <div className="capture-wrapper">
              <div className='video-capture'>
                {!videoData.error ? (
                  <>
                    {!videoData.capturedImg &&
                      <>
                        <button type="button" onClick={captureImage} className="ui button">Capture</button>
                        <video width='100%' ref={videoRef} />
                    </> }
                    {videoData.capturedImg && 
                     <>        
                      <button type="button" onClick={retakeImage} className="ui button">Retake</button> 
                      <button type="button" onClick={captureImage} className="ui button">Upload</button>
                    </> }
                  </>
                ) : (
                  <p class='error'>{videoData.error}</p>
                )}
              </div>
              <div className='snapshot-image'>
                <canvas width={window.innerWidth} height="0" ref={snapshotImage} />
              </div>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default CaptureImg;